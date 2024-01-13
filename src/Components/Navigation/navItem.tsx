import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { NavigationElementType } from "../../Types/navigation";

type NavItemProps = {
  item: NavigationElementType;
};

function NavItem({ item }: NavItemProps) {
  return (
    <li className='relative overflow-hidden '>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          twMerge(
            "after:block after:w-full after:h-1 after:bg-hrnet-green after:translate-x-negative-full after:transition-transform after:duration-300",
            isActive && "after:translate-x-0"
          )
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
}

export default NavItem;
