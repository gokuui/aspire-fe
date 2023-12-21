import { Link, useLocation } from "react-router-dom";
import { routes } from "../constants";

import HomeIcon from "../assets/images/home.svg";
import CardsIcon from "../assets/images/pay.svg";
import PaymentIcon from "../assets/images/payments.svg";
import ProfileIcon from "../assets/images/profile.svg";
import CreditIcon from "../assets/images/credit.svg";
import "./MobileFooter.scss";

function MobileFooter() {
  const location = useLocation();

  const isActive = (route) => {
    return location.pathname === route;
  };

  const footerItems = [
    {
      route: routes.home,
      text: "Home",
      icon: HomeIcon,
    },
    {
      route: routes.cards,
      text: "Cards",
      icon: CardsIcon,
    },
    {
      route: routes.payment,
      text: "Payment",
      icon: PaymentIcon,
    },
    {
      route: routes.credit,
      text: "Credit",
      icon: CreditIcon,
    },
    {
      route: routes.settings,
      text: "Profile",
      icon: ProfileIcon,
    },
  ];

  // TODO: fix the footer icons.
  // for showing active state and disabled state
  return (
    <ul className="mobile-footer-container">
      {footerItems.map((footerItem) => (
        <li key={footerItem.route}>
          <Link
            to={footerItem.route}
            className={`footer-item ${
              isActive(footerItem.route) ? "active" : ""
            }`}
          >
            <img src={footerItem.icon} alt={footerItem.text} />
            <span>{footerItem.text} </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MobileFooter;
