import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuPage } from "./pages/MenuPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuPage />
  </StrictMode>
);
