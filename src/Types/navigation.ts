export type DefaultNavItem = {
  id: number;
};

export type NavigationElementType = DefaultNavItem & {
  label: string;
  path: string;
};

export type NavigationElementsType = NavigationElementType[];

export type DefaultNavItems = DefaultNavItem[];
