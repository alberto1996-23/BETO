import ScrollFade from "./ScrollFade";

const Header = () => {
  return (
    <header className="absolute z-10 flex flex-col justify-center items-center text-center px-6">
      <ScrollFade
        as="p"
        delay={0.1}
        className="text-4xl md:text-2xl mb-4 font-light text-white"
      >
        Hi.
      </ScrollFade>

      <ScrollFade
        as="h2"
        delay={0.3}
        className="text-3xl md:text-4xl mb-6 font-light text-white"
      >
        I am
      </ScrollFade>

      <ScrollFade
        as="h1"
        delay={0.5}
        className="text-5xl md:text-7xl mb-6 font-bold text-white"
      >
        Alberto Williams
      </ScrollFade>

      <ScrollFade
        as="p"
        delay={0.7}
        className="text-xl md:text-2xl font-bold text-white"
      >
        Software Developer
      </ScrollFade>
    </header>
  );
};

export default Header;
