import DataContext, { DataProvider } from "./context/DataContext";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { useContext } from "react";

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

function AppContent() {
  const { darkMode } = useContext(DataContext);
  return (
    <div className={darkMode ? "dark" : ""}>
      <img
        className="absolute right-[31rem] top-[42.2rem] z-10"
        src="src/assets/decoration/Ellipse 11.png"
        alt=""
      />
      <img
        className="absolute right-0 top-[72.5rem] z-10"
        src="src/assets/decoration/Ellipse 12.png"
        alt=""
      />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
