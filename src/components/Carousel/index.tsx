import React, { useRef, useState } from "react";
import { CarouselCardProps } from "~/types";
import { CarouselCard } from "components/Cards";

interface CarouselProps {
  props: Array<CarouselCardProps>;
}

const Carousel: React.FC<CarouselProps> = ({ props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const center = ref.current && ref.current.offsetWidth > 1000 ? "" : "center";

  const handleClick = (index: number) => {
    if (ref.current) {
      const cardWidth = ref.current.offsetWidth;
      const containerWidth = ref.current.scrollWidth;
      const maxScrollLeft = containerWidth - ref.current.clientWidth;

      let scrollAmount;
      if (index < activeIndex) {
        scrollAmount = Math.max(0, ref.current.scrollLeft - cardWidth);
      } else if (index > activeIndex) {
        scrollAmount = Math.min(
          maxScrollLeft,
          ref.current.scrollLeft + cardWidth
        );
      } else {
        scrollAmount = ref.current.scrollLeft;
      }

      setActiveIndex(index);
      ref.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderCarouselCards = () => {
    return props.map((card, index) => {
      const cardClassName = `carousel__card ${
        index === activeIndex ? "active" : ""
      }`;
      return (
        <div
          key={index}
          className={cardClassName}
          onClick={() => handleClick(index)}
        >
          <CarouselCard props={card} isActive={index === activeIndex} />
        </div>
      );
    });
  };

  return (
    <div className={`carousel ${center}`}>
      <div className="carousel__container" ref={ref}>
        {renderCarouselCards()}
      </div>
    </div>
  );
};

export default Carousel;
