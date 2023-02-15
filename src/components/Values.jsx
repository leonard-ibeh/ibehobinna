import SectionHead from "./SectionHead";
import image from "../images/values.jpg";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

function Values() {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={image} alt="valueImg" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="values" />
          <p>
            Get Started with body fitness, all a man needs is Gods Grace and
            help to keep moving to git to that height predestied.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
