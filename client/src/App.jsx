import React from "react";
// import { useGetData } from "./hooks/useGetData.jsx";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";

const App = () => {
  // const { data, loading } = useGetData("/hello");

  return (
    <div className="wrapper">
      <Header />
      <Main/>
    </div>
  );
};

export default App;
