interface MenuItem {
  title: string;
  link: string;
  important: boolean;
}

const menu_items: MenuItem[] = [
  { title: "Soldes", link: "/soldes", important: true },
  { title: "Nouveautés", link: "/soldes", important: false },
  { title: "Femme", link: "/soldes", important: false },
  { title: "Homme", link: "/soldes", important: false },
  { title: "Fille", link: "/soldes", important: false },
  { title: "Garçon", link: "/soldes", important: false },
  { title: "Bébé", link: "/soldes", important: false },
  { title: "Destination vacances", link: "/soldes", important: false },
  { title: "Nos collections", link: "/soldes", important: false },
  { title: "Marques", link: "/soldes", important: false },
];

export default menu_items;
