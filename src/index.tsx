import React from "react";
import ReactDOM from "react-dom/client";

const App = (): React.ReactNode => <div>test</div>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
