import SuccessModalMessage from "@components/ModalMessage/successModalMessage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import Modal from "./modal";

describe("Modal", () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should render without error", () => {
    render(
      <Modal isOpen={false}>
        <div>test</div>
      </Modal>
    );

    expect(screen.queryByTestId("modalWrapper")).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should show modal when isOpen is true", () => {
    render(
      <Modal isOpen>
        <div>test</div>
      </Modal>
    );

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });
  it("should close modal when isOpen is false", () => {
    render(
      <Modal isOpen={false}>
        <div>test</div>
      </Modal>
    );

    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  });
  it("should call onClose when close button is clicked", async () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose}>
        <div>test</div>
      </Modal>
    );

    await userEvent.click(screen.getByText("Close"));
    expect(onClose).toHaveBeenCalled();
  });

  it('should display success message when modalType is "success"', () => {
    render(
      <Modal isOpen>
        <SuccessModalMessage />
      </Modal>
    );

    expect(screen.getByText("Employee Added Successfully")).toBeInTheDocument();
  });
});
