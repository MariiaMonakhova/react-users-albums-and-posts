import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { App } from "./App.js";

const Root = () => (
  <Router>
    <App />
  </Router>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Root />);
