import { Card } from "../../components/Card";
import { SectionTitle } from "../../components/SectionTitle";
import "./style.scss";
import videos from "../../assets/Light_Make_Loop.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { Button } from "../../components/Button";
import { DUMMY_DATA, SETTING_SLIDER } from "./constants";

export const ChooseUs = () => {
  const slider = useRef(null);

  return (
    <section className="container choose-us">
      <div className="choose-us__content">
        <div className="choose-us__content__title">
          <SectionTitle>
            <p>
              Why people love to
              <br />
              work with us?
            </p>
          </SectionTitle>
          <Button
            buttonStyle="btn--primary--outline"
            buttonSize="btn--medium"
            buttonShape="btn--round"
            className="btn-read-more choose-us__content__button"
          >
            Read more
          </Button>
        </div>
      </div>

      <Slider className="choose-us__slider" ref={slider} {...SETTING_SLIDER}>
        {DUMMY_DATA.map(({ title, content }, idx) => {
          return (
            <Card video={videos} title={title} content={content} key={idx} />
          );
        })}
      </Slider>
    </section>
  );
};
