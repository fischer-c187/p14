import { DefaultNavItem, DefaultNavItems } from "../../Types/navigation";

type NavigationProps = {
  navItems: DefaultNavItems;
  RenderItem: React.ComponentType<{ item: DefaultNavItem }>;
};

function Navigation({ navItems, RenderItem }: NavigationProps) {
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
