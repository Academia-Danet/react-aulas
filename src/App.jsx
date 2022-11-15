import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./assets/style/globalStyle";
import Navbar from "./components/Navbar/Navbar";
import { router } from "./Router";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
