import { Accordion } from "react-bootstrap";
import "./CardAccordion.scss";
import CardDetailsIcon from "../../assets/images/card-details-icon.svg";

function CardDetails() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header className="card-details-accordion">
          <img src={CardDetailsIcon} alt="Card Details " />
          Card details
        </Accordion.Header>
      </Accordion.Item>
    </Accordion>
  );
}

export default CardDetails;
