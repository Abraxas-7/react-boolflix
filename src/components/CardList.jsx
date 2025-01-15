import Card from "./Card";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CardList({ items }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (items.length === 0) {
    return <p>Nessun risultato</p>;
  }

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id}>
          <Card item={item} />
        </div>
      ))}
    </Slider>
  );
}
