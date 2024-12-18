import { LOGO } from "@/assets/images";
import { useState , useEffect } from "react";
function Header() 
{
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
    const toggleMenu = () => 
    {
      setIsOpen(prev => !prev);
    };

    useEffect(() => 
    {
      if (isOpen) {
        // Disable scrolling when menu is open
        document.body.style.overflow = "hidden";
      } else 
      {
        // Re-enable scrolling when menu is closed
        document.body.style.overflow = "";
      }
    
      // Cleanup function to ensure overflow is reset on unmount
      return () => 
      {
        document.body.style.overflow = "";
      };
    }, [isOpen]);

    
  return (
    <>
      <div className="md:block hidden">
        <div className="  flex flex-row justify-between  items-center h-16 mx-6 bg-white ">
          <div className="md:block hidden">
            <img src={LOGO} className="h-14 z-50" alt="" />
          </div>
          <nav className="flex flex-row gap-6">
            <a className="hover:text-primary font-medium text-md transition duration-200 z-50" href="#Business">Business</a>
            <a className="hover:text-primary font-medium text-md transition duration-200 z-50" href="#who-we-are" >Who We Are </a>
            <a className="hover:text-primary font-medium text-md transition duration-200 z-50" href="#The-Team">The Team</a>
            <a className="hover:text-primary font-medium text-md transition duration-200 z-50" href="#carousel">Media</a>
            <a className="hover:text-primary font-medium text-md transition duration-200 z-50" href="mailto:info@nandagroup.in">Contact</a>
          </nav>
        </div>
      </div>

      <div className="relative">
        <div className="md:hidden h-16 bg-white container flex items-center justify-between px-4 ">
          <img src={LOGO} alt="Logo" className="h-10" />
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none z-50 "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-primary shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-40`}
        >
          <div className="md:hidden h-16 bg-primary-foreground container flex items-center justify-between px-4">
            <img src={LOGO} alt="Logo" className="h-10" />
          </div>
          <div className="flex flex-col mt-20 space-y-6 px-6">
            <a onClick={() => setIsOpen(false)}
              className="hover:text-secondary font-medium text-md transition duration-200 z-50"
              href="#Business"
            >
              Business
            </a>
            <a onClick={() => setIsOpen(false)}
              className="hover:text-secondary font-medium text-md transition duration-200 z-50"
              href="#who-we-are"
            >
              Who We Are
            </a>
            <a onClick={() => setIsOpen(false)}
              className="hover:text-secondary font-medium text-md transition duration-200 z-50"
              href="#The-Team"
            >
              The Team
            </a>
            <a onClick={() => setIsOpen(false)}
              className="hover:text-secondary font-medium text-md transition duration-200 z-50"
              href="#carousel"
            >
              Media
            </a>
            <a onClick={() => setIsOpen(false)}
              className="hover:text-secondary font-medium text-md transition duration-200 z-50"
              href="mailto:info@nandagroup.in"
            >
              Contact
            </a>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={toggleMenu}
          />
        )}
      </div>
    </>

  );
}

export default Header;
