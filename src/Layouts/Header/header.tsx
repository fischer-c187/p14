import Logo from "@components/Logo/logo";
import Navigation from "@components/Navigation/Navigation";
import NavItem from "@components/Navigation/navItem";
import navigationElements from "../../constants/navigation";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className='flex border-b border-gray-100 justify-between items-center px-8 py-6 text-gray-500 font-semibold text-base'>
      <Logo logo={logo} />
      <Navigation navItems={navigationElements} RenderItem={NavItem} />
    </header>
  );
}

export default Header;
