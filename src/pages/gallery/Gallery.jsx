import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./Gallery.css";

function Gallery() {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery  ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
