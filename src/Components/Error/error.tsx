type ErrorFormProps = {
  errorMessage: string | undefined;
};

/**
 * `ErrorForm` is a component for displaying error messages.
 * It renders a text message when an error occurs, otherwise, it returns null.
 *
 * Props:
 * - `errorMessage` (string | undefined): The error message to display. If undefined or empty, the component renders nothing.
 *
 * Example usage:
 * ```jsx
 * <ErrorForm errorMessage="This field is required" />
 * ```
 */
function ErrorForm({ errorMessage }: ErrorFormProps) {
  if (!errorMessage) {
    return null;
  }

  return (
    <span data-testid='errorForm' role='alert' className='text-red-600 text-xs'>
      {errorMessage}
    </span>
  );
}

export default ErrorForm;
