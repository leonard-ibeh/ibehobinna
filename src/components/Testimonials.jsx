import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useState } from "react";
import { testimonials } from "../data";

function Testimonials() {
  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="testimonials"
          className="testimonials__head"
        ></SectionHead>
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonal__quote">{`${quote}`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonals__btn-container">
          <button className="testimonials__btn">
            <IoIosArrowDropleftCircle onClick={prevTestimonialHandler} />
          </button>
          <button className="testimonials__btn">
            <IoIosArrowDroprightCircle onClick={nextTestimonialHandler} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
