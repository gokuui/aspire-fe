import { useCallback, useEffect, useState } from "react";
import {
  getCardInfo,
  freezeCard as freezeCardAPI,
  deleteCard as cancelCardAPI,
  addNewCard as addCardAPI,
} from "../services/card";

function useCards() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [cardDetails, setCardDetails] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const [deleteCardModal, setDeleteCardModal] = useState(false);
  const [addCardModal, setAddCardModal] = useState(false);

  useEffect(() => {
    // get required data on page mount
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
        setSelectedCardIndex(
          selectedCardIndex % (cardDetails.debitCards.length - 1)
        );
        setCardDetails({ ...cardDetails, debitCards: newDebitCards });
      } catch (error) {
        console.error("useCards: deleteCard: API failed", error);
        // TODO: show toast error messaging
      } finally {
        setDeleteCardModal(false);
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
        setAddCardModal(false);
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
    deleteCardModal,
    setDeleteCardModal,
    addCardModal,
    setAddCardModal,
    addNewCard,
  };
}

export default useCards;
