import React from "react";

function Breadcrumb({ product }) {
  return (
    <div className="bg-gray-800 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="font-inter text-sm">
          <a
            href="/"
            className="text-gray-400 transition-colors duration-200 hover:text-white"
          >
            Home
          </a>
          <span className="mx-2 text-gray-500">/</span>
          <a
            href="/women"
            className="text-gray-400 transition-colors duration-200 hover:text-white"
          >
            Women
          </a>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-white">{product.name}</span>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;
