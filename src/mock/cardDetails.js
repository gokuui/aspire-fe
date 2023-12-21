// mock data
const cardDetails = {
  availableBalance: "1,111",
  debitCards: [
    {
      name: "Tony Stark",
      cardNumber: "4456432456781234",
      expiryDate: new Date("2027-09-01"),
      cvv: 123,
      freeze: false,
      id: 1,

      cardDetails: {},
      recentTransactions: [
        {
          type: "Credit",
          id: 1,
          icon: "FileStorage",
          name: "Hamleys",
          date: new Date("2023-12-18"),
          status: "Refund on credit card",
          amount: 150,
        },

        {
          type: "Debit",
          id: 2,
          icon: "Flight",
          name: "Hamleys",
          date: new Date("2023-12-01"),
          status: "Charged to debit card",
          amount: 210,
        },

        {
          type: "Debit",
          id: 3,
          icon: "MegaPhone",
          name: "Hamleys",
          date: new Date("2023-11-12"),
          status: "Charged to debit card",
          amount: 112,
        },

        {
          type: "Debit",
          id: 4,
          icon: "FileStorage",
          name: "Hamleys",
          date: new Date("2023-12-18"),
          status: "Charged to debit card",
          amount: 232,
        },
      ],
    },
    {
      id: 2,
      name: "Nick Fury",
      cardNumber: "4567445643247679",
      expiryDate: new Date("2024-12-12"),
      cardCVV: 123,
      freeze: false,

      cardDetails: {},
      recentTransactions: [
        {
          type: "Debit",
          id: 1,
          icon: "Flight",
          name: "Hersheys",
          date: new Date("2023-01-11"),
          status: "Charged to debit card",
          amount: 111,
        },

        {
          type: "Credit",
          id: 2,
          icon: "MegaPhone",
          name: "Hersheys",
          date: new Date("2023-01-01"),
          status: "Refund on credit card",
          amount: 23,
        },
        {
          type: "Credit",
          id: 3,
          icon: "FileStorage",
          name: "Hersheys",
          date: new Date("2022-12-09"),
          status: "Refund on credit card",
          amount: 56,
        },
      ],
    },
    {
      id: 3,
      name: "Bruce Wayne",
      cardNumber: "4567445643249024",
      expiryDate: new Date("2032-06-06"),
      cardCVV: 123,
      freeze: false,

      cardDetails: {},
      recentTransactions: [
        {
          type: "Debit",
          id: 1,
          icon: "Flight",
          name: "Shopee",
          date: new Date("2024-12-18"),
          status: "Charged to debit card",
          amount: 120,
        },

        {
          type: "Credit",
          id: 2,
          icon: "MegaPhone",
          name: "Shopee",
          date: new Date("2026-09-02"),
          status: "Refund on credit card",
          amount: 111,
        },
      ],
    },
  ],
  companyCards: [],
};

export { cardDetails };
