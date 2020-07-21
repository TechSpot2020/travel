import price1 from "../images/pay.png";
import price2 from "../images/silver.png";
import price3 from "../images/pay.png";

//create Subscription PRICES array
const PRICES = [
  {
    id: 1,
    title: "FREE",
    description: "Free subscription consist of 1 free GB, No Support",
    image: price1,
    pathLink:
      "https://techspot2020.github.io/travel/?#/pricing/price-free-detail",
  },
  {
    id: 2,
    title: "SILVER",
    description:
      "Silver subscription consist of 3 free GB, Assistance provided 12 hours a day",
    image: price2,
    pathLink:
      "https://techspot2020.github.io/travel/?#/pricing/price-free-detail/price-silver-detail",
  },
  {
    id: 3,
    title: "GOLD",
    description: "Free subscription consist of 5 free GB, Unlimited Support",
    image: price3,
    pathLink: "/price-gold-detail",
  },
];

export default PRICES;
