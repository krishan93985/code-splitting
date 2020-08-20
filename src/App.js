import React, { useState, lazy, Suspense } from "react";
import logo from "./logo.svg";
import Page1 from "./components/Page1";
import "./App.css";

//async loading
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));
//import Page2 from './components/Page2';
//import Page3 from './components/Page3';

function App() {
  const [route, setRoute] = useState("Page1");

  const handleRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {route === "Page1" ? (
          <Page1 handleRouteChange={handleRouteChange} />
        ) : route === "Page2" ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Page2 handleRouteChange={handleRouteChange} />
          </Suspense>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <Page3 handleRouteChange={handleRouteChange} />
          </Suspense>
        )}
      </header>
    </div>
  );
}

export default App;
