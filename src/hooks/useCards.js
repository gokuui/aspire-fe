import { useCallback, useEffect, useState } from "react";

import {
  getCardInfo,
  freezeCard as freezeCardAPI,
  deleteCard as cancelCardAPI,
  addNewCard as addCardAPI,
} from "../services/card";

// This hook contains all the state logic for Cards Page
function useCards() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [cardDetails, setCardDetails] = useState([]);
  // this holds the card index that is shown in carousal
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  // these are for showing add/delete card modals
  const [showDeleteCardModal, setShowDeleteCardModal] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);

  // get required data on page mount
  useEffect(() => {
    let isStale = false;

    const fetchCardsData = async () => {
      setLoading(true);

      try {
        let responseData = await getCardInfo();

        if (!isStale) {
          setCardDetails(responseData);
        }
      } catch (error) {
        console.error("useCards: fetchCardsData: error loading data", error);
        setError(true);
        // show error experience.
      } finally {
        setLoading(false);
      }
    };

    fetchCardsData();

    return () => {
      // to avoid stale data because of race conditions
      isStale = true;
    };
  }, []);

  const getSelectedCardInfo = () => {
    return cardDetails?.debitCards?.[selectedCardIndex];
  };

  const freezeCard = useCallback(
    async (card) => {
      try {
        // call API to freeze the card.
        let freezeCard = !card.freeze;
        await freezeCardAPI(card.cardNumber, freezeCard);

        // update card state to freeze/unfreeze card
        card.freeze = freezeCard;
        let newDebitCards = [...cardDetails.debitCards];
        setCardDetails({ ...cardDetails, debitCards: newDebitCards });
      } catch (error) {
        console.error("useCards: freezeCard: API failed", error);
        // TODO: show toast error messaging
      }
    },
    [cardDetails]
  );

  const deleteCard = useCallback(
    async (card) => {
      try {
        // call API to freeze the card.
        await cancelCardAPI(card.cardNumber);

        // update card state to delete card
        let newDebitCards = cardDetails.debitCards.filter(
          (debitCard) => debitCard !== card
        );

        // update the selected card index to next card
        // we show the next card when user deletes current card
        setSelectedCardIndex(
          selectedCardIndex % (cardDetails.debitCards.length - 1)
        );
        setCardDetails({ ...cardDetails, debitCards: newDebitCards });
      } catch (error) {
        console.error("useCards: deleteCard: API failed", error);
        // TODO: show toast error messaging
      } finally {
        setShowDeleteCardModal(false);
      }
    },
    [cardDetails, selectedCardIndex]
  );

  const addNewCard = useCallback(
    async (cardName) => {
      try {
        // call API to freeze the card.
        let cardInfo = await addCardAPI(cardName);

        const newDebitCards = [...cardDetails.debitCards, cardInfo];
        setCardDetails({ ...cardDetails, debitCards: newDebitCards });

        // update index when new card is added to empty collection
        if (newDebitCards.length === 1) {
          setSelectedCardIndex(0);
        }
      } catch (error) {
        console.error("useCards: addNewCard: API failed", error);
        // TODO: show toast error messaging
      } finally {
        setShowAddCardModal(false);
      }
    },
    [cardDetails]
  );

  return {
    loading,
    error,
    cardDetails,
    selectedCardIndex,
    setSelectedCardIndex,
    getSelectedCardInfo,
    freezeCard,
    deleteCard,
    showDeleteCardModal,
    setShowDeleteCardModal,
    showAddCardModal,
    setShowAddCardModal,
    addNewCard,
  };
}

export default useCards;
