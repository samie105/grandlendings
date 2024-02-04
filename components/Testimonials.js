/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HoA6tdQhfd6
 */
export default function TestSteps() {
  return (
    <section className="w-full pb-12 z-50 ">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="card shadow-lg rounded-xl bg-white bg-opacity-20 backdrop-blur-md dark:bg-gray-800 p-6">
            <div className="card-body flex flex-col items-center">
              <PencilIcon className="h-8 w-8 mb-4 text-white" />
              <h2 className="card-title text-xl text-white font-bold">
                Application
              </h2>
              <p className="text-gray-200 text-center mt-2">
                Apply for the ERA program through your local government or
                housing authority.
              </p>
            </div>
          </div>
          <div className="card shadow-lg rounded-xl bg-white bg-opacity-20 backdrop-blur-md dark:bg-gray-800 p-6">
            <div className="card-body flex flex-col items-center">
              <CheckIcon className="h-8 w-8 mb-4 text-white" />
              <h2 className="card-title text-xl text-white font-bold">
                Approval
              </h2>
              <p className="text-gray-200 text-center mt-2">
                Your application will be reviewed and approved based on
                eligibility criteria.
              </p>
            </div>
          </div>
          <div className="card shadow-lg rounded-xl bg-white bg-opacity-20 backdrop-blur-md dark:bg-gray-800 p-6">
            <div className="card-body flex flex-col items-center">
              <HomeIcon className="h-8 w-8 mb-4 text-white" />
              <h2 className="card-title text-xl text-white font-bold">
                Assistance
              </h2>
              <p className="text-gray-200 text-center mt-2">
                Once approved, you will receive financial assistance for housing
                stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}
