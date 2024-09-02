import React from "react";
import Router from "./router";

const App: React.FC = () => {
  return (
    <div className="dark:bg-black h-screen w-screen">
      <Router />
    </div>
  );
};

export default App;
