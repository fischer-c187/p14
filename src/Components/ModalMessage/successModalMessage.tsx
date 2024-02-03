import ModalMessage from "./ModalMessage";
import succesIcon from "../../assets/success.svg";

function SuccessModalMessage() {
  return (
    <ModalMessage
      icon={succesIcon}
      title='Employee Added Successfully'
      message='The new employee has been successfully added to the system'
    />
  );
}

export default SuccessModalMessage;
