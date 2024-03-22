import "./App.css";
import { Work } from "./components/Work/Work";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer.jsx/Footer";


function App() {
  return (
   <>
   <Header/>
   <Home />
   <About />
   <Work />
   <Contact />
   <Footer />
   </>
   
  );
}

export default App;
