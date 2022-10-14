import React from "react";

const FetchErrorHandler = ({
  error,
  children,
  className = "",
  text = "something wents to wrong",
}) => {
  return error.isError ? (
    <>
      {/* {console.warn(data.error)} */}
      <div className={`error_msg ${className}`}>
        <i className="bx bx-sad"></i>
        {text}
      </div>
    </>
  ) : (
    <>{children}</>
  );
};

export default FetchErrorHandler;
