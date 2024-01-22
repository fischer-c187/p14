import AddEmployee from "@layouts/forms/addEmployee";

function Home() {
  return (
    <div className='flex flex-col gap-16 max-w-7xl m-auto py-12 mt-8 justify-center'>
      <h1
        data-testid='homePage'
        className='text-center text-5xl font-bold font-roboto px-4'
      >
        Create Employee
      </h1>
      <AddEmployee />
    </div>
  );
}

export default Home;
