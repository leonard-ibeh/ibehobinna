import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Header title="Get in touch" image={HeaderImage}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:support@egattor.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="mailto:support@egattor.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="mailto:support@egattor.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
