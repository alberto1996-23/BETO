import ScrollFade from "./ScrollFade";
import linkedInImage from "./assets/linkedin-logo.webp";
import handshakeImage from "./assets/handshake-logo.jpg";
import githubImage from "./assets/github-logo.png";

const contacts = [
  {
    title: "LinkedIn",
    image: linkedInImage,
    href: "https://www.linkedin.com/in/albertowilliams",
    text: "I can be found on LinkedIn, where I share my professional experiences and connect with other professionals in the tech industry.",
  },
  {
    title: "Handshake",
    image: handshakeImage,
    href: "https://depaul.joinhandshake.com/profiles/fe622u",
    text: "I also can be found on Handshake at Alberto Williams.",
  },
  {
    title: "GitHub",
    image: githubImage,
    href: "https://github.com/alberto1996-23",
    text: "I also can be found on GitHub at alberto1996-23."
  }
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <ScrollFade delay={0.1}>
          <h2 className="contact-title">Contact Me</h2>
        </ScrollFade>

        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <ScrollFade key={index} delay={0.2 + index * 0.12}>
              <article className={`contact-card ${index === 1 ? "contact-card-shift" : ""}`}>
                <h2 className="contact-card-title">{contact.title}</h2>

                <a href={contact.href} target="_blank" rel="noreferrer" aria-label={`Open ${contact.title}`} className="contact-image-link">
                  <div className="contact-image-frame">
                    <img src={contact.image} alt={contact.title} className="contact-image" />
                  </div>
                </a>

                <p className="contact-card-text">{contact.text}</p>
              </article>
            </ScrollFade>
          ))} 
        </div>
      </div>
    </section>
  );
}

export default Contact;