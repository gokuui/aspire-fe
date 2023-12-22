import FreezeIcon from "../../assets/images/freeze-card.svg";
import SpendLimit from "../../assets/images/spend-limit.svg";
import GPay from "../../assets/images/gpay.svg";
import ReplaceCard from "../../assets/images/replace-card.svg";
import CancelCard from "../../assets/images/cancel-card.svg";

import "./CardActions.scss";

function CardActions(props) {
  const { freezeCard, deleteCard, card, isMobileView } = props;

  return (
    // in mobile view, we need to style the border radius differently
    <ul
      className={`card-action-container ${isMobileView ? "mobile-view" : ""}`}
    >
      <li className="action-item" onClick={freezeCard}>
        <img
          src={FreezeIcon}
          alt={card.freeze ? "Unfreeze Card" : "Freeze Card"}
        />
        <span className="action-text">
          {card.freeze ? "Unfreeze Card" : "Freeze Card"}{" "}
        </span>
      </li>

      <li className="action-item">
        <img src={SpendLimit} alt="Set spend limit" />
        <span className="action-text"> Set spend limit </span>
      </li>

      <li className="action-item">
        <img src={GPay} alt="Add to GPay" />
        <span className="action-text"> Add to GPay </span>
      </li>

      <li className="action-item">
        <img src={ReplaceCard} alt="Replace card" />
        <span className="action-text"> Replace card</span>
      </li>

      <li className="action-item" onClick={deleteCard}>
        <img src={CancelCard} alt="Cancel card" />
        <span className="action-text"> Cancel card </span>
      </li>
    </ul>
  );
}

export default CardActions;
