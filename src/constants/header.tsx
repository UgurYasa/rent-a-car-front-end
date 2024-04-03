import { MENU_TREE } from "@/types/menu";
import { FaUser } from "react-icons/fa";

export const menu: MENU_TREE = [
    {
      id: 1,
      title: "Rezervasyonu Yönet",
      url: "/iptal-guncelleme",
      submenu: [
        {
          id: 6,
          title: "Rezervasyon İptal / Güncelleme",
          url: "/iptal-guncelleme",
          submenu: [],
        },

        { id: 7, title: "İletişim", url: "/iletisim", submenu: [] },
      ],
    },
    {
      id: 2,
      title: "Araçlar",
      url: "/araclar",
      submenu: [
        {
          id: 8,
          title: "Kiralık Araçlar",
          url: "/araclar",
          submenu: [],
        },

      ],
    },
    {
      id: 3,
      title: "Kampanyalar",
      url: "/kampanyalar",
      submenu: [
        {
          id: 9,
          title: "Qualizto Kampanyaları",
          url: "/kampanyalar",
          submenu: [],
        },

      ],
    },
    {
      id: 4,
      title: "Ofisler",
      url: "/ofisler",
      submenu: [],
    },
    {
      id: 5,
      title: "Hizmetler",
      url: "/hizmetler",
      submenu: [],
    },
    {
      id: 6,
      title: "Ürünler & Güvenceler",
      url: "/urunler-guvenceler",
      submenu: [],
    },

    {
      id: 7,
      title: "Üye Girişi",
      url: "/uye-girisi",
      submenu: [],
      icon: <FaUser size={20} />,
    },
  ];