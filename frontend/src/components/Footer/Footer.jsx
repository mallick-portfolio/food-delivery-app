import React from "react";
import logo from "../../assets/logo.png";
import { BiPaperPlane } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-[#fde4e4] py-12">
      <div className="footer-container">
        <div className="">
          <img className="w-12" src={logo} alt="" />
          <h4 className="text-sm font-bold">Tasty Treat</h4>
          <p className="text-sm mt-4 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur accusamus
          </p>
        </div>
        <div>
          <h3 className="footer-headline">Delivery Time</h3>
          <ul>
            <li className="my-3">
              <h6 className="footer-col-subtitle">Sunday - Thursday</h6>
              <div className="text-primary">10:00am - 11:00pm</div>
            </li>
            <li className="my-3">
              <h6 className="footer-col-subtitle">Friday - Saturday</h6>
              <div className="text-primary">Off day</div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-headline">Contact</h3>
          <ul>
            <li className="footer-col-para">
              Location: ZindaBazar, Sylhet-3100, Bangladesh
            </li>
            <li className="footer-col-para">Phone: 01712345678</li>
            <li className="footer-col-para">Email: example@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-headline">Newsletter</h3>
          <p className="text-primary">Subscribe our newsletter</p>
          <div className="pt-4 relative">
            <input className="footer-input" type="text" />
            <div className="input-plane">
              <BiPaperPlane className="text-xl cursor-pointer text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
