import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-bold text-white mb-2">MyWebsite</h2>
          <p className="text-sm">
            A simple React + Tailwind project with responsive design.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-3 text-sm text-gray-400">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
