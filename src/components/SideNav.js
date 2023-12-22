import { Link, useLocation } from "react-router-dom";

import AspireLogo from "../assets/images/aspire-nav-logo.svg";
import { routes } from "../constants";
import HomeIcon from "../assets/images/nav-home.svg";
import CardsIcon from "../assets/images/nav-cards.svg";
import PaymentIcon from "../assets/images/nav-payments.svg";
import ProfileIcon from "../assets/images/nav-account.svg";
import CreditIcon from "../assets/images/nav-credit.svg";

import "./SideNav.scss";

function SideNav() {
  const location = useLocation();

  // returns true/false indicating whether the given route is in view or not
  const isActive = (route) => {
    return location.pathname === route;
  };

  const sideNavItems = [
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
      text: "Settings",
      icon: ProfileIcon,
    },
  ];

  // TODO: fix the nav icons for showing active state and disabled state.
  return (
    <div className="sidenav-container">
      <div className="sidenav-header">
        <img src={AspireLogo} alt="Aspire" />

        <span>
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </span>
      </div>

      <ul className="sidenav-list">
        {sideNavItems.map((sideNavItem) => (
          <li key={sideNavItem.route}>
            <Link
              to={sideNavItem.route}
              className={`sidenav-item ${
                isActive(sideNavItem.route) ? "active" : ""
              }`}
            >
              <img src={sideNavItem.icon} alt={sideNavItem.text} />
              <span>{sideNavItem.text} </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
