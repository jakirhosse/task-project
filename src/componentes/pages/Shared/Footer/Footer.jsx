import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Column */}
          <div className="w-full lg:w-auto mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">FurniFlex</h2>
            <ul>
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
            <h2 className="text-xl font-bold mb-2">Explore EEVE</h2>
            <ul>
              <li>Unlock my Robot Power</li>
              <li>Startlight</li>
              <li>Robot Platform</li>
              <li>EEVE Roadmap</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-auto">
            <h2 className="text-xl font-bold mb-2">Community & Support</h2>
            <ul>
              <li>Willow X Community</li>
              <li>Developer & Hacker Access</li>
              <li>Special Cases</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex flex-wrap items-center justify-between border-t border-gray-700 pt-4 mt-4">
          <div className="flex items-center">
            <a href="#" className="mr-2">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" className="mr-2">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
          <div>
            <p>EEVE © 2024. All rights reserved.</p>
          </div>
          <div>
            <p>United States (English)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
