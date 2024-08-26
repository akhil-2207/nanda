// import { LOGO } from "@/assets/images"; // Import your logo image
function Footer() {
    return (
        <footer className="bg-primary  pt-8 w-full mt-14">
            <div className="container font-normal mx-auto flex flex-col md:flex-col justify-beween w-full">
                {/* Top Section */}
                <div className=" flex flex-col md:flex-row md:gap-64  w-full ">
                    <div className="flex flex-col md:w-fit md:ml-2">
                        <p className="md:text-lg font-semibold mb-2">Nanda Group Of Companies</p>
                        <p className="md:mb-0 mb-6">Farming Quality Meat Since 1963</p>
                        {/* <img src={LOGO} alt="Company Logo" className="h-15 w-20 mb-4" />  */}
                    </div>
                    <div className="flex flex-col md:w-fit mb-6 md:mb-0">
                        <p className="text-lg font-semibold mb-2">OUR ADDRESS</p>
                        <p className="text-base">
                            INDIA<br />
                            #377/61, 2nd Floor, 43rd Cross, 9th Main,<br />
                            5th Block, Jayanagar,<br />
                            Bengaluru, Karnataka 560041
                        </p>
                    </div>
                    <div className="flex flex-col md:w-fit mb-6 md:mb-0">
                        <p className="text-lg font-semibold mb-2">CALL US</p>
                        <p className="text-base md:mb-6 mb-3">+91-80-2244-9628
                           <br/> <a href="mailto:info@nandagroup.in" className="hover:underline">info@nandagroup.in</a>
                        </p>
                        <div className="flex space-x-4 ">
                            <a href="#who-we-are" className="hover:text-secondary transition-colors duration-300">About Us</a>
                            <a href="mailto:info@nandagroup.in" className="hover:text-secondary transition-colors duration-300">Contact Us</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row md:justify-between w-full items-center md:items-center mt-8 border-t py-4">
                    <p className="text-sm text-gray-300">
                        Copyright 2020 Nanda Group
                    </p>
                    <div className="flex flex-col md:w-1/9 items-center md:items-start">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-secondary text-primary py-2 px-4 rounded shadow hover:bg-primary hover:text-white transition-all duration-300">
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
