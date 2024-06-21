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
    id: 0,
    subtitle: "Ekonomik Kiralık Araç",
    title: "Fiat Egea",
    image: "/assets/fiat-egea.png",
    description:
      "Fiat Egea, zarif tasarımı ve üstün performansıyla dikkat çeken bir sedan modelidir. Akıcı hatları ve modern ön ızgarasıyla şık bir görünüm sunar. Geniş iç mekânı, yüksek kaliteli malzemeler ve ergonomik tasarımıyla konforlu bir sürüş deneyimi sağlar. Ekonomik motor seçenekleri ve düşük yakıt tüketimi ile şehir içi ve uzun yolculuklarda verimli bir performans sunar. Gelişmiş multimedya sistemi, dokunmatik ekranı ve akıllı telefon entegrasyonu ile teknolojiyle uyum içinde bir sürüş keyfi yaşatır. Fiat Egea, güvenlik özellikleri ile de öne çıkar; çarpışma önleyici sistem, şerit takip asistanı ve arka görüş kamerası gibi özelliklerle donatılmıştır. Şıklık, konfor ve verimliliği bir araya getiren Fiat Egea, hem bireysel hem de aile kullanımı için ideal bir seçenektir.",
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
    id: 1,
    subtitle: "Premium Kiralık Araç",
    title: "SKODA KODIAQ",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/k-skoda-kodiaq.png",
    description:
      "SKODA KODIAQ, geniş ve şık tasarımıyla dikkat çeken bir SUV modelidir. 7 koltuk seçeneği ile geniş aileler için ideal olan bu araç, hem şehir içi hem de uzun yolculuklar için konforlu bir sürüş sunar. Güçlü motor seçenekleri ve dört tekerlekten çekiş sistemiyle her türlü yol koşulunda üstün performans sergiler. İç mekânı modern ve fonksiyonel detaylarla donatılmış olup, dijital gösterge paneli ve dokunmatik multimedya ekranıyla teknolojiyi yanınıza getirir. Yüksek güvenlik standartları ve çeşitli sürücü destek sistemleriyle KODIAQ, hem güvenli hem de keyifli bir sürüş vaat ediyor.",
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
    id: 2,
    subtitle: "Prestijli Kiralık Araç",
    title: "Chery Omoda 5",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/n-chery-omoda-5.png",
    description:
      "Chery Omoda 5, dinamik tasarımı ve ileri teknolojisiyle öne çıkan modern bir SUV'dir. Göz alıcı dış tasarımı, keskin hatları ve LED farlarıyla dikkat çekerken, geniş iç mekanı konfor ve şıklığı bir arada sunar. Gelişmiş motor seçenekleri ve yakıt verimliliği ile performans ve ekonomiyi birleştirir. Omoda 5, entegre dokunmatik ekran, akıllı bağlantı özellikleri ve premium ses sistemiyle sürüş deneyimini üst seviyeye çıkarır. Güvenlik konusunda da iddialı olan bu model, çarpışma önleyici sistemler ve adaptif hız sabitleyici gibi birçok ileri güvenlik özelliğiyle donatılmıştır. Chery Omoda 5, stil ve teknolojiyi bir araya getiren, modern yaşamın ihtiyaçlarına cevap veren bir SUV'dir.",
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
    id: 3,
    subtitle: "Lüks Kiralık Araçlar",
    title: "Volvo XC60",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/p-volvo-xc60.png",
    description:
      "Volvo XC60, lüks ve güvenliği bir arada sunan bir SUV modelidir. Şık ve zarif tasarımı, ince detayları ve LED farlarıyla dikkat çekerken, iç mekânı yüksek kaliteli malzemelerle döşenmiş ve geniş bir alan sunar. Güçlü motor seçenekleri, hibrit ve elektrikli versiyonlarıyla çevre dostu bir performans sağlar. XC60, Volvo'nun ünlü güvenlik teknolojileriyle donatılmış olup, adaptif hız sabitleyici, şerit takip asistanı ve çarpışma önleme sistemi gibi özelliklerle sürüş güvenliğini artırır. Gelişmiş multimedya sistemi ve sezgisel dokunmatik ekranı, konforlu bir sürüş deneyimi sunar. Volvo XC60, stil, güvenlik ve performansı mükemmel bir şekilde birleştiren bir SUV'dir.",
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
