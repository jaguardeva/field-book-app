interface MenuItem {
  label: string;
  href: string;
}

const MENU_LIST: MenuItem[] = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Lapangan",
    href: "/lapangan",
  },
  {
    label: "Promo",
    href: "/promo",
  },
];

export default MENU_LIST;
