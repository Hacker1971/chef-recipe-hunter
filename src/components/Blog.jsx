import React from "react";

const Blog = () => {
  return (
    <div className="text-center p-5">
      <div className="shadow-xl my-4 p-6">
        <h1 className="text-3xl font-bold">
          Difference Between Controlled and Uncontrolled Components?
        </h1>
        <p className="text-2xl">
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </p>
      </div>
      <div className="shadow-xl my-4 p-6">
        <h1 className="text-3xl font-bold">
          How to validate React props using PropTypes?
        </h1>
        <p className="text-2xl">
          In React, PropTypes is a built-in library that can be used to validate
          the props of a component. It helps ensure that the component is
          receiving the expected type of data for its props, making debugging
          easier and improving code reliability.
        </p>
      </div>
      <div className="shadow-xl my-4 p-6">
        <h1 className="text-3xl font-bold">
          Tell us the difference between nodejs and express js.
        </h1>
        <p className="text-2xl">
          NodeJS is the package, which provides the JavaScript run-time
          environment, whereas Express is a framework that sits on top of NodeJS
          and helps us to handle requests and responses.
        </p>
      </div>
      <div className="shadow-xl my-4 p-6">
        <h1 className="text-3xl font-bold">
          What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="text-2xl">
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
