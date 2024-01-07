import { RouterProvider } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { router } from "./routes";
import "./global.css";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Dashboard" />

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
