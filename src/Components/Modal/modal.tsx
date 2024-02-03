import Button from "@components/Button/button";
import { useEffect, useRef, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, hasCloseBtn = true, onClose, children }: ModalProps) {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className='p-10 rounded-xl min-w-96 backdrop-blur-lg dialog-backdrop'
      data-testid='modalWrapper'
    >
      {children}
      {hasCloseBtn && (
        <Button
          type='button'
          onClick={handleCloseModal}
          className='bg-citron-600 text-gray-50 hover:bg-citron-700 mx-auto block mt-5'
        >
          Close
        </Button>
      )}
    </dialog>
  );
}

export default Modal;
