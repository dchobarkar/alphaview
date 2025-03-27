const physicalCurrencyOptions = [
  {
    name: "United Arab Emirates Dirham",
    value: "AED",
  },
  {
    name: "Afghan Afghani",
    value: "AFN",
  },
  {
    name: "Albanian Lek",
    value: "ALL",
  },
  {
    name: "Armenian Dram",
    value: "AMD",
  },
  {
    name: "Netherlands Antillean Guilder",
    value: "ANG",
  },
  {
    name: "Angolan Kwanza",
    value: "AOA",
  },
  {
    name: "Argentine Peso",
    value: "ARS",
  },
  {
    name: "Australian Dollar",
    value: "AUD",
  },
  {
    name: "Aruban Florin",
    value: "AWG",
  },
  {
    name: "Azerbaijani Manat",
    value: "AZN",
  },
  {
    name: "Bosnia-Herzegovina Convertible Mark",
    value: "BAM",
  },
  {
    name: "Barbadian Dollar",
    value: "BBD",
  },
  {
    name: "Bangladeshi Taka",
    value: "BDT",
  },
  {
    name: "Bulgarian Lev",
    value: "BGN",
  },
  {
    name: "Bahraini Dinar",
    value: "BHD",
  },
  {
    name: "Burundian Franc",
    value: "BIF",
  },
  {
    name: "Bermudan Dollar",
    value: "BMD",
  },
  {
    name: "Brunei Dollar",
    value: "BND",
  },
  {
    name: "Bolivian Boliviano",
    value: "BOB",
  },
  {
    name: "Brazilian Real",
    value: "BRL",
  },
  {
    name: "Bahamian Dollar",
    value: "BSD",
  },
  {
    name: "Bhutanese Ngultrum",
    value: "BTN",
  },
  {
    name: "Botswanan Pula",
    value: "BWP",
  },
  {
    name: "Belize Dollar",
    value: "BZD",
  },
  {
    name: "Canadian Dollar",
    value: "CAD",
  },
  {
    name: "Congolese Franc",
    value: "CDF",
  },
  {
    name: "Swiss Franc",
    value: "CHF",
  },
  {
    name: "Chilean Unit of Account UF",
    value: "CLF",
  },
  {
    name: "Chilean Peso",
    value: "CLP",
  },
  {
    name: "Chinese Yuan Offshore",
    value: "CNH",
  },
  {
    name: "Chinese Yuan",
    value: "CNY",
  },
  {
    name: "Colombian Peso",
    value: "COP",
  },
  {
    name: "Cuban Peso",
    value: "CUP",
  },
  {
    name: "Cape Verdean Escudo",
    value: "CVE",
  },
  {
    name: "Czech Republic Koruna",
    value: "CZK",
  },
  {
    name: "Djiboutian Franc",
    value: "DJF",
  },
  {
    name: "Danish Krone",
    value: "DKK",
  },
  {
    name: "Dominican Peso",
    value: "DOP",
  },
  {
    name: "Algerian Dinar",
    value: "DZD",
  },
  {
    name: "Egyptian Pound",
    value: "EGP",
  },
  {
    name: "Eritrean Nakfa",
    value: "ERN",
  },
  {
    name: "Ethiopian Birr",
    value: "ETB",
  },
  {
    name: "Euro",
    value: "EUR",
  },
  {
    name: "Fijian Dollar",
    value: "FJD",
  },
  {
    name: "Falkland Islands Pound",
    value: "FKP",
  },
  {
    name: "British Pound Sterling",
    value: "GBP",
  },
  {
    name: "Georgian Lari",
    value: "GEL",
  },
  {
    name: "Ghanaian Cedi",
    value: "GHS",
  },
  {
    name: "Gibraltar Pound",
    value: "GIP",
  },
  {
    name: "Gambian Dalasi",
    value: "GMD",
  },
  {
    name: "Guinean Franc",
    value: "GNF",
  },
  {
    name: "Guatemalan Quetzal",
    value: "GTQ",
  },
  {
    name: "Guyanaese Dollar",
    value: "GYD",
  },
  {
    name: "Hong Kong Dollar",
    value: "HKD",
  },
  {
    name: "Honduran Lempira",
    value: "HNL",
  },
  {
    name: "Croatian Kuna",
    value: "HRK",
  },
  {
    name: "Haitian Gourde",
    value: "HTG",
  },
  {
    name: "Hungarian Forint",
    value: "HUF",
  },
  {
    name: "Internet Computer",
    value: "ICP",
  },
  {
    name: "Indonesian Rupiah",
    value: "IDR",
  },
  {
    name: "Israeli New Sheqel",
    value: "ILS",
  },
  {
    name: "Indian Rupee",
    value: "INR",
  },
  {
    name: "Iraqi Dinar",
    value: "IQD",
  },
  {
    name: "Iranian Rial",
    value: "IRR",
  },
  {
    name: "Icelandic Krona",
    value: "ISK",
  },
  {
    name: "Jersey Pound",
    value: "JEP",
  },
  {
    name: "Jamaican Dollar",
    value: "JMD",
  },
  {
    name: "Jordanian Dinar",
    value: "JOD",
  },
  {
    name: "Japanese Yen",
    value: "JPY",
  },
  {
    name: "Kenyan Shilling",
    value: "KES",
  },
  {
    name: "Kyrgystani Som",
    value: "KGS",
  },
  {
    name: "Cambodian Riel",
    value: "KHR",
  },
  {
    name: "Comorian Franc",
    value: "KMF",
  },
  {
    name: "North Korean Won",
    value: "KPW",
  },
  {
    name: "South Korean Won",
    value: "KRW",
  },
  {
    name: "Kuwaiti Dinar",
    value: "KWD",
  },
  {
    name: "Cayman Islands Dollar",
    value: "KYD",
  },
  {
    name: "Kazakhstani Tenge",
    value: "KZT",
  },
  {
    name: "Laotian Kip",
    value: "LAK",
  },
  {
    name: "Lebanese Pound",
    value: "LBP",
  },
  {
    name: "Sri Lankan Rupee",
    value: "LKR",
  },
  {
    name: "Liberian Dollar",
    value: "LRD",
  },
  {
    name: "Lesotho Loti",
    value: "LSL",
  },
  {
    name: "Libyan Dinar",
    value: "LYD",
  },
  {
    name: "Moroccan Dirham",
    value: "MAD",
  },
  {
    name: "Moldovan Leu",
    value: "MDL",
  },
  {
    name: "Malagasy Ariary",
    value: "MGA",
  },
  {
    name: "Macedonian Denar",
    value: "MKD",
  },
  {
    name: "Myanma Kyat",
    value: "MMK",
  },
  {
    name: "Mongolian Tugrik",
    value: "MNT",
  },
  {
    name: "Macanese Pataca",
    value: "MOP",
  },
  {
    name: "Mauritanian Ouguiya (pre-2018)",
    value: "MRO",
  },
  {
    name: "Mauritanian Ouguiya",
    value: "MRU",
  },
  {
    name: "Mauritian Rupee",
    value: "MUR",
  },
  {
    name: "Maldivian Rufiyaa",
    value: "MVR",
  },
  {
    name: "Malawian Kwacha",
    value: "MWK",
  },
  {
    name: "Mexican Peso",
    value: "MXN",
  },
  {
    name: "Malaysian Ringgit",
    value: "MYR",
  },
  {
    name: "Mozambican Metical",
    value: "MZN",
  },
  {
    name: "Namibian Dollar",
    value: "NAD",
  },
  {
    name: "Nigerian Naira",
    value: "NGN",
  },
  {
    name: "Norwegian Krone",
    value: "NOK",
  },
  {
    name: "Nepalese Rupee",
    value: "NPR",
  },
  {
    name: "New Zealand Dollar",
    value: "NZD",
  },
  {
    name: "Omani Rial",
    value: "OMR",
  },
  {
    name: "Panamanian Balboa",
    value: "PAB",
  },
  {
    name: "Peruvian Nuevo Sol",
    value: "PEN",
  },
  {
    name: "Papua New Guinean Kina",
    value: "PGK",
  },
  {
    name: "Philippine Peso",
    value: "PHP",
  },
  {
    name: "Pakistani Rupee",
    value: "PKR",
  },
  {
    name: "Polish Zloty",
    value: "PLN",
  },
  {
    name: "Paraguayan Guarani",
    value: "PYG",
  },
  {
    name: "Qatari Rial",
    value: "QAR",
  },
  {
    name: "Romanian Leu",
    value: "RON",
  },
  {
    name: "Serbian Dinar",
    value: "RSD",
  },
  {
    name: "Russian Ruble",
    value: "RUB",
  },
  {
    name: "Old Russian Ruble",
    value: "RUR",
  },
  {
    name: "Rwandan Franc",
    value: "RWF",
  },
  {
    name: "Saudi Riyal",
    value: "SAR",
  },
  {
    name: "Solomon Islands Dollar",
    value: "SBDf",
  },
  {
    name: "Seychellois Rupee",
    value: "SCR",
  },
  {
    name: "Sudanese Pound",
    value: "SDG",
  },
  {
    name: "Special Drawing Rights",
    value: "SDR",
  },
  {
    name: "Swedish Krona",
    value: "SEK",
  },
  {
    name: "Singapore Dollar",
    value: "SGD",
  },
  {
    name: "Saint Helena Pound",
    value: "SHP",
  },
  {
    name: "Sierra Leonean Leone",
    value: "SLL",
  },
  {
    name: "Somali Shilling",
    value: "SOS",
  },
  {
    name: "Surinamese Dollar",
    value: "SRD",
  },
  {
    name: "Syrian Pound",
    value: "SYP",
  },
  {
    name: "Swazi Lilangeni",
    value: "SZL",
  },
  {
    name: "Thai Baht",
    value: "THB",
  },
  {
    name: "Tajikistani Somoni",
    value: "TJS",
  },
  {
    name: "Turkmenistani Manat",
    value: "TMT",
  },
  {
    name: "Tunisian Dinar",
    value: "TND",
  },
  {
    name: "Tongan Pa'anga",
    value: "TOP",
  },
  {
    name: "Turkish Lira",
    value: "TRY",
  },
  {
    name: "Trinidad and Tobago Dollar",
    value: "TTD",
  },
  {
    name: "New Taiwan Dollar",
    value: "TWD",
  },
  {
    name: "Tanzanian Shilling",
    value: "TZS",
  },
  {
    name: "Ukrainian Hryvnia",
    value: "UAH",
  },
  {
    name: "Ugandan Shilling",
    value: "UGX",
  },
  {
    name: "United States Dollar",
    value: "USD",
  },
  {
    name: "Uruguayan Peso",
    value: "UYU",
  },
  {
    name: "Uzbekistan Som",
    value: "UZS",
  },
  {
    name: "Vietnamese Dong",
    value: "VND",
  },
  {
    name: "Vanuatu Vatu",
    value: "VUV",
  },
  {
    name: "Samoan Tala",
    value: "WST",
  },
  {
    name: "CFA Franc BEAC",
    value: "XAF",
  },
  {
    name: "East Caribbean Dollar",
    value: "XCD",
  },
  {
    name: "Special Drawing Rights",
    value: "XDR",
  },
  {
    name: "CFA Franc BCEAO",
    value: "XOF",
  },
  {
    name: "CFP Franc",
    value: "XPF",
  },
  {
    name: "Yemeni Rial",
    value: "YER",
  },
  {
    name: "South African Rand",
    value: "ZAR",
  },
  {
    name: "Zambian Kwacha",
    value: "ZMW",
  },
  {
    name: "Zimbabwean Dollar",
    value: "ZWL",
  },
];

const digitalCurrencyOptions = [
  {
    name: "FirstBlood",
    value: "1ST",
  },
  {
    name: "GiveCoin",
    value: "2GIVE",
  },
  {
    name: "808Coin",
    value: "808",
  },
  {
    name: "Aave",
    value: "AAVE",
  },
  {
    name: "ArcBlock",
    value: "ABT",
  },
  {
    name: "ArtByte",
    value: "ABY",
  },
  {
    name: "AsiaCoin",
    value: "AC",
  },
  {
    name: "Achain",
    value: "ACT",
  },
  {
    name: "Cardano",
    value: "ADA",
  },
  {
    name: "adToken",
    value: "ADT",
  },
  {
    name: "AdEx",
    value: "ADX",
  },
  {
    name: "Aeternity",
    value: "AE",
  },
  {
    name: "Aeon",
    value: "AEON",
  },
  {
    name: "SingularityNET",
    value: "AGI",
  },
  {
    name: "IDNI-Agoras",
    value: "AGRS",
  },
  {
    name: "POLY-AI",
    value: "AI",
  },
  {
    name: "AidCoin",
    value: "AID",
  },
  {
    name: "Aion",
    value: "AION",
  },
  {
    name: "AirToken",
    value: "AIR",
  },
  {
    name: "Akuya-Coin",
    value: "AKY",
  },
  {
    name: "Algorand",
    value: "ALGO",
  },
  {
    name: "ALIS",
    value: "ALIS",
  },
  {
    name: "AmberCoin",
    value: "AMBER",
  },
  {
    name: "Synereo",
    value: "AMP",
  },
  {
    name: "Ampleforth",
    value: "AMPL",
  },
  {
    name: "Anoncoin",
    value: "ANC",
  },
  {
    name: "Aragon",
    value: "ANT",
  },
  {
    name: "AppCoins",
    value: "APPC",
  },
  {
    name: "APX-Ventures",
    value: "APX",
  },
  {
    name: "Ardor",
    value: "ARDR",
  },
  {
    name: "Ark",
    value: "ARK",
  },
  {
    name: "Aeron",
    value: "ARN",
  },
  {
    name: "AirSwap",
    value: "AST",
  },
  {
    name: "ATBCoin",
    value: "ATB",
  },
  {
    name: "ATMChain",
    value: "ATM",
  },
  {
    name: "Cosmos",
    value: "ATOM",
  },
  {
    name: "Authorship",
    value: "ATS",
  },
  {
    name: "Auroracoin",
    value: "AUR",
  },
  {
    name: "Avalanche",
    value: "AVAX",
  },
  {
    name: "Aventus",
    value: "AVT",
  },
  {
    name: "B3Coin",
    value: "B3",
  },
  {
    name: "Band Protocol",
    value: "BAND",
  },
  {
    name: "Basic-Attention-Token",
    value: "BAT",
  },
  {
    name: "BitBay",
    value: "BAY",
  },
  {
    name: "Boolberry",
    value: "BBR",
  },
  {
    name: "BCAP",
    value: "BCAP",
  },
  {
    name: "BitConnect",
    value: "BCC",
  },
  {
    name: "Bitcoin-Diamond",
    value: "BCD",
  },
  {
    name: "Bitcoin-Cash",
    value: "BCH",
  },
  {
    name: "Bytecoin",
    value: "BCN",
  },
  {
    name: "BlockMason-Credit-Protocol-Token",
    value: "BCPT",
  },
  {
    name: "BitcoinX",
    value: "BCX",
  },
  {
    name: "BitCrystals",
    value: "BCY",
  },
  {
    name: "Bitdeal",
    value: "BDL",
  },
  {
    name: "Bee-Token",
    value: "BEE",
  },
  {
    name: "BelaCoin",
    value: "BELA",
  },
  {
    name: "DAO-Casino",
    value: "BET",
  },
  {
    name: "BF-Token",
    value: "BFT",
  },
  {
    name: "Bismuth",
    value: "BIS",
  },
  {
    name: "BitBean",
    value: "BITB",
  },
  {
    name: "BitBTC",
    value: "BITBTC",
  },
  {
    name: "BitCNY",
    value: "BITCNY",
  },
  {
    name: "BitEUR",
    value: "BITEUR",
  },
  {
    name: "BitGOLD",
    value: "BITGOLD",
  },
  {
    name: "BitSILVER",
    value: "BITSILVER",
  },
  {
    name: "BitUSD",
    value: "BITUSD",
  },
  {
    name: "Bibox-Token",
    value: "BIX",
  },
  {
    name: "Blitzcash",
    value: "BLITZ",
  },
  {
    name: "Blackcoin",
    value: "BLK",
  },
  {
    name: "Bolenum",
    value: "BLN",
  },
  {
    name: "Blocknet",
    value: "BLOCK",
  },
  {
    name: "Bluzelle",
    value: "BLZ",
  },
  {
    name: "Blackmoon-Crypto",
    value: "BMC",
  },
  {
    name: "Binance-Coin",
    value: "BNB",
  },
  {
    name: "Bancor-Network-Token",
    value: "BNT",
  },
  {
    name: "Bounty0x",
    value: "BNTY",
  },
  {
    name: "BoostCoin",
    value: "BOST",
  },
  {
    name: "Bodhi",
    value: "BOT",
  },
  {
    name: "bitqy",
    value: "BQ",
  },
  {
    name: "Bread",
    value: "BRD",
  },
  {
    name: "Breakout-Coin",
    value: "BRK",
  },
  {
    name: "Breakout-Stake",
    value: "BRX",
  },
  {
    name: "Bitcoin SV",
    value: "BSV",
  },
  {
    name: "Bata",
    value: "BTA",
  },
  {
    name: "Bitcoin",
    value: "BTC",
  },
  {
    name: "Bitcoin BEP2",
    value: "BTCB",
  },
  {
    name: "BitcoinDark",
    value: "BTCD",
  },
  {
    name: "Bitcoin-Private",
    value: "BTCP",
  },
  {
    name: "Bitcoin-Gold",
    value: "BTG",
  },
  {
    name: "Bitmark",
    value: "BTM",
  },
  {
    name: "BitShares",
    value: "BTS",
  },
  {
    name: "BTSR",
    value: "BTSR",
  },
  {
    name: "BitTorrent",
    value: "BTT",
  },
  {
    name: "Bitcore",
    value: "BTX",
  },
  {
    name: "Burstcoin",
    value: "BURST",
  },
  {
    name: "Binance-USD",
    value: "BUSD",
  },
  {
    name: "BuzzCoin",
    value: "BUZZ",
  },
  {
    name: "Bytecent",
    value: "BYC",
  },
  {
    name: "Bytom",
    value: "BYTOM",
  },
  {
    name: "Crypto20",
    value: "C20",
  },
  {
    name: "PancakeSwap",
    value: "CAKE",
  },
  {
    name: "CannabisCoin",
    value: "CANN",
  },
  {
    name: "BlockCAT",
    value: "CAT",
  },
  {
    name: "CryptoCarbon",
    value: "CCRB",
  },
  {
    name: "Blox",
    value: "CDT",
  },
  {
    name: "Cofound-it",
    value: "CFI",
  },
  {
    name: "ChatCoin",
    value: "CHAT",
  },
  {
    name: "Chips",
    value: "CHIPS",
  },
  {
    name: "Clams",
    value: "CLAM",
  },
  {
    name: "CloakCoin",
    value: "CLOAK",
  },
  {
    name: "Compcoin",
    value: "CMP",
  },
  {
    name: "CyberMiles",
    value: "CMT",
  },
  {
    name: "Cindicator",
    value: "CND",
  },
  {
    name: "Cryptonex",
    value: "CNX",
  },
  {
    name: "CoinFi",
    value: "COFI",
  },
  {
    name: "Compound",
    value: "COMP",
  },
  {
    name: "COSS",
    value: "COSS",
  },
  {
    name: "Circuits-Of-Value",
    value: "COVAL",
  },
  {
    name: "CreditBIT",
    value: "CRBIT",
  },
  {
    name: "CreativeCoin",
    value: "CREA",
  },
  {
    name: "Credo",
    value: "CREDO",
  },
  {
    name: "Crypto.com Coin",
    value: "CRO",
  },
  {
    name: "Crown",
    value: "CRW",
  },
  {
    name: "BitDice",
    value: "CSNO",
  },
  {
    name: "Centra",
    value: "CTR",
  },
  {
    name: "Cortex",
    value: "CTXC",
  },
  {
    name: "CureCoin",
    value: "CURE",
  },
  {
    name: "Civic",
    value: "CVC",
  },
  {
    name: "Dai",
    value: "DAI",
  },
  {
    name: "Darcrus",
    value: "DAR",
  },
  {
    name: "Dash",
    value: "DASH",
  },
  {
    name: "DATAcoin",
    value: "DATA",
  },
  {
    name: "Chronologic",
    value: "DAY",
  },
  {
    name: "DeepBrain-Chain",
    value: "DBC",
  },
  {
    name: "DubaiCoin",
    value: "DBIX",
  },
  {
    name: "Dentacoin",
    value: "DCN",
  },
  {
    name: "Decred",
    value: "DCR",
  },
  {
    name: "DECENT",
    value: "DCT",
  },
  {
    name: "Digital-Developers-Fund",
    value: "DDF",
  },
  {
    name: "Dent",
    value: "DENT",
  },
  {
    name: "DFSCoin",
    value: "DFS",
  },
  {
    name: "DigiByte",
    value: "DGB",
  },
  {
    name: "Digitalcoin",
    value: "DGC",
  },
  {
    name: "DigixDAO",
    value: "DGD",
  },
  {
    name: "Etheroll",
    value: "DICE",
  },
  {
    name: "Agrello-Delta",
    value: "DLT",
  },
  {
    name: "Diamond",
    value: "DMD",
  },
  {
    name: "DMarket",
    value: "DMT",
  },
  {
    name: "district0x",
    value: "DNT",
  },
  {
    name: "DogeCoin",
    value: "DOGE",
  },
  {
    name: "DopeCoin",
    value: "DOPE",
  },
  {
    name: "Polkadot",
    value: "DOT",
  },
  {
    name: "Dragonchain",
    value: "DRGN",
  },
  {
    name: "Data",
    value: "DTA",
  },
  {
    name: "Databits",
    value: "DTB",
  },
  {
    name: "Dynamic",
    value: "DYN",
  },
  {
    name: "EarthCoin",
    value: "EAC",
  },
  {
    name: "eBoost",
    value: "EBST",
  },
  {
    name: "eBTC",
    value: "EBTC",
  },
  {
    name: "ECC",
    value: "ECC",
  },
  {
    name: "E-coin",
    value: "ECN",
  },
  {
    name: "Edgeless",
    value: "EDG",
  },
  {
    name: "Eidoo",
    value: "EDO",
  },
  {
    name: "Electronic-Gulden",
    value: "EFL",
  },
  {
    name: "EverGreenCoin",
    value: "EGC",
  },
  {
    name: "Elrond",
    value: "EGLD",
  },
  {
    name: "EDUCare",
    value: "EKT",
  },
  {
    name: "Elastos",
    value: "ELA",
  },
  {
    name: "Electrify.Asia",
    value: "ELEC",
  },
  {
    name: "aelf",
    value: "ELF",
  },
  {
    name: "Elixir",
    value: "ELIX",
  },
  {
    name: "Embercoin",
    value: "EMB",
  },
  {
    name: "Emercoin",
    value: "EMC",
  },
  {
    name: "Einsteinium",
    value: "EMC2",
  },
  {
    name: "Enigma",
    value: "ENG",
  },
  {
    name: "Enjin-Coin",
    value: "ENJ",
  },
  {
    name: "EnergyCoin",
    value: "ENRG",
  },
  {
    name: "EOS",
    value: "EOS",
  },
  {
    name: "EOT-Token",
    value: "EOT",
  },
  {
    name: "EquiTrader",
    value: "EQT",
  },
  {
    name: "EuropeCoin",
    value: "ERC",
  },
  {
    name: "Ethereum-Classic",
    value: "ETC",
  },
  {
    name: "Ethereum",
    value: "ETH",
  },
  {
    name: "Ethereum-Dark",
    value: "ETHD",
  },
  {
    name: "Ethos",
    value: "ETHOS",
  },
  {
    name: "Electroneum",
    value: "ETN",
  },
  {
    name: "Metaverse-Entropy",
    value: "ETP",
  },
  {
    name: "EncryptoTel",
    value: "ETT",
  },
  {
    name: "Devery",
    value: "EVE",
  },
  {
    name: "Everex",
    value: "EVX",
  },
  {
    name: "ExclusiveCoin",
    value: "EXCL",
  },
  {
    name: "Expanse",
    value: "EXP",
  },
  {
    name: "Factom",
    value: "FCT",
  },
  {
    name: "Filecoin",
    value: "FIL",
  },
  {
    name: "FoldingCoin",
    value: "FLDC",
  },
  {
    name: "FlorinCoin",
    value: "FLO",
  },
  {
    name: "FlutterCoin",
    value: "FLT",
  },
  {
    name: "FirstCoin",
    value: "FRST",
  },
  {
    name: "Feathercoin",
    value: "FTC",
  },
  {
    name: "FTX Token",
    value: "FTT",
  },
  {
    name: "Etherparty",
    value: "FUEL",
  },
  {
    name: "FunFair",
    value: "FUN",
  },
  {
    name: "Gambit",
    value: "GAM",
  },
  {
    name: "GameCredits",
    value: "GAME",
  },
  {
    name: "Gas",
    value: "GAS",
  },
  {
    name: "Golos Gold",
    value: "GBG",
  },
  {
    name: "GoByte",
    value: "GBX",
  },
  {
    name: "Byteball",
    value: "GBYTE",
  },
  {
    name: "GCRCoin",
    value: "GCR",
  },
  {
    name: "GeoCoin",
    value: "GEO",
  },
  {
    name: "GoldCoin",
    value: "GLD",
  },
  {
    name: "Gnosis-Token",
    value: "GNO",
  },
  {
    name: "Golem-Tokens",
    value: "GNT",
  },
  {
    name: "Golos",
    value: "GOLOS",
  },
  {
    name: "Gridcoin",
    value: "GRC",
  },
  {
    name: "Graph",
    value: "GRT",
  },
  {
    name: "Groestlcoin",
    value: "GRS",
  },
  {
    name: "Growers-International",
    value: "GRWI",
  },
  {
    name: "Game",
    value: "GTC",
  },
  {
    name: "Gifto",
    value: "GTO",
  },
  {
    name: "Guppy",
    value: "GUP",
  },
  {
    name: "Genesis-Vision",
    value: "GVT",
  },
  {
    name: "GXShares",
    value: "GXS",
  },
  {
    name: "Hedera",
    value: "HBAR",
  },
  {
    name: "HoboNickels",
    value: "HBN",
  },
  {
    name: "HEAT",
    value: "HEAT",
  },
  {
    name: "Humaniq",
    value: "HMQ",
  },
  {
    name: "High-Performance-Blockchain",
    value: "HPB",
  },
  {
    name: "Hshare",
    value: "HSR",
  },
  {
    name: "Huobi Token",
    value: "HT",
  },
  {
    name: "Hush",
    value: "HUSH",
  },
  {
    name: "Hive",
    value: "HVN",
  },
  {
    name: "HexxCoin",
    value: "HXX",
  },
  {
    name: "ICONOMI",
    value: "ICN",
  },
  {
    name: "ICON",
    value: "ICX",
  },
  {
    name: "Infinitecoin",
    value: "IFC",
  },
  {
    name: "investFeed",
    value: "IFT",
  },
  {
    name: "Ignis",
    value: "IGNIS",
  },
  {
    name: "Incent",
    value: "INCNT",
  },
  {
    name: "Indorse-Token",
    value: "IND",
  },
  {
    name: "InfChain",
    value: "INF",
  },
  {
    name: "Ink",
    value: "INK",
  },
  {
    name: "INS-Ecosystem",
    value: "INS",
  },
  {
    name: "Insights-Network",
    value: "INSTAR",
  },
  {
    name: "Internet-Node-Token",
    value: "INT",
  },
  {
    name: "Internxt",
    value: "INXT",
  },
  {
    name: "IOCoin",
    value: "IOC",
  },
  {
    name: "ION",
    value: "ION",
  },
  {
    name: "Internet-of-People",
    value: "IOP",
  },
  {
    name: "IOStoken",
    value: "IOST",
  },
  {
    name: "IOTA",
    value: "IOTA",
  },
  {
    name: "IoTeX",
    value: "IOTX",
  },
  {
    name: "Iquant-Chain",
    value: "IQT",
  },
  {
    name: "IoT-Chain",
    value: "ITC",
  },
  {
    name: "iXcoin",
    value: "IXC",
  },
  {
    name: "InsureX",
    value: "IXT",
  },
  {
    name: "JET8",
    value: "J8T",
  },
  {
    name: "Jibrel-Network",
    value: "JNT",
  },
  {
    name: "KuCoin",
    value: "KCS",
  },
  {
    name: "KickCoin",
    value: "KICK",
  },
  {
    name: "KIN",
    value: "KIN",
  },
  {
    name: "Klaytn",
    value: "KLAY",
  },
  {
    name: "Komodo",
    value: "KMD",
  },
  {
    name: "Kyber-Network",
    value: "KNC",
  },
  {
    name: "KoreCoin",
    value: "KORE",
  },
  {
    name: "Kusama",
    value: "KSM",
  },
  {
    name: "LBRY-Credits",
    value: "LBC",
  },
  {
    name: "Litecoin-Cash",
    value: "LCC",
  },
  {
    name: "EthLend",
    value: "LEND",
  },
  {
    name: "UNUS SED LEO",
    value: "LEO",
  },
  {
    name: "Leverj",
    value: "LEV",
  },
  {
    name: "Legends-Room",
    value: "LGD",
  },
  {
    name: "Linda",
    value: "LINDA",
  },
  {
    name: "ChainLink",
    value: "LINK",
  },
  {
    name: "Lykke",
    value: "LKK",
  },
  {
    name: "LoMoCoin",
    value: "LMC",
  },
  {
    name: "LOCIcoin",
    value: "LOCI",
  },
  {
    name: "Loom-Token",
    value: "LOOM",
  },
  {
    name: "Loopring",
    value: "LRC",
  },
  {
    name: "Lisk",
    value: "LSK",
  },
  {
    name: "Litecoin",
    value: "LTC",
  },
  {
    name: "Lunyr",
    value: "LUN",
  },
  {
    name: "Terra",
    value: "LUNA",
  },
  {
    name: "MaidSafeCoin",
    value: "MAID",
  },
  {
    name: "Decentraland",
    value: "MANA",
  },
  {
    name: "Polygon",
    value: "MATIC",
  },
  {
    name: "Maxcoin",
    value: "MAX",
  },
  {
    name: "Embers",
    value: "MBRS",
  },
  {
    name: "MCAP",
    value: "MCAP",
  },
  {
    name: "Monaco",
    value: "MCO",
  },
  {
    name: "Moeda-Loyalty-Points",
    value: "MDA",
  },
  {
    name: "Megacoin",
    value: "MEC",
  },
  {
    name: "MediBlock",
    value: "MED",
  },
  {
    name: "Memetic",
    value: "MEME",
  },
  {
    name: "Mercury",
    value: "MER",
  },
  {
    name: "MergeCoin",
    value: "MGC",
  },
  {
    name: "MobileGo",
    value: "MGO",
  },
  {
    name: "Minex",
    value: "MINEX",
  },
  {
    name: "Mintcoin",
    value: "MINT",
  },
  {
    name: "IOTA",
    value: "MIOTA",
  },
  {
    name: "Mithril",
    value: "MITH",
  },
  {
    name: "Maker",
    value: "MKR",
  },
  {
    name: "Melon",
    value: "MLN",
  },
  {
    name: "Minereum",
    value: "MNE",
  },
  {
    name: "MinexCoin",
    value: "MNX",
  },
  {
    name: "Modum",
    value: "MOD",
  },
  {
    name: "MonaCoin",
    value: "MONA",
  },
  {
    name: "Miners-Reward-Token",
    value: "MRT",
  },
  {
    name: "Mothership",
    value: "MSP",
  },
  {
    name: "Monetha",
    value: "MTH",
  },
  {
    name: "MedToken",
    value: "MTN",
  },
  {
    name: "MonetaryUnit",
    value: "MUE",
  },
  {
    name: "Musicoin",
    value: "MUSIC",
  },
  {
    name: "MyBit-Token",
    value: "MYB",
  },
  {
    name: "Mysterium",
    value: "MYST",
  },
  {
    name: "Mazacoin",
    value: "MZC",
  },
  {
    name: "Namocoin",
    value: "NAMO",
  },
  {
    name: "Nano",
    value: "NANO",
  },
  {
    name: "Nebulas-Token",
    value: "NAS",
  },
  {
    name: "Nav-Coin",
    value: "NAV",
  },
  {
    name: "NuBits",
    value: "NBT",
  },
  {
    name: "Nucleus-Vision",
    value: "NCASH",
  },
  {
    name: "NeverDie-Coin",
    value: "NDC",
  },
  {
    name: "Neblio",
    value: "NEBL",
  },
  {
    name: "NEO",
    value: "NEO",
  },
  {
    name: "NeosCoin",
    value: "NEOS",
  },
  {
    name: "Nimiq",
    value: "NET",
  },
  {
    name: "NoLimitCoin",
    value: "NLC2",
  },
  {
    name: "Gulden",
    value: "NLG",
  },
  {
    name: "Namecoin",
    value: "NMC",
  },
  {
    name: "Numeraire",
    value: "NMR",
  },
  {
    name: "NobleCoin",
    value: "NOBL",
  },
  {
    name: "DNotes",
    value: "NOTE",
  },
  {
    name: "Pundi-X-Token",
    value: "NPXS",
  },
  {
    name: "NuShares",
    value: "NSR",
  },
  {
    name: "Fujinto",
    value: "NTO",
  },
  {
    name: "Nuls",
    value: "NULS",
  },
  {
    name: "Novacoin",
    value: "NVC",
  },
  {
    name: "Nexium",
    value: "NXC",
  },
  {
    name: "Nexus",
    value: "NXS",
  },
  {
    name: "Nxt",
    value: "NXT",
  },
  {
    name: "openANX",
    value: "OAX",
  },
  {
    name: "Obits",
    value: "OBITS",
  },
  {
    name: "Oceanlab",
    value: "OCL",
  },
  {
    name: "Odyssey",
    value: "OCN",
  },
  {
    name: "ODEM",
    value: "ODEM",
  },
  {
    name: "Obsidian",
    value: "ODN",
  },
  {
    name: "OFCOIN",
    value: "OF",
  },
  {
    name: "OKCash",
    value: "OK",
  },
  {
    name: "OmiseGo",
    value: "OMG",
  },
  {
    name: "Omni",
    value: "OMNI",
  },
  {
    name: "DeepOnion",
    value: "ONION",
  },
  {
    name: "Ontology",
    value: "ONT",
  },
  {
    name: "Opus",
    value: "OPT",
  },
  {
    name: "Orion-Protocol",
    value: "ORN",
  },
  {
    name: "Simple-Token",
    value: "OST",
  },
  {
    name: "Particl",
    value: "PART",
  },
  {
    name: "PascalCoin",
    value: "PASC",
  },
  {
    name: "TenX",
    value: "PAY",
  },
  {
    name: "Pebbles",
    value: "PBL",
  },
  {
    name: "Primalbase-Token",
    value: "PBT",
  },
  {
    name: "Payfair",
    value: "PFR",
  },
  {
    name: "CryptoPing",
    value: "PING",
  },
  {
    name: "Pinkcoin",
    value: "PINK",
  },
  {
    name: "PIVX",
    value: "PIVX",
  },
  {
    name: "Lampix",
    value: "PIX",
  },
  {
    name: "Polybius",
    value: "PLBT",
  },
  {
    name: "Pillar",
    value: "PLR",
  },
  {
    name: "Pluton",
    value: "PLU",
  },
  {
    name: "POA-Network",
    value: "POA",
  },
  {
    name: "Poet",
    value: "POE",
  },
  {
    name: "Polymath",
    value: "POLY",
  },
  {
    name: "PoSW-Coin",
    value: "POSW",
  },
  {
    name: "PotCoin",
    value: "POT",
  },
  {
    name: "Power-Ledger",
    value: "POWR",
  },
  {
    name: "Peercoin",
    value: "PPC",
  },
  {
    name: "Populous",
    value: "PPT",
  },
  {
    name: "Peerplays",
    value: "PPY",
  },
  {
    name: "Paragon-Coin",
    value: "PRG",
  },
  {
    name: "Oyster-Pearl",
    value: "PRL",
  },
  {
    name: "Propy",
    value: "PRO",
  },
  {
    name: "Primas",
    value: "PST",
  },
  {
    name: "Pesetacoin",
    value: "PTC",
  },
  {
    name: "Patientory",
    value: "PTOY",
  },
  {
    name: "Pura",
    value: "PURA",
  },
  {
    name: "QASH",
    value: "QASH",
  },
  {
    name: "Quantum",
    value: "QAU",
  },
  {
    name: "Qlink",
    value: "QLC",
  },
  {
    name: "Quark",
    value: "QRK",
  },
  {
    name: "Quantum-Resistant-Ledger",
    value: "QRL",
  },
  {
    name: "Quantstamp",
    value: "QSP",
  },
  {
    name: "Quatloo",
    value: "QTL",
  },
  {
    name: "Qtum",
    value: "QTUM",
  },
  {
    name: "Quickswap",
    value: "QUICK",
  },
  {
    name: "Qwark",
    value: "QWARK",
  },
  {
    name: "Revain",
    value: "R",
  },
  {
    name: "Radium",
    value: "RADS",
  },
  {
    name: "Condensate",
    value: "RAIN",
  },
  {
    name: "Rubies",
    value: "RBIES",
  },
  {
    name: "Ripto-Bux",
    value: "RBX",
  },
  {
    name: "RubyCoin",
    value: "RBY",
  },
  {
    name: "Ripio-Credit-Network",
    value: "RCN",
  },
  {
    name: "ReddCoin",
    value: "RDD",
  },
  {
    name: "Raiden-Network-Token",
    value: "RDN",
  },
  {
    name: "Regalcoin",
    value: "REC",
  },
  {
    name: "Redcoin",
    value: "RED",
  },
  {
    name: "Augur",
    value: "REP",
  },
  {
    name: "Request-Network",
    value: "REQ",
  },
  {
    name: "RChain",
    value: "RHOC",
  },
  {
    name: "Riecoin",
    value: "RIC",
  },
  {
    name: "Rise",
    value: "RISE",
  },
  {
    name: "RLC-Token",
    value: "RLC",
  },
  {
    name: "RouletteToken",
    value: "RLT",
  },
  {
    name: "Red-Pulse",
    value: "RPX",
  },
  {
    name: "Recovery-Right-Tokens",
    value: "RRT",
  },
  {
    name: "Ruff",
    value: "RUFF",
  },
  {
    name: "THORChain",
    value: "RUNE",
  },
  {
    name: "Rupee",
    value: "RUP",
  },
  {
    name: "Rivetz",
    value: "RVT",
  },
  {
    name: "SafeExchangeCoin",
    value: "SAFEX",
  },
  {
    name: "Salt",
    value: "SALT",
  },
  {
    name: "Santiment-Network-Token",
    value: "SAN",
  },
  {
    name: "Steem-Dollars",
    value: "SBD",
  },
  {
    name: "Super-Bitcoin",
    value: "SBTC",
  },
  {
    name: "Siacoin",
    value: "SC",
  },
  {
    name: "Seele",
    value: "SEELE",
  },
  {
    name: "Sequence",
    value: "SEQ",
  },
  {
    name: "SHIBA-INU",
    value: "SHIB",
  },
  {
    name: "SHIFT",
    value: "SHIFT",
  },
  {
    name: "SIBCoin",
    value: "SIB",
  },
  {
    name: "SIGMAcoin",
    value: "SIGMA",
  },
  {
    name: "Signatum",
    value: "SIGT",
  },
  {
    name: "Storjcoin-X",
    value: "SJCX",
  },
  {
    name: "SkinCoin",
    value: "SKIN",
  },
  {
    name: "Skycoin",
    value: "SKY",
  },
  {
    name: "SolarCoin",
    value: "SLR",
  },
  {
    name: "SaluS",
    value: "SLS",
  },
  {
    name: "SmartCash",
    value: "SMART",
  },
  {
    name: "SmartMesh",
    value: "SMT",
  },
  {
    name: "SunContract",
    value: "SNC",
  },
  {
    name: "SingularDTV",
    value: "SNGLS",
  },
  {
    name: "SONM",
    value: "SNM",
  },
  {
    name: "Synergy",
    value: "SNRG",
  },
  {
    name: "Status-Network-Token",
    value: "SNT",
  },
  {
    name: "All-Sports",
    value: "SOC",
  },
  {
    name: "Solana",
    value: "SOL",
  },
  {
    name: "Phantasma",
    value: "SOUL",
  },
  {
    name: "SpankChain",
    value: "SPANK",
  },
  {
    name: "SpaceChain",
    value: "SPC",
  },
  {
    name: "Sphere",
    value: "SPHR",
  },
  {
    name: "SpreadCoin",
    value: "SPR",
  },
  {
    name: "Synthetix-Network-Token",
    value: "SNX",
  },
  {
    name: "Sirin-Labs-Token",
    value: "SRN",
  },
  {
    name: "Startcoin",
    value: "START",
  },
  {
    name: "Steem",
    value: "STEEM",
  },
  {
    name: "STK-Token",
    value: "STK",
  },
  {
    name: "Storj",
    value: "STORJ",
  },
  {
    name: "Storm",
    value: "STORM",
  },
  {
    name: "Storiqa",
    value: "STQ",
  },
  {
    name: "Stratis",
    value: "STRAT",
  },
  {
    name: "Stox",
    value: "STX",
  },
  {
    name: "Substratum",
    value: "SUB",
  },
  {
    name: "SwftCoin",
    value: "SWFTC",
  },
  {
    name: "Bitswift",
    value: "SWIFT",
  },
  {
    name: "Swarm-City",
    value: "SWT",
  },
  {
    name: "Syndicate",
    value: "SYNX",
  },
  {
    name: "SysCoin",
    value: "SYS",
  },
  {
    name: "Taas",
    value: "TAAS",
  },
  {
    name: "Lamden",
    value: "TAU",
  },
  {
    name: "The-ChampCoin",
    value: "TCC",
  },
  {
    name: "True-Flip",
    value: "TFL",
  },
  {
    name: "HempCoin",
    value: "THC",
  },
  {
    name: "Theta-Token",
    value: "THETA",
  },
  {
    name: "Time",
    value: "TIME",
  },
  {
    name: "Blocktix",
    value: "TIX",
  },
  {
    name: "TokenCard",
    value: "TKN",
  },
  {
    name: "Trackr",
    value: "TKR",
  },
  {
    name: "Tokes",
    value: "TKS",
  },
  {
    name: "Time-New-Bank",
    value: "TNB",
  },
  {
    name: "Tierion",
    value: "TNT",
  },
  {
    name: "ToaCoin",
    value: "TOA",
  },
  {
    name: "OriginTrail",
    value: "TRAC",
  },
  {
    name: "Terracoin",
    value: "TRC",
  },
  {
    name: "Tracto",
    value: "TRCT",
  },
  {
    name: "Tribe",
    value: "TRIBE",
  },
  {
    name: "Triggers",
    value: "TRIG",
  },
  {
    name: "Trustcoin",
    value: "TRST",
  },
  {
    name: "TrueChain",
    value: "TRUE",
  },
  {
    name: "TrustPlus",
    value: "TRUST",
  },
  {
    name: "Tronix",
    value: "TRX",
  },
  {
    name: "TrueUSD",
    value: "TUSD",
  },
  {
    name: "TransferCoin",
    value: "TX",
  },
  {
    name: "Ubiq",
    value: "UBQ",
  },
  {
    name: "UnikoinGold",
    value: "UKG",
  },
  {
    name: "Ulatech",
    value: "ULA",
  },
  {
    name: "UnbreakableCoin",
    value: "UNB",
  },
  {
    name: "Uniswap",
    value: "UNI",
  },
  {
    name: "SuperNET",
    value: "UNITY",
  },
  {
    name: "Unobtanium",
    value: "UNO",
  },
  {
    name: "Unity-Ingot",
    value: "UNY",
  },
  {
    name: "UpToken",
    value: "UP",
  },
  {
    name: "Uro",
    value: "URO",
  },
  {
    name: "Tether",
    value: "USDT",
  },
  {
    name: "TerraUSD",
    value: "UST",
  },
  {
    name: "UTrust",
    value: "UTK",
  },
  {
    name: "BLOCKv",
    value: "VEE",
  },
  {
    name: "VeChain",
    value: "VEN",
  },
  {
    name: "Veritaseum",
    value: "VERI",
  },
  {
    name: "VeChain",
    value: "VET",
  },
  {
    name: "Viacoin",
    value: "VIA",
  },
  {
    name: "Viberate",
    value: "VIB",
  },
  {
    name: "Vibe",
    value: "VIBE",
  },
  {
    name: "VIVO",
    value: "VIVO",
  },
  {
    name: "Voise",
    value: "VOISE",
  },
  {
    name: "Voxels",
    value: "VOX",
  },
  {
    name: "VPNCoin",
    value: "VPN",
  },
  {
    name: "Vericoin",
    value: "VRC",
  },
  {
    name: "Verium",
    value: "VRM",
  },
  {
    name: "Veros",
    value: "VRS",
  },
  {
    name: "vSlice",
    value: "VSL",
  },
  {
    name: "Vertcoin",
    value: "VTC",
  },
  {
    name: "vTorrent",
    value: "VTR",
  },
  {
    name: "WaBi",
    value: "WABI",
  },
  {
    name: "Wanchain",
    value: "WAN",
  },
  {
    name: "Waves",
    value: "WAVES",
  },
  {
    name: "Wax-Token",
    value: "WAX",
  },
  {
    name: "Wrapped Bitcoin",
    value: "WBTC",
  },
  {
    name: "Waves-Community",
    value: "WCT",
  },
  {
    name: "WorldCoin",
    value: "WDC",
  },
  {
    name: "WavesGo",
    value: "WGO",
  },
  {
    name: "Wagerr",
    value: "WGR",
  },
  {
    name: "Wings",
    value: "WINGS",
  },
  {
    name: "WePower",
    value: "WPR",
  },
  {
    name: "Walton",
    value: "WTC",
  },
  {
    name: "Giga-Watt-Token",
    value: "WTT",
  },
  {
    name: "Asch",
    value: "XAS",
  },
  {
    name: "Xaurum",
    value: "XAUR",
  },
  {
    name: "Bitcoin-Plus",
    value: "XBC",
  },
  {
    name: "XtraBYtes",
    value: "XBY",
  },
  {
    name: "Cryptonite",
    value: "XCN",
  },
  {
    name: "Counterparty",
    value: "XCP",
  },
  {
    name: "DigitalNote",
    value: "XDN",
  },
  {
    name: "Elastic",
    value: "XEL",
  },
  {
    name: "NEM",
    value: "XEM",
  },
  {
    name: "NEM",
    value: "NEM",
  },
  {
    name: "Haven-Protocol",
    value: "XHV",
  },
  {
    name: "Sphere-Identity",
    value: "XID",
  },
  {
    name: "Stellar",
    value: "XLM",
  },
  {
    name: "Magi",
    value: "XMG",
  },
  {
    name: "Monero",
    value: "XMR",
  },
  {
    name: "Metal",
    value: "XMT",
  },
  {
    name: "Myriadcoin",
    value: "XMY",
  },
  {
    name: "Primecoin",
    value: "XPM",
  },
  {
    name: "Rialto",
    value: "XRL",
  },
  {
    name: "Ripple",
    value: "XRP",
  },
  {
    name: "Spectrecoin",
    value: "XSPEC",
  },
  {
    name: "Stealthcoin",
    value: "XST",
  },
  {
    name: "Tezos",
    value: "XTZ",
  },
  {
    name: "Exchange-Union",
    value: "XUC",
  },
  {
    name: "Vcash",
    value: "XVC",
  },
  {
    name: "Verge",
    value: "XVG",
  },
  {
    name: "WhiteCoin",
    value: "XWC",
  },
  {
    name: "ZCoin",
    value: "XZC",
  },
  {
    name: "ZrCoin",
    value: "XZR",
  },
  {
    name: "Yee",
    value: "YEE",
  },
  {
    name: "YOYOW",
    value: "YOYOW",
  },
  {
    name: "ZcCoin",
    value: "ZCC",
  },
  {
    name: "Zclassic",
    value: "ZCL",
  },
  {
    name: "Zebi",
    value: "ZCO",
  },
  {
    name: "Zcash",
    value: "ZEC",
  },
  {
    name: "ZenCash",
    value: "ZEN",
  },
  {
    name: "Zetacoin",
    value: "ZET",
  },
  {
    name: "Zilliqa",
    value: "ZIL",
  },
  {
    name: "Zilla",
    value: "ZLA",
  },
  {
    name: "0x",
    value: "ZRX",
  },
];

const currencyInputOptions = [
  ...physicalCurrencyOptions,
  ...digitalCurrencyOptions,
];

export {
  currencyInputOptions,
  physicalCurrencyOptions,
  digitalCurrencyOptions,
};
