import { NAV_LINKS } from "@/constants";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <a href="/">
        <img src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </a>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </a>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button>Sign In</Button>
      </div>

      <img
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
