import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import CardActions from "../components/cards/CardActions";
import CardDetails from "../components/cards/CardDetails";
import RecentTransactions from "../components/cards/RecentTransactions";
import PlusIcon from "../assets/images/plus.svg";
import MobilePlusIcon from "../assets/images/blue-plus.svg";
import CarousalCards from "../components/cards/CarousalCards";
import Loader from "../components/Loader";
import useCards from "../hooks/useCards";
import DeleteCardModal from "../components/cards/DeleteCardModal";

import "./Cards.scss";
import AddCardModal from "../components/cards/AddCardModal";
import { breakpoints } from "../constants";
import useMediaQuery from "../hooks/useMediaQuery";

function Cards() {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md} )`);

  // all the state logic will be handled by useCards hook
  const {
    loading,
    cardDetails,
    selectedCardIndex,
    setSelectedCardIndex,
    getSelectedCardInfo,
    freezeCard,
    deleteCard,
    setDeleteCardModal,
    deleteCardModal,
    addCardModal,
    setAddCardModal,
    addNewCard,
  } = useCards();

  const renderMobileView = () => {
    return (
      <div className="mobile-card-page-container">
        <div className="mobile-cards-header">
          <p className="available-balance-heading">Available balance</p>
          <div className="balance-new-card-container">
            <div className="available-balance">
              <span className="currency-type">S$</span>

              <span className="currency-value">
                {cardDetails?.availableBalance}
              </span>
            </div>
            <Button className="new-card" onClick={() => setAddCardModal(true)}>
              <img src={MobilePlusIcon} alt="Add new card" />
              <span>New card </span>
            </Button>
          </div>
        </div>

        <Tabs className="cards-tab-container" defaultActiveKey="debitCards">
          <Tab eventKey="debitCards" title="My debit cards">
            {renderMobileDebitCards()}
          </Tab>
          <Tab eventKey="companyCards" title="All company cards">
            <div className="cards-tab-content all-company-cards"> All Company Cards </div>
          </Tab>
        </Tabs>
      </div>
    );
  };

  const renderDesktopView = () => {
    return (
      <div className="desktop-card-page-container">
        <div className="cards-header">
          <p className="available-balance-heading">Available balance</p>

          <div className="balance-new-card-container">
            <div className="available-balance">
              <span className="currency-type">S$</span>

              <span className="currency-value">
                {cardDetails?.availableBalance}
              </span>
            </div>
            <Button className="new-card" onClick={() => setAddCardModal(true)}>
              <img src={PlusIcon} alt="Add new card" />
              <span>New card </span>
            </Button>
          </div>
        </div>

        <Tabs className="cards-tab-container" defaultActiveKey="debitCards">
          <Tab eventKey="debitCards" title="My debit cards">
            {renderDesktopDebitCards()}
          </Tab>
          <Tab eventKey="companyCards" title="All company cards">
            <div className="cards-tab-content"> All Company Cards </div>
          </Tab>
        </Tabs>
      </div>
    );
  };

  const renderDesktopDebitCards = () => {
    return (
      <Container fluid className="cards-tab-content">
        {cardDetails?.debitCards?.length > 0 ? (
          <Row>
            <Col lg={12} xl={6} className="debit-card-left-side-container">
              <CarousalCards
                cards={cardDetails.debitCards}
                selectedCardIndex={selectedCardIndex}
                setSelectedCardIndex={setSelectedCardIndex}
              />
              <CardActions
                card={getSelectedCardInfo()}
                deleteCard={() => setDeleteCardModal(true)}
                freezeCard={() => freezeCard(getSelectedCardInfo())}
              />
            </Col>

            <Col lg={12} xl={5} className="debit-card-right-side-container">
              <CardDetails />
              <RecentTransactions
                recentTransactions={getSelectedCardInfo()?.recentTransactions}
              />
            </Col>
          </Row>
        ) : (
          // show better UI experience.
          <>No Debit Cards </>
        )}
      </Container>
    );
  };

  const renderMobileDebitCards = () => {
    return (
      <div className="cards-tab-content">
        {cardDetails?.debitCards?.length > 0 ? (
          <>
            <div className="debit-card-mobile-card-container">
              <CarousalCards
                cards={cardDetails.debitCards}
                selectedCardIndex={selectedCardIndex}
                setSelectedCardIndex={setSelectedCardIndex}
                isMobileView={true}
              />
            </div>

            <div className="debit-card-mobile-card-actions">
              <CardActions
                card={getSelectedCardInfo()}
                deleteCard={() => setDeleteCardModal(true)}
                freezeCard={() => freezeCard(getSelectedCardInfo())}
                isMobileView={isMobile}
              />
            </div>

            <div className="debit-card-mobile-bottom-container">
              <CardDetails />

              <RecentTransactions
                recentTransactions={getSelectedCardInfo()?.recentTransactions}
              />
            </div>
          </>
        ) : (
          // show better UI experience.
          <>No Debit Cards </>
        )}
      </div>
    );
  };

  if (loading) {
    return <Loader />;
  }

  // TODO: handle error experience as well.

  return (
    <div className="card-page-container">
      {isMobile ? renderMobileView() : renderDesktopView()}
      {deleteCardModal && (
        <DeleteCardModal
          deleteCard={() => deleteCard(getSelectedCardInfo())}
          closeModal={() => setDeleteCardModal(false)}
        />
      )}

      {addCardModal && (
        <AddCardModal
          addCard={addNewCard}
          closeModal={() => setAddCardModal(false)}
        />
      )}
    </div>
  );
}

export default Cards;
