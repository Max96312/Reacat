import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuPage } from "./pages/MenuPage.tsx";
import "./index.css"; // 추가된 부분

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuPage />
  </StrictMode>
);
