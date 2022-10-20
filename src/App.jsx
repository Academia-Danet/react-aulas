import { GlobalStyle } from "./assets/style/globalStyle";
import { Banner } from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <GlobalStyle />
    </>
  );
}

export default App;
