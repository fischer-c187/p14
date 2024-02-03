import ModalMessage from "./ModalMessage";
import errorIcon from "../../assets/error.svg";

function ErrorModalMessage() {
  return (
    <ModalMessage
      icon={errorIcon}
      title='Failed to Add Employee'
      message='There was an error adding the new employee to the system.'
    />
  );
}

export default ErrorModalMessage;
