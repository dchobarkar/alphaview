export const apiMap = {
  stock: {
    overview: {
      function: "OVERVIEW",
      requiredParams: ["symbol"],
    },
    quote: {
      function: "GLOBAL_QUOTE",
      requiredParams: ["symbol"],
    },
  },
  forex: {
    exchangeRate: {
      function: "CURRENCY_EXCHANGE_RATE",
      requiredParams: ["from_currency", "to_currency"],
    },
  },
  crypto: {
    daily: {
      function: "DIGITAL_CURRENCY_DAILY",
      requiredParams: ["symbol", "market"],
    },
  },
};
