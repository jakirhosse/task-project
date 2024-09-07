import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="px-5 md:px-[100px]">
        <div className="flex flex-wrap justify-between">
          {/* Left Column */}
          <div className="w-full lg:w-auto mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-2 text-center md:text-left">
              FurniFlex
            </h2>
            <ul className="text-center md:text-left">
              <li>About Us</li>
              <li>Master Plan</li>
              <li>Jobs</li>
              <li>Invest</li>
              <li>Pressroom</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Center Column */}
          <div className="w-full lg:w-auto mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-2 text-center md:text-left">
              Explore EEVE
            </h2>
            <ul className="text-center md:text-left">
              <li>Unlock my Robot Power</li>
              <li>Startlight</li>
              <li>Robot Platform</li>
              <li>EEVE Roadmap</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-auto">
            <h2 className="text-xl  font-bold mb-2 text-center md:text-left">
              Community & Support
            </h2>
            <ul className="text-center md:text-left">
              <li>Willow X Community</li>
              <li>Developer & Hacker Access</li>
              <li>Special Cases</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center border-t border-gray-700 pt-4 mt-4">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <a href="#" className="mr-2">
                <FaFacebook></FaFacebook>
              </a>
              <a href="#" className="mr-2">
                <FaTwitter></FaTwitter>
              </a>
              <a href="#">
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <p>EEVE © 2024. All rights reserved.</p>
          </div>
          <div className="md:col-span-1">
            <p>United States (English)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
