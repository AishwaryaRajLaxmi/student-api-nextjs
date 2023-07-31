import React from "react";
import StudentForm from "./StudentForm";
import CallingStudent from "./CallingStudent";

const Layout = () => {
  return (
    <div className="flex">
      <div className="w-3/12">
        <StudentForm />
      </div>
      <div className="w-9/12">
        <CallingStudent />
      </div>
    </div>
  );
};

export default Layout;
