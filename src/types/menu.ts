export type DATABASE_MENU_ITEM = {
  id: number;
  title: string;
  type_id: number;
  slug: string;
  menu_belong_id: number;
  route: string;
  status: number;
};

export type MENU_TREE_ITEM = {
  id: number;
  title: string;
  url: string;
  submenu?: MENU_TREE_ITEM[];
  icon?: JSX.Element;
 
};

export type MENU_TREE = MENU_TREE_ITEM[];
