import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/img/karakter/logo.jpeg";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 gap-1">
            <img className="h-9 w-9 mt-1 rounded-full" src={logo} alt="logo" />
            <span className="text-xl tracking-tight mt-1">Kuroshitsuji</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink className="text-xl hover:text-cs-light-red hover:border-b-2 hover:border-cs-light-red" to={item.path}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="https://www.linkedin.com/in/alizaaaja" className="py-2 px-3 border rounded-md hover:text-black hover:bg-white">
              Linkedin
            </a>
          </div>
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navLinks.map((item) => (
                <li key={item.id} className="py-3">
                  <NavLink className="hover:text-cs-light-red hover:border-b-2 hover:border-cs-light-red" to={item.path}>
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 pt-3">
              <a href="https://www.linkedin.com/in/alizaaaja" className="py-2 px-5 border rounded-md hover:text-black hover:bg-white">
                Linkedin
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
