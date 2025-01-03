import { NavItemsRight, NavItemsLeft } from "../Constants/constants/";
import EatCurious from "../assets/logo/eatcurious.svg";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full px-6 lg:px-40 text-white">
      <nav>
        {/* Desktop View */}
        <ul className="max-lg:hidden flex justify-between items-center py-4">
          {/* Left Side Navbar */}
          {NavItemsLeft.map((navItem, index) => (
            <li key={index} className="font-narrow">
              <a
                className={`text-2xl ${navItem.className}`}
                href={navItem.link}
              >
                {navItem.name}
              </a>
            </li>
          ))}

          {/* Eat Curious Logo */}
          <div>
            <img className="h-1 md:h-20" src={EatCurious} alt="SVG" />
          </div>

          {/* Right side Navbar */}
          {NavItemsRight.map((navItem, index) => (
            <li key={index} className="font-narrow">
              <a
                className={`text-2xl ${navItem.className}`}
                href={navItem.link}
              >
                {navItem.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile View */}
        <ul className="lg:hidden flex items-center justify-between py-4">
          {/* Eat Curious Logo */}
          <div className="flex-1 flex justify-center">
            <img className="h-12 md:h-20" src={EatCurious} alt="SVG" />
          </div>

          {/* Hamburger Icon */}
          <div className="flex-shrink-0 text-2xl p-2 mr-2 rounded-md bg-pink">
            <FaBars />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
