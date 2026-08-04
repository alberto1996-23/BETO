import Galaxy from "./Galaxy";
import Header from "./Header";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="bg-black">
      <section
        id="home"
        className="w-full h-screen relative bg-black flex justify-center items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.2}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </div>

        <Navbar />
        <Header />
      </section>

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
