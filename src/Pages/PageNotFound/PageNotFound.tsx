import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      className='text-center p-10 w-4/5 lg:w-1/2 m-auto mt-screen-quarter'
      data-testid='pageNotFound'
    >
      <h1 className='text-5xl font-bold mb-4 lg:text-6xl'>Page Not Found</h1>
      <p className='mb-8'>
        {`Oops! The page you're looking for doesn't exist. It might have been moved or deleted,
         or perhaps the URL was entered incorrectly. Let's get you back on track!`}
      </p>
      <p>
        <Link to='/' className='text-blue-600 hover:text-blue-800'>
          Go Home
        </Link>{" "}
        to start from the beginning.
      </p>
      <p className='my-4'>Use the navigation menu to find what you need.</p>
    </div>
  );
}

export default PageNotFound;
