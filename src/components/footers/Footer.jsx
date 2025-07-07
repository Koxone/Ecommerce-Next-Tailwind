const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-700 bg-gray-800">
      {/* Newsletter Section */}
      <div className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-montserrat mb-4 text-3xl font-bold text-white">
              STAY CONNECTED
            </h2>
            <p className="font-inter mx-auto mb-8 max-w-2xl text-gray-400">
              Be the first to know about new drops, exclusive offers, and
              behind-the-scenes content from Alphalete Athletics.
            </p>
            <div className="mx-auto max-w-md">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="font-inter flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="font-poppins rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
              <p className="font-inter mt-3 text-xs text-gray-500">
                By signing up you agree to receive recurring automated marketing
                messages and shopping cart reminders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-montserrat text-xl font-bold text-white">
                ALPHALETE
              </h3>
              <p className="font-inter text-sm text-gray-400">
                Premium athletic wear designed for those who demand excellence
                in every aspect of their fitness journey.
              </p>
              {/* Social Media */}
              <div className="flex space-x-4">
                {["twitter", "github", "instagram", "youtube"].map(
                  (platform, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-gray-400 transition-colors duration-200 hover:bg-gray-600 hover:text-white"
                    >
                      <span className="text-sm">
                        {platform[0].toUpperCase()}
                      </span>
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Shop Links */}
            <div className="space-y-4">
              <h4 className="font-montserrat text-lg font-semibold text-white">
                Shop
              </h4>
              <ul className="space-y-2">
                {[
                  "Women's",
                  "Men's",
                  "Accessories",
                  "All Products",
                  "Sale",
                  "New Arrivals",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="font-inter text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="font-montserrat text-lg font-semibold text-white">
                Support
              </h4>
              <ul className="space-y-2">
                {[
                  "Contact Us",
                  "Size Guide",
                  "Shipping Info",
                  "Returns & Exchanges",
                  "FAQ",
                  "Track Your Order",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="font-inter text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-montserrat text-lg font-semibold text-white">
                Company
              </h4>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Alphaland",
                  "Careers",
                  "Press",
                  "Sustainability",
                  "Affiliate Program",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="font-inter text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright */}
            <div className="font-inter text-sm text-gray-400">
              © {currentYear} Alphalete Athletics. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="font-inter text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-3">
              <span className="font-inter text-sm text-gray-400">
                We accept:
              </span>
              <div className="flex space-x-2">
                {["VISA", "MC", "PP", "🍎"].map((method, idx) => (
                  <div
                    key={idx}
                    className={`flex h-5 w-8 items-center justify-center rounded text-xs font-bold text-white ${
                      method === "VISA"
                        ? "bg-blue-600"
                        : method === "MC"
                          ? "bg-red-600"
                          : method === "PP"
                            ? "bg-blue-500"
                            : "bg-black"
                    }`}
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
