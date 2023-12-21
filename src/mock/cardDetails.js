// mock data
const cardDetails = {
  availableBalance: "1,111",
  debitCards: [
    {
      name: "Tony Stark",
      cardNumber: "4456432456781234",
      expiryDate: new Date("09-01-2027"),
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
          date: new Date("12-18-2023"),
          status: "Refund on credit card",
          amount: 150,
        },

        {
          type: "Debit",
          id: 2,
          icon: "Flight",
          name: "Hamleys",
          date: new Date("12-1-2023"),
          status: "Charged to debit card",
          amount: 210,
        },

        {
          type: "Debit",
          id: 3,
          icon: "MegaPhone",
          name: "Hamleys",
          date: new Date("11-12-2023"),
          status: "Charged to debit card",
          amount: 112,
        },

        {
          type: "Debit",
          id: 4,
          icon: "FileStorage",
          name: "Hamleys",
          date: new Date("12-18-2023"),
          status: "Charged to debit card",
          amount: 232,
        },
      ],
    },
    {
      id: 2,
      name: "Nick Fury",
      cardNumber: "4567445643247679",
      expiryDate: new Date("12-12-2024"),
      cardCVV: 123,
      freeze: false,

      cardDetails: {},
      recentTransactions: [
        {
          type: "Debit",
          id: 1,
          icon: "Flight",
          name: "Hersheys",
          date: new Date("01-11-2023"),
          status: "Charged to debit card",
          amount: 111,
        },

        {
          type: "Credit",
          id: 2,
          icon: "MegaPhone",
          name: "Hersheys",
          date: new Date("01-01-2023"),
          status: "Refund on credit card",
          amount: 23,
        },
        {
          type: "Credit",
          id: 3,
          icon: "FileStorage",
          name: "Hersheys",
          date: new Date("12-09-2022"),
          status: "Refund on credit card",
          amount: 56,
        },
      ],
    },
    {
      id: 3,
      name: "Bruce Wayne",
      cardNumber: "4567445643249024",
      expiryDate: new Date("06-06-2032"),
      cardCVV: 123,
      freeze: false,

      cardDetails: {},
      recentTransactions: [
        {
          type: "Debit",
          id: 1,
          icon: "Flight",
          name: "Shopee",
          date: new Date("12-18-2024"),
          status: "Charged to debit card",
          amount: 120,
        },

        {
          type: "Credit",
          id: 2,
          icon: "MegaPhone",
          name: "Shopee",
          date: new Date("09-02-2026"),
          status: "Refund on credit card",
          amount: 111,
        },
      ],
    },
  ],
  companyCards: [],
};

export { cardDetails };
