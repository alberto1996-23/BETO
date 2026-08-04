import ScrollFade from "./ScrollFade";
import hyruleArchivesImage from "./assets/the_hyrule_archives.png";
import pikaJointImage from "./assets/the_pika_joint.png";
import marioKartImage from "./assets/mario_kart_64_soundboard.png";

const projects = [
    {
        title: "The Hyrule Archives",
        description: "A community-space website based on The Legend of Zelda games. Users can view games, favorite titles, react to games, and see recent public activity.",
        image: hyruleArchivesImage,
        github: "https://github.com/alberto1996-23/Hyrule-Archives"
    },
    {
        title: "The Pika Joint",
        description: "A simple website where users can make orders for pokemon-themed food items.",
        image: pikaJointImage,
        github: "https://github.com/alberto1996-23/The-Pika-Joint"
    },
    {
        title: "Mario Kart 64 Soundboard",
        description: "A soundboard application featuring various sound effects from the game Mario Kart 64.",
        image: marioKartImage,
        github: "https://github.com/alberto1996-23/Mario-Kart-64-Sound-Board"
    }
]

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center">
        <div className="w-full max-w-6xl">
            <ScrollFade delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                Projects
            </h2>
            </ScrollFade>

            <div className = "flex flex-col gap-16">
                {projects.map((project, index) => {
                    const imageFirst = index % 2 === 0;

                    return (
                        <ScrollFade key={index} delay={0.2}>
                            <article className = {`project-card ${imageFirst ? "project-card-image-left" : "project-card-image-right"}`}>
                                <div className = "project-image-box">
                                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`} className="project-image-link">
                                        <img src={project.image} alt={`${project.title} screenshot`} className = "project-image" />
                                    </a>
                                </div>

                                <div className = "project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </article>
                        </ScrollFade>
                    );
                })}
            </div>
        </div>
    </section>
  );
}   

export default Projects;