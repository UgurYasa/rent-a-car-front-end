import { BiLogoAngular } from "react-icons/bi";
import { BsCreditCard2FrontFill, BsSuitcase2Fill } from "react-icons/bs";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { GiGearStickPattern, GiPillow } from "react-icons/gi";
import { HiIdentification } from "react-icons/hi";

export const rentalCarTitles = [
  "Kiralık Araçlar",
  "Ekonomik Kiralık Araç",
  "Konfor Kiralık Araç",
  "Prestijli Kiralık Araç",
  "Premium Kiralık Araç",
  "Lüks Kiralık Araçlar",
  "Van Kiralık Araç",
];

export const rentalCarFeatures = [
  {
    subtitle: "Ekonomik Kiralık Araç",
    title: "Fiat Egea",
    image: "/assets/fiat-egea.png",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "5 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "2 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Manuel Vites",
      },
    ],
    rental_conditions: [
      { icon: <FaCalendarAlt className="mr-2" />, text: "21 Yaş ve Üstü" },
      {
        icon: <HiIdentification className="mr-2" />,
        text: "Ehliyet Yaşı 1 ve Üstü",
      },
      {
        icon: <BsCreditCard2FrontFill className="mr-2" />,
        text: "1 Kredi Kartı",
      },
    ],
  },
  {
    subtitle: "Premium Kiralık Araç",
    title: "SKODA KODIAQ",
    image: "https://www.budget.com.tr/Budget/media/Budget/Cars/k-skoda-kodiaq.png",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "7 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "2 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik",
      },
    ],
    rental_conditions: [
      { icon: <FaCalendarAlt className="mr-2" />, text: "21 Yaş ve Üstü" },
      {
        icon: <HiIdentification className="mr-2" />,
        text: "Ehliyet Yaşı 3 ve Üstü",
      },
      {
        icon: <BsCreditCard2FrontFill className="mr-2" />,
        text: "1 Kredi Kartı",
      },
    ],
  },
  {
    subtitle: "Prestijli Kiralık Araç",
    title: "Chery Omoda 5",
    image: "https://www.budget.com.tr/Budget/media/Budget/Cars/n-chery-omoda-5.png",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "5 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "2 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik",
      },
    ],
    rental_conditions: [
      { icon: <FaCalendarAlt className="mr-2" />, text: "21 Yaş ve Üstü" },
      {
        icon: <HiIdentification className="mr-2" />,
        text: "Ehliyet Yaşı 2 ve Üstü",
      },
      {
        icon: <BsCreditCard2FrontFill className="mr-2" />,
        text: "1 Kredi Kartı",
      },
    ],
  },
  {
    subtitle: "Lüks Kiralık Araçlar",
    title: "Volvo XC60",
    image: "https://www.budget.com.tr/Budget/media/Budget/Cars/p-volvo-xc60.png",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "5 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "3 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik",
      },
    ],
    rental_conditions: [
      { icon: <FaCalendarAlt className="mr-2" />, text: "27 Yaş ve Üstü" },
      {
        icon: <HiIdentification className="mr-2" />,
        text: "Ehliyet Yaşı 3 ve Üstü",
      },
      {
        icon: <BsCreditCard2FrontFill className="mr-2" />,
        text: "1 Kredi Kartı",
      },
    ],
  },
];

