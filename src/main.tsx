import { createRoot } from "react-dom/client";
import * as React from "react";
import App from "./app";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
