import cppLogo from "./assets/C++-logo.png";
import cssLogo from "./assets/css3-logo.png";
import htmlLogo from "./assets/html5-logo.webp";
import jsLogo from "./assets/js-logo.webp";
import pythonLogo from "./assets/python-logo.png";
import reactLogo from "./assets/react_logo.png";
import angularLogo from "./assets/angular-icon.png";
import ScrollFade from "./ScrollFade";
import headshotImage from "./assets/headshot.png";


const languages = [
  {
    name: "C++",
    image: cppLogo,
  },
  {
    name: "CSS3",
    image: cssLogo,
  },
  {
    name: "HTML5",
    image: htmlLogo,
  },
  {
    name: "JavaScript",
    image: jsLogo,
  },
  {
    name: "Python",
    image: pythonLogo,
  },
  {
    name: "React",
    image: reactLogo,
  },
  {
    name: "Angular",
    image: angularLogo,
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <ScrollFade delay={0.1} className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">About Me</h3>

          <div className="grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] gap-10 items-start">
            <div className="w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={headshotImage}
                alt="Headshot"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl">
                My name is Alberto. I am a first-generation student at DePaul, with
                a major in computer science, focusing on software development. My
                work focuses on the user experience and user interaction for
                websites and mobile apps, ensuring websites are functional,
                accessible, and responsive.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl">
                I seek an opportunity to grow my skills and experience in web and
                mobile applications development through creating and maintaining
                user interaction and experiences.
              </p>
            </div>
          </div>
        </ScrollFade>

        <ScrollFade delay={0.2}>
          <h3 className="text-4xl md:text-5xl font-bold mb-10">Languages</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <ScrollFade key={language.name} delay={index * 0.12}>
                <button type="button" className="language-card">
                  <img
                    src={language.image}
                    alt={`${language.name} logo`}
                    className="language-logo"
                  />
                </button>
              </ScrollFade>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
};

export default About;
