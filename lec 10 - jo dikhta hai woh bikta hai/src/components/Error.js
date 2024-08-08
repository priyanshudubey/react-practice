import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>OOOPPPPSSSSSS</h1>
      <h2>Page Not Found</h2>
      <h3>
        {err.status} , {err.data}
      </h3>
    </div>
  );
};

export default Error;
