import { initThemeMode } from "flowbite-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.tsx";
import "./index.css";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

initThemeMode();
