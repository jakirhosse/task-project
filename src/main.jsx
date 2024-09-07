import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Router.jsx";
import { Provider } from "react-redux";
import AuthProvider from "./provider/AuthProvider.jsx";
import { store } from "./redux/store.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={Router}></RouterProvider>
      </Provider>
    </AuthProvider>
  </StrictMode>
);
