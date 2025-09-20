// src/App.jsx
import Nav from "./components/nav.jsx";
import Hero from "./components/Hero/hero.jsx";
import CourseStat from "./components/courseStat.jsx";

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <CourseStat />
    </div>
  );
}

export default App;
