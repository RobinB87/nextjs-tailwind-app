"use client";

// use client is necessary in an error component
// next js automatically passes the error object to this component
// next js can also automatically pass the reset function to the component if you want to give the user a chance to retry a function
interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("e", error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
