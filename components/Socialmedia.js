import socialStyles from "../styles/SocialMedia.module.css";

function Socialmedia() {
  const socialMedia = [
    {
      desc: "github",
      imgsrc: "./social/github-dark.png",
      link: "https://github.paypal.com/gurusubramaniam",
    },
    {
      desc: "Linkedin",
      imgsrc: "./social/linkedin-dark.png",
      link: "https://linkedin.com/in/gurusubramaniams",
    },
    {
      desc: "email",
      imgsrc: "./social/mail.png",
      link: "mailto:gurutii@gmail.com",
    },
    {
      desc: "Whatsapp",
      imgsrc: "./social/whatsapp-dark.png",
      link: "https://wa.me/+14088135156",
    },
    {
      desc: "instagram",
      imgsrc: "./social/instagram-dark.png",
      link: "https://www.instagram.com/gurutii/",
    },
  ];
  return (
    <footer className={socialStyles.socialcontainer}>
      <ul className={socialStyles.socialdisplay}>
        {socialMedia.map((item, index) => (
          <li key={`social${index}`} className={socialStyles.socialdisplay}>
            <a href={item.link} target="_blank">
              <img
                src={item.imgsrc}
                alt={item.desc}
                className={socialStyles.smedia}
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Socialmedia;
