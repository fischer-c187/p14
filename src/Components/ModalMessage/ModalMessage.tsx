type ModalMessageProps = {
  title?: string;
  message?: string;
  icon?: string;
};

function ModalMessage({ title, message, icon }: ModalMessageProps) {
  return (
    <div className='text-center'>
      {icon && (
        <img
          src={icon}
          alt='icon modal'
          className='w-12 h-12 mx-auto mb-5'
          aria-hidden
        />
      )}
      {title && (
        <h2 className='text-lg text-gray-900 font-semibold'>{title}</h2>
      )}{" "}
      {message && <p className='text-gray-500 text-sm'>{message}</p>}
    </div>
  );
}

export default ModalMessage;
