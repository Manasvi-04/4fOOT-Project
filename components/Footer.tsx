import { FaTrademark } from "react-icons/fa";
import { CgCopyright } from "react-icons/cg";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
    
        <div className="footer flex justify-between items-center py-6">
        <div>
        <p className="hidden mdl:flex items-center gap-.5 text-sm text-black">
          <CgCopyright /> 4 FOOT_2023 All rights reserved
        </p>
        </div>
        <div  className="hidden lgl:flex items-center gap-0">
          <span className="font-medium text-black hover:text-red-500 cursor-pointer">Contact|</span>
          <p className="font-medium text-black hover:text-red-500 cursor-pointer">Services|</p>
          <p className="font-medium text-black hover:text-red-500 cursor-pointer"> Care</p>
        </div>
          <div className="social flex items-center gap-4 mt-4">
            <BsFacebook className="text-lg text-black hover:text-blue-600 cursor-pointer" />
            <BsInstagram className="text-lg text-black hover:text-pink-600 cursor-pointer" />
            <BsYoutube className="text-lg text-black hover:text-red-800 cursor-pointer" />
            <AiOutlineLinkedin className="text-lg text-black hover:text-blue-800 cursor-pointer" />
            <a href = "mailto: manasvisrivastava21@gmail.com">
            <MdEmail className="text-lg text-black hover:text-red-700 cursor-pointer" />
            </a>
          </div>
        
      </div>
   
    )
}
export default Footer;