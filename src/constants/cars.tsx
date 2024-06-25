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
  // Ekonomik Kiralık Araç
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
    id: 4,
    subtitle: "Ekonomik Kiralık Araç",
    title: "Citroen C3",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/f-citroen-c3.png",
    description:
      " Şık tasarımı ve pratik kullanımıyla öne çıkan kompakt hatchback model. Yumuşak hatları ve karakteristik Airbump teknolojisiyle modern bir görünüm sunar. Geniş iç mekânı, konforlu koltukları ve kullanıcı dostu kontrolleriyle sürücü ve yolcular için rahat bir ortam sağlar. Ekonomik motor seçenekleri ve düşük yakıt tüketimi ile şehir içi ve uzun yolculuklarda ekonomik bir performans sunar. Gelişmiş multimedya sistemi, dokunmatik ekranı ve akıllı telefon entegrasyonu ile sürüş keyfini teknolojiyle birleştirir. Güvenlik özellikleri arasında ise çarpışma önleyici fren sistemi, şerit takip asistanı ve yorgunluk algılama sistemi bulunur. Citroën C3, şık tasarımı, konforlu iç mekânı ve güvenlik özellikleriyle özellikle şehir içi kullanım için ideal bir seçenektir.",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "4 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "2 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik Vites",
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
    id: 5,
    subtitle: "Ekonomik Kiralık Araç",
    title: "Volkswagen Polo",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/f-volkswagen-polo.png",
    description:
      "Kompakt boyutları ve şık tasarımıyla bilinen hatchback model. Modern hatları ve karakteristik Volkswagen ön ızgarasıyla dikkat çeker. Ferah iç mekânı, kaliteli malzemeler ve ergonomik düzenlemelerle sürücü ve yolcular için konforlu bir ortam sunar. Çeşitli motor seçenekleri arasından seçim yapabileceğiniz Polo, güçlü performansıyla da bilinir. Akıllı yakıt yönetimi sayesinde ekonomik bir sürüş deneyimi sunar. Teknoloji açısından ise gelişmiş multimedya sistemi, dokunmatik ekran ve sesli komut özellikleriyle donatılmıştır. Güvenlik donanımları arasında ise otomatik acil fren sistemi, şerit takip asistanı ve geri görüş kamerası gibi özellikler bulunur. Volkswagen Polo, şehir içi kullanım için pratik, güvenli ve konforlu bir seçenektir.",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "4 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "2 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik Vites",
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
    id: 6,
    subtitle: "Ekonomik Kiralık Araç",
    title: "Renault Taliant",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/a-renault-taliant.png",
    description:
      "Modern tasarımı ve pratik kullanımıyla öne çıkan kompakt sedan model. Akıcı hatları ve dinamik ön tasarımıyla çağdaş bir görünüm sunar. Geniş iç mekânı, konforlu koltukları ve ergonomik düzenlemeleriyle sürücü ve yolcular için rahat bir sürüş deneyimi sağlar. Ekonomik motor seçenekleri ve optimize edilmiş yakıt tüketimiyle hem şehir içi hem de uzun yolculuklarda verimli bir performans sunar. Gelişmiş multimedya sistemi, dokunmatik ekranı ve akıllı telefon entegrasyonu ile teknolojiyi sürüş deneyimine entegre eder. Güvenlik açısından ise çarpışma önleyici fren sistemi, yol tutuş kontrolü ve hız sabitleyici gibi özelliklerle donatılmıştır. Renault Taliant, şık tasarımı, ekonomik sürüşü ve güvenlik özellikleriyle özellikle şehir içi ve aile kullanımı için ideal bir seçenektir.",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "5 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "2 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik Vites",
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
  // Konfor Kiralık Araç
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
    id: 7,
    subtitle: "Konfor Kiralık Araç",
    title: "Renault Taliant",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/g-fiat-doblo-combi.png",
    description:
      "Geniş iç hacmi ve pratik kullanımıyla öne çıkan kompakt ticari taşıt modeli. Cesur tasarımı ve geniş cam alanlarıyla modern bir görünüm sunar. Yüksek tavanı ve geniş kapıları, kolay erişim ve kullanım sağlar. Ferah iç mekânı, modüler koltuk düzenlemeleri ve büyük bagaj alanıyla geniş bir taşıma kapasitesi sunar. Çeşitli motor seçenekleri arasından seçim yapabilirsiniz, bu da kullanım amacınıza ve performans ihtiyacınıza göre esneklik sağlar. İleri düzey güvenlik özellikleri, yolcu ve sürücü güvenliğini en üst düzeye çıkarmak için tasarlanmıştır. Fiat Doblo Combi, ticari kullanım için mükemmel bir seçenek olup, hem şehir içinde hem de uzun yolculuklarda kullanıcılarına geniş, konforlu ve güvenli bir sürüş deneyimi sunar.",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "5 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "2 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik Vites",
      },
    ],
    rental_conditions: [
      { icon: <FaCalendarAlt className="mr-2" />, text: "23 Yaş ve Üstü" },
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
  // Prestijli Kiralık Araç
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
  // Premium Kiralık Araç
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
//Van Kiralık Araçlar
  {
    id: 9,
    subtitle: "Van Kiralık Araç",
    title: "Fiat Ulysse",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/j-fiat-ulysse.png",
    description:
      " Bu araç, geniş iç hacmiyle dikkat çeker ve 9 kişiye kadar yolcu taşıma kapasitesine sahiptir. Estetik açıdan modern bir tasarıma sahip olan Fiat Ulysse, kullanışlı sürgülü kapılarıyla kolay erişim sağlar. Konforlu iç mekânı, ergonomik koltukları ve geniş bagaj alanıyla uzun yolculuklarda bile rahat bir sürüş sunar. Ekonomik motor seçenekleri ve düşük yakıt tüketimi, bu büyük aracın kullanım maliyetlerini optimize eder. Güvenlik donanımları arasında ise çarpışma önleyici sistemler, yol tutuş kontrolü ve park sensörleri bulunur. Fiat Ulysse, aileler için geniş, konforlu ve güvenli bir seçenek olarak öne çıkar.",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "9 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "3 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik Vites",
      },
    ],
    rental_conditions: [
      { icon: <FaCalendarAlt className="mr-2" />, text: "25 Yaş ve Üstü" },
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
    id: 10,
    subtitle: "Van Kiralık Araç",
    title: "Ford Tourneo Custom",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/j-ford-tourneo-custom.png",
    description:
      "Geniş iç hacmi ve şık tasarımıyla bilinen lüks minibüs modeli. Yüksek kaliteli malzemelerle tasarlanmış iç mekânı, ergonomik koltukları ve modüler düzenlemeleriyle konforlu bir sürüş deneyimi sunar. Esnek oturma düzenleri sayesinde 8 ila 9 kişiye kadar yolcu taşıma kapasitesine sahiptir. Çeşitli motor seçenekleri arasından seçim yapabilirsiniz, bu da performans ve yakıt verimliliği açısından esneklik sağlar. Ford'un SYNC 3 multimedya sistemi ve akıllı telefon entegrasyonu, sürüş deneyimini teknolojiyle zenginleştirir. Güvenlik donanımları arasında ise çarpışma önleyici sistemler, adaptif hız sabitleyici ve geri görüş kamerası gibi özellikler bulunur. Ford Tourneo Custom, uzun yolculuklar için ideal bir seçenek olup, geniş aileler ve ticari kullanımlar için geniş iç hacmi ve konforlu tasarımıyla öne çıkar.",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "9 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "3 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik Vites",
      },
    ],
    rental_conditions: [
      { icon: <FaCalendarAlt className="mr-2" />, text: "25 Yaş ve Üstü" },
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
    id: 11,
    subtitle: "Van Kiralık Araç",
    title: "Hyundai Staria",
    image:
      "https://www.budget.com.tr/Budget/media/Budget/Cars/j-hyundai-staria.png",
    description:
      " Yenilikçi tasarımı ve ileri düzey teknolojileriyle dikkat çeken bir MPV (Multi Purpose Vehicle) modeli. Futuristik hatları, akıcı tasarımı ve büyük cam alanlarıyla modern bir görünüm sunar. Geniş iç mekânı, esnek oturma düzenleri ve lüks malzemelerle donatılmış iç tasarımı, sürücü ve yolcular için üst düzey konfor sağlar. Çeşitli motor seçenekleri arasından seçim yapabilirsiniz, bu da performans ve yakıt ekonomisi açısından çeşitlilik sunar. Staria'nın gelişmiş multimedya sistemi, geniş dokunmatik ekranı ve akıllı telefon entegrasyonu, sürüş deneyimini zenginleştirir. Güvenlik özellikleri arasında ise çarpışma önleyici sistemler, şerit takip asistanı, otomatik acil fren sistemi ve 360 derece kamera gibi ileri düzey teknolojiler bulunur. Hyundai Staria, modern tasarımı, geniş iç mekânı ve gelişmiş teknolojik özellikleriyle aileler ve ticari kullanımlar için ideal bir seçenek sunar.",
    vehicle_features: [
      { icon: <FaUsers className="mr-2" />, text: "9 Yetişkin" },
      { icon: <BsSuitcase2Fill className="mr-2" />, text: "3 Büyük Bavul" },
      { icon: <GiPillow className="mr-2" />, text: "Yolcu Airbag" },
      { icon: <BiLogoAngular className="mr-2" />, text: "ABS" },
      {
        icon: <GiGearStickPattern className="mr-2 font-bold" />,
        text: "Otomatik Vites",
      },
    ],
    rental_conditions: [
      { icon: <FaCalendarAlt className="mr-2" />, text: "25 Yaş ve Üstü" },
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
];
