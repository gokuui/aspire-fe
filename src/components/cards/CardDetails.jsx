import { Accordion } from "react-bootstrap";

import CardDetailsIcon from "../../assets/images/card-details-icon.svg";
import "./CardAccordion.scss";

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
