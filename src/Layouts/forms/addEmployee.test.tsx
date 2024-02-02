import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AddEmployee from "./addEmployee";

const mocks = vi.hoisted(() => ({
  usePostEmployee: vi.fn(() => ({
    mutate: vi.fn(),
    isPending: false,
  })),
  useFormValidation: vi.fn(() => ({
    errors: {},
    register: vi.fn(() => {}),
    validateForm: vi.fn(() => true),
  })),
}));

vi.mock("@hooks/usePostEmployee", () => ({
  default: mocks.usePostEmployee,
}));

vi.mock("@hooks/useFormValidation", () => ({
  default: mocks.useFormValidation,
}));

describe("AddEmployee", () => {
  beforeEach(() => {
    vi.resetModules();
  });
  it("should match the snapshot", () => {
    const queryClient = new QueryClient();
    const handleSuccessSubmission = vi.fn();
    const handleFailedSubmission = vi.fn();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <AddEmployee
          onSuccessfulSubmission={handleSuccessSubmission}
          onFailedSubmission={handleFailedSubmission}
        />
      </QueryClientProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should display the loader when the form is submitting", () => {
    vi.mocked(mocks.usePostEmployee).mockReturnValue({
      mutate: vi.fn(),
      isPending: true,
    });

    const queryClient = new QueryClient();
    const handleSuccessSubmission = vi.fn();
    const handleFailedSubmission = vi.fn();
    render(
      <QueryClientProvider client={queryClient}>
        <AddEmployee
          onSuccessfulSubmission={handleSuccessSubmission}
          onFailedSubmission={handleFailedSubmission}
        />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("calls onSuccessfulSubmission after successful mutation", async () => {
    vi.mocked(mocks.usePostEmployee).mockReturnValue({
      mutate: vi.fn((_, { onSuccess, onError }) =>
        Promise.resolve()
          .then(() => (onSuccess ? onSuccess("data de réponse simulée") : null))
          .catch((error) => (onError ? onError(error) : null))
      ),
      isPending: false,
    });

    vi.mock("@hooks/useFormValidation", () => ({
      default: vi.fn(() => ({
        errors: {},
        register: vi.fn(() => {}),
        validateForm: vi.fn(() => true),
      })),
    }));

    const queryClient = new QueryClient();
    const handleSuccessSubmission = vi.fn();
    const handleFailedSubmission = vi.fn();

    const user = userEvent.setup();

    render(
      <QueryClientProvider client={queryClient}>
        <AddEmployee
          onSuccessfulSubmission={handleSuccessSubmission}
          onFailedSubmission={handleFailedSubmission}
        />
      </QueryClientProvider>
    );
    await user.type(screen.getByLabelText(/First Name/i), "John");
    await user.type(screen.getByLabelText(/Last Name/i), "Doe");
    await user.type(screen.getByLabelText(/Birth of Date/i), "01/01/1990");
    await user.type(screen.getByLabelText(/Start Date/i), "01/01/2022");
    await user.type(screen.getByLabelText(/Street/i), "123 Main St");
    await user.type(screen.getByLabelText(/City/i), "Anytown");
    // Pour les dropdowns, vous pouvez simuler un choix comme ceci :
    await user.type(screen.getByLabelText(/Zip Code/i), "12345");

    await user.click(screen.getByRole("button", { name: /save/i }));
    await waitFor(() => {
      expect(handleSuccessSubmission).toHaveBeenCalledTimes(1);
    });
  });

  it("calls onFailedSubmission after failed mutation", async () => {
    vi.mocked(mocks.usePostEmployee).mockReturnValue({
      mutate: vi.fn((_, { onSuccess, onError }) =>
        Promise.reject(new Error("Erreur simulée"))
          .then(() => (onSuccess ? onSuccess("data de réponse simulée") : null))
          .catch((error) => (onError ? onError(error) : null))
      ),
      isPending: false,
    });

    vi.mock("@hooks/useFormValidation", () => ({
      default: vi.fn(() => ({
        errors: {},
        register: vi.fn(() => {}),
        validateForm: vi.fn(() => true),
      })),
    }));

    const queryClient = new QueryClient();
    const handleSuccessSubmission = vi.fn();
    const handleFailedSubmission = vi.fn();

    const user = userEvent.setup();

    render(
      <QueryClientProvider client={queryClient}>
        <AddEmployee
          onSuccessfulSubmission={handleSuccessSubmission}
          onFailedSubmission={handleFailedSubmission}
        />
      </QueryClientProvider>
    );
    await user.type(screen.getByLabelText(/First Name/i), "John");
    await user.type(screen.getByLabelText(/Last Name/i), "Doe");
    await user.type(screen.getByLabelText(/Birth of Date/i), "01/01/1990");
    await user.type(screen.getByLabelText(/Start Date/i), "01/01/2022");
    await user.type(screen.getByLabelText(/Street/i), "123 Main St");
    await user.type(screen.getByLabelText(/City/i), "Anytown");
    // Pour les dropdowns, vous pouvez simuler un choix comme ceci :
    await user.type(screen.getByLabelText(/Zip Code/i), "12345");

    await user.click(screen.getByRole("button", { name: /save/i }));
    await waitFor(() => {
      expect(handleFailedSubmission).toHaveBeenCalledTimes(1);
    });
  });
});
