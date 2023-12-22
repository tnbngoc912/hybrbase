import { Card } from "../../components/Card";
import { SectionLabel } from "../../components/SectionLabel";
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
          <SectionLabel content="Choose Us" />
          <SectionTitle content="Why people love to work with us?" />
        </div>
        {/* FOR LARGE SCREEN */}
        <div className="choose-us__content__button top">
          <Button
            onClick={() => () => slider?.current?.slickPrev()}
            type="button"
            buttonStyle="btn--primary--outline"
            buttonSize="btn--large"
            buttonShape="btn--round"
          >
            ←
          </Button>
          <Button
            onClick={() => slider?.current?.slickNext()}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
            buttonShape="btn--round"
          >
            →
          </Button>
        </div>
      </div>

      <Slider ref={slider} {...SETTING_SLIDER}>
        {DUMMY_DATA.map(({ title, content }, idx) => {
          return (
            <Card video={videos} title={title} content={content} key={idx} />
          );
        })}
      </Slider>
      {/* FOR SMALL SCREEN */}
      <div className="choose-us__content__button bottom">
        <Button
          onClick={() => () => slider?.current?.slickPrev()}
          type="button"
          buttonStyle="btn--primary--outline"
          buttonSize="btn--large"
          buttonShape="btn--round"
        >
          ←
        </Button>
        <Button
          onClick={() => slider?.current?.slickNext()}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
          buttonShape="btn--round"
        >
          →
        </Button>
      </div>
    </section>
  );
};
