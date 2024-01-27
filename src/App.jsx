import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Footer from "./components/Footer";
import PileContextProvider from "./components/PileContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <PileContextProvider>
          <Layout />
        </PileContextProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
