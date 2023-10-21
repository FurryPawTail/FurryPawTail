import React from "react";
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "../store";
import { BrowserRouter } from 'react-router-dom'

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
});
