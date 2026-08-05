import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply the saved theme before first paint (premium dark by default).
if (localStorage.getItem("hp-dark") !== "false") {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
