import React from "react";
import Router from "./routes/Router";
import { GlobalState } from "./global/GlobalState";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <GlobalState>
      <GlobalStyle/>
      <Router/>
    </GlobalState>
  );
}

export default App;
