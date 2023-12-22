import { Accordion } from "react-bootstrap";

import "./RecentTransactions.scss";
import "./CardAccordion.scss";
import RecentTransactionsIcon from "../../assets/images/recent-transactions.svg";
import BusinessAndFinanceIcon from "../../assets/images/business-and-finance.svg";
import FileStorageIcon from "../../assets/images/file-storage.svg";
import FlightsIcon from "../../assets/images/flights.svg";
import MegaPhoneIcon from "../../assets/images/megaphone.svg";
import NextIcon from "../../assets/images/next.svg";

function RecentTransactions(props) {
  const { recentTransactions } = props;

  // move this to separate component when more number of icons are added
  const renderTransactionIcon = (icon, name) => {
    switch (icon) {
      case "FileStorage":
        return (
          <div className="transaction-icon file-storage">
            <img src={FileStorageIcon} alt={name} />
          </div>
        );
      case "Flight":
        return (
          <div className="transaction-icon flight">
            <img src={FlightsIcon} alt={name} />
          </div>
        );
      case "MegaPhone":
        return (
          <div className="transaction-icon megaphone">
            <img src={MegaPhoneIcon} alt={name} />
          </div>
        );

      default:
        return (
          <div className="transaction-icon file-storage">
            <img src={FileStorageIcon} alt={name} />
          </div>
        );
    }
  };

  const renderTransaction = (transaction) => {
    const formattedDate = `${transaction.date.getDate()} ${transaction.date.toLocaleString(
      "en-US",
      {
        month: "short",
      }
    )} ${transaction.date.getFullYear()}`;

    return (
      <div className="recent-transaction-item" key={transaction.id}>
        {renderTransactionIcon(transaction.icon, transaction.name)}

        <div className="transaction-info">
          <span className="transaction-name"> {transaction.name} </span>

          <span className="transaction-date">{formattedDate}</span>

          <div className="transaction-status">
            <div className="status-icon">
              <img src={BusinessAndFinanceIcon} alt="Status" />
            </div>
            <span>{transaction.status} </span>
          </div>
        </div>

        <span
          className={`transaction-amount ${
            transaction.type === "Credit" ? "credited" : ""
          } `}
        >
          {`${transaction.type === "Credit" ? "+ " : "- "} S$ ${
            transaction.amount
          }`}
        </span>

        <img className="next-icon" src={NextIcon} alt="More Info" />
      </div>
    );
  };

  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header className="card-details-accordion">
          <img src={RecentTransactionsIcon} alt="Recent Transactions " />
          Recent transactions
        </Accordion.Header>

        {recentTransactions?.length > 0 && (
          <Accordion.Body className="recent-trasaction-container">
            {recentTransactions.map(renderTransaction)}

            <div className="view-all-transactions">
              View all card transactions
            </div>
          </Accordion.Body>
        )}
      </Accordion.Item>
    </Accordion>
  );
}

export default RecentTransactions;
