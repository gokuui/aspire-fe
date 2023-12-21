import { Carousel } from "react-bootstrap";
import Card from "./Card";

import "./CarousalCards.scss";

function CarousalCards(props) {
  const { cards, selectedCardIndex, setSelectedCardIndex, isMobileView } =
    props;

  return (
    <Carousel
      controls={false}
      activeIndex={selectedCardIndex}
      onSelect={(selectedIndex) => setSelectedCardIndex(selectedIndex)}
      touch={true}
      pause={"hover"}
      slide={true}
      keyboard={true}
      interval={null}
      className="carousal-container"
    >
      {cards.map((card) => (
        <Carousel.Item key={card.id}>
          <Card {...card} isMobileView={isMobileView} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarousalCards;
