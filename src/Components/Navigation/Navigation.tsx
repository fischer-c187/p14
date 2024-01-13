import { DefaultNavItem } from "../../Types/navigation";

type NavigationProps<T extends DefaultNavItem> = {
  navItems: T[];
  RenderItem: React.ComponentType<{ item: T }>;
};

function Navigation<T extends DefaultNavItem>({
  navItems,
  RenderItem,
}: NavigationProps<T>) {
  return (
    <nav>
      <ul className='flex gap-8'>
        {navItems.map((item) => (
          <RenderItem item={item} key={item.id} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
