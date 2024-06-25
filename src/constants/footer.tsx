import { FacebookIcon } from "@/assets/icons/facebook";
import { InstagramIcon } from "@/assets/icons/instagram";
import { LinkedinIcon } from "@/assets/icons/linkedin";
import { LocationIcon } from "@/assets/icons/location";
import { MessageIcon } from "@/assets/icons/message";
import { PhoneIcon } from "@/assets/icons/phone";
import { TwitterIcon } from "@/assets/icons/twitter";

export const Page = {
  title: "Sayfa",
  pages: [
    { title: "Araçlar", href: "/araclar", id: 1 },
    { title: "Kampanyalar", href: "/kampanyalar/qualizto-kampanyalari", id: 2 },
    { title: "Ofisler", href: "/ofisler", id: 3 },
    { title: "Hizmetler", href: "/hizmetler", id: 4 },
    { title: "Ürünler ve Güvenceler", href: "/urunler-guvenceler", id: 5 },
  ],
};

export const Links = {
  title: "Linkler",
  links: [
    { title: "Kullanım koşulları", href: "/kullanım-kosullari", id: 1 },
    { title: "Gizlilik Politikası", href: "/gizlilik-politikasi", id: 2 },
    { title: "KVKK", href: "/kvkk", id: 3 },
  ],
};

export const Icons = [
  { icon: <FacebookIcon />, href: "https://www.facebook.com" ,id: 1},
  { icon: <LinkedinIcon />, href: "https://www.linkedin.com", id: 2},
  { icon: <TwitterIcon />, href: "https://x.com", id: 3},
  { icon: <InstagramIcon />, href: "https://www.instagram.com", id: 4},
];

export const Contact = {
  title: "Bize Ulaşın",
  infos: [
    { icon: <PhoneIcon />, text: "+90 522 222 22 22",id: 1},
    { icon: <MessageIcon />, text: "info@trakya.qualizto.com", id: 2},
    { icon: <LocationIcon />, text: "Edirne", id: 3},
  ],
};
