import Modal from "@components/Modal/modal";
import ErrorModalMessage from "@components/ModalMessage/errorModalMessage";
import SuccessModalMessage from "@components/ModalMessage/successModalMessage";
import AddEmployee from "@layouts/forms/addEmployee";
import { useCallback, useState } from "react";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error" | "">("");

  const handleSuccessSubmit = useCallback(() => {
    setModalType("success");
    setIsModalOpen(true);
  }, []);

  const handleErrorSubmit = useCallback(() => {
    setModalType("error");
    setIsModalOpen(true);
  }, []);

  return (
    <div className='flex flex-col gap-16 max-w-7xl m-auto py-9 justify-center'>
      <h1
        data-testid='homePage'
        className='text-center text-5xl font-bold font-roboto px-4'
      >
        Create Employee
      </h1>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalType === "success" ? (
          <SuccessModalMessage />
        ) : (
          <ErrorModalMessage />
        )}
      </Modal>
      <AddEmployee
        onSuccessfulSubmission={handleSuccessSubmit}
        onFailedSubmission={handleErrorSubmit}
      />
    </div>
  );
}

export default Home;
