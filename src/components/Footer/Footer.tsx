import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo.svg";
import insta from "../../assets/images/footer/insta.svg";
import telega from "../../assets/images/footer/telega.svg";
import whatsApp from "../../assets/images/footer/whatApp.svg";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      img: insta,
      path: "/",
      img_alt: "инстаграм",
    },
    {
      id: 2,
      img: telega,
      path: "/",
      img_alt: "телеграм",
    },
    {
      id: 3,
      img: whatsApp,
      path: "/",
      img_alt: "ватсап",
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className={styles.footerBlock}>
          <div className={styles.footerBlock__logo}>
            <div>
              <img src={logo} alt="logo" />
              <h3>Арча Бешик</h3>
            </div>
            <div className={styles.social}>
              {socialMedia?.map((social) => (
                <a href={social.path} key={social?.id}>
                  <img src={social?.img} alt={social?.img_alt} />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.mapBlock}>
            <iframe
              style={{ width: "500px", height: "300px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7040230242824!2d74.615768675839!3d42.87909090215336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794b532a8f1%3A0xcea5bfa3cae816aa!2sVictory!5e0!3m2!1sru!2skg!4v1691149096284!5m2!1sru!2skg"
            ></iframe>
          </div>
          <ul>
            <li>
              <h3>Контакты</h3>
            </li>
            <li>T: +996(700)75-44-54</li>
            <li>T: +996(502)02-49-64</li>
            <li>E: arch-beshik@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
