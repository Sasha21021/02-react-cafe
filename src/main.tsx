import { createRoot } from "react-dom/client";
import App from "./components/App/App"; // без фігурних дужок!

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
