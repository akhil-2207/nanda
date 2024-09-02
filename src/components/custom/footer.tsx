// import { LOGO } from "@/assets/images"; // Import your logo image
import { FaInstagram,FaLinkedin, FaYoutube } from "react-icons/fa6"; // icons imported


function Footer() {
    return (
        <footer className="bg-primary  pt-8 w-full mt-14">
            <div className="container font-normal mx-auto flex flex-col md:flex-col justify-beween w-full">
                
                {/* Top Section */}
                <div className=" flex flex-col md:flex-row lg:gap-64 md:gap-4 w-full ">
                    <div className="flex flex-col md:w-fit md:ml-2 lg:w-fit">
                        <p className="md:text-lg font-semibold mb-2">NANDA GROUP OF COMPANIES</p>
                        <p className="md:mb-0 mb-2">Farming Quality Meat Since 1963</p>
                        {/* <img src={LOGO} alt="Company Logo" className="h-15 w-20 mb-4" />  */}
                        <div className="flex space-x-7 md:mt-4 md:mb-0 mb-6">
                            {/* Facebook */}
                            {/* <a href="#empty" target="" rel="noopener noreferrer">
                                <FaFacebook className="text-gray-800 hover:text-black" size={30} />
                            </a> */}

                            {/* Instagram */}
                            <a href="https://www.instagram.com/nandusfoods?igsh=MW9wbXR2anFpOHBuMw==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-gray-800 hover:text-black" size={30} />
                            </a>

                            {/* Youtube */}
                            <a href="https://www.youtube.com/channel/UC_Tj39KH4H1kt9MjomOMY5g" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-gray-800 hover:text-black" size={30} />
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/company/nanda-group/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-gray-800 hover:text-black" size={30} />
                            </a>
                        </div>

                    </div>
                    <div className="flex flex-col md:w-fit mb-6 md:mb-0">
                        <p className="text-lg font-semibold mb-2">OUR ADDRESS</p>
                        <p className="text-base">
                            INDIA<br />
                            #377/61, 43rd Cross, 9th Main,<br />
                            5th Block, Jayanagar,<br />
                            Bengaluru, Karnataka 560041
                        </p>
                    </div>
                    <div className="flex flex-col md:w-fit md:mb-0">
                        <p className="text-lg font-semibold mb-2">CALL US</p>
                        <p className="text-base md:mb-3 mb-3">+91-80-2244-9628
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
                    <p className="text-sm text-gray-300 md:mb-0 mb-2 ">
                        Copyright 2024 Nanda Group
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
