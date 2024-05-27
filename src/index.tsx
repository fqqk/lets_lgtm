import { StrictMode } from 'react';
// {}で包むと何が違う？
import { createRoot } from "react-dom/client";
import App from "./app";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
