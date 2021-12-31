import ReactDOM from "react-dom";
import { OverlayProvider } from "@react-aria/overlays";
import { App } from "./App";

const app = document.getElementById("app");
ReactDOM.render(
  <OverlayProvider>
    <App />
  </OverlayProvider>,
  app
);
