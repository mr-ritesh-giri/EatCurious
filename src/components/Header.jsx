import { NavItems } from "../Constants/constants";
import EatCurious from "../assets/logo/eatcurious.svg";

const Header = () => {
  return (
    <header className="max-container relative z-50">
      <nav>
        <ul className="flex justify-between py-4">
          {NavItems.map((navItem, index) => (
            <li key={index}>
              <a className="text-2xl" href={navItem.link}>
                {navItem.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <img height={120} width={100} src={EatCurious} alt="SVG" />
    </header>
  );
};

export default Header;
