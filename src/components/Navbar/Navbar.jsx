import { useEffect, useState } from "react";
import gambar from "../../assets/gambar.png";
import "remixicon/fonts/remixicon.css";
import ModeToggle from "../ModeToggle";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setShow(!show);
  const menuAktive = show ? "right-0" : "-right-full";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
      if (window.scrollY > 5) setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌓 Kelas warna teks menyesuaikan mode & scroll
  const getTextColorClass = () => {
    if (scroll) {
      return "text-black dark:text-white";
    } else {
      return "text-white dark:text-white";
    }
  };

  return (
    <div
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scroll
          ? "py-4 bg-background/80 backdrop-blur shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="navbarbox flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="logo">
            <img
              src={gambar}
              alt="Logo"
              className="w-20 object-contain drop-shadow-lg"
            />
          </a>

          {/* Menu */}
          <ul
            className={`flex lg:gap-8 md:static md:flex-row md:shadow-none md:bg-transparent
              md:w-auto md:h-full md:translate-y-0 gap-6 fixed ${menuAktive}
              top-0 w-full h-screen pt-24 md:pt-0 px-6 flex-col rounded-none shadow-lg bg-background font-bold
              md:flex md:items-center items-start text-left transition-all duration-300 ${getTextColorClass()}`}
          >
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="https://dragonsoof.com/" className="block">
                Beranda
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="/" className="block">
                Gems
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="/" className="block">
                Rank
              </a>
            </li>
            <li className="px-3 py-1">
              <a
                href="https://discord.gg/Rcmw5RN5m6"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                <i className="ri-discord-fill text-white mr-2"></i> Join Discord
              </a>
            </li>
            <li className="md:px-5 py-1">
              <ModeToggle />
            </li>
          </ul>

          {/* Icon menu mobile */}
          <i
            className={`text-2xl md:hidden block cursor-pointer z-[60] transition-all duration-200 ${
              show ? "ri-close-line" : "ri-menu-3-line"
            } ${getTextColorClass()}`}
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
