import { useState } from 'react';
import Header from './components/headers/Header';
import ProductGrid from './components/ProductGrid';
import Carousel from './components/carousels/Carousel';
import Footer from './components/footers/Footer';
import Cart from './components/cart/Cart';
import UserProfile from './app/user-profile/UserProfile';
import ProductsView from './app/product-view/ProductsView';
// import ProductDetail from "./pages/ProductDetail";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Hero Carousel Items
  const heroItems = [
    <div
      key="hero1"
      className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center md:h-[70vh]"
      style={{ backgroundImage: "url('/MainBanner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          10% DE DESCUENTO
        </h1>
        <p className="font-inter mb-6 text-lg text-white md:text-xl lg:text-2xl">
          ¡Nuestra nueva línea de ropa ha llegado! ¡Descuentos en toda la
          tienda!
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="hover-lift focus-ring font-poppins rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
            MUJERES
          </button>
          <button className="hover-lift focus-ring font-poppins rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-gray-900 md:px-8 md:py-4">
            HOMBRES
          </button>
        </div>
      </div>
    </div>,
    <div
      key="hero2"
      className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center md:h-[70vh]"
      style={{ backgroundImage: "url('/MainBanner2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          PRESENTAMOS PUMP
        </h1>
        <p className="font-inter mb-6 text-lg text-white md:text-xl lg:text-2xl">
          Desarrollado durante dos años. Tecnología realzadora de glúteos que
          marca un nuevo estándar.
        </p>
        <button className="hover-lift focus-ring font-poppins rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          MUJERES
        </button>
      </div>
    </div>,
    <div
      key="hero3"
      className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center md:h-[70vh]"
      style={{ backgroundImage: "url('/MainBanner3.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          ESENCIALES DE VERANO
        </h1>
        <p className="font-inter mb-6 text-lg text-white md:text-xl lg:text-2xl">
          Esenciales básicos hechos para acompañarte en cada temporada.
        </p>
        <button className="hover-lift focus-ring font-poppins rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          COMPRA AHORA
        </button>
      </div>
    </div>,
  ];

  const promoSections = [
    {
      title: 'DROP EVERYTHING',
      subtitle: "What's new moves fast.",
      image: '/promo1.jpg',
      buttonText: 'SHOP NOW',
    },
    {
      title: 'SET THE STANDARD',
      subtitle: 'Elevated pairs designed to stay in rotation.',
      image: '/promo2.webp',
      buttonText: 'SHOP NOW',
    },
    {
      title: 'EVERYDAY STARTS HERE',
      subtitle: 'Core essentials made to move with you.',
      image: '/promo3.webp',
      buttonText: 'SHOP NOW',
    },
  ];

  const categoryItems = [
    <div
      key="cat1"
      className="relative flex h-[50vh] items-center justify-center bg-gradient-to-r from-pink-400 to-pink-600 text-center md:h-[60vh]"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-4">
        <h2 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          FOR HER
        </h2>
        <button className="hover-lift focus-ring font-poppins rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          SHOP WOMEN
        </button>
      </div>
    </div>,
    <div
      key="cat2"
      className="relative flex h-[50vh] items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-center md:h-[60vh]"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-4">
        <h2 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          FOR HIM
        </h2>
        <button className="hover-lift focus-ring font-poppins rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          SHOP MEN
        </button>
      </div>
    </div>,
    <div
      key="cat3"
      className="relative flex h-[50vh] items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-center md:h-[60vh]"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-4">
        <h2 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          ACCESSORIES
        </h2>
        <button className="hover-lift focus-ring font-poppins rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          SHOP ACCESSORIES
        </button>
      </div>
    </div>,
  ];

  if (currentPage === 'product-detail') {
    return (
      <div className="min-h-screen bg-gray-900">
        <Header setCurrentPage={setCurrentPage} />
        {/* <ProductDetail /> */}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header setCurrentPage={setCurrentPage} />

      <Carousel
        items={heroItems}
        autoPlay={true}
        autoPlayInterval={6000}
        showDots={true}
        showArrows={true}
        className="animate-fade-in"
      />

      <ProductGrid
        title="SHOP DROP 3"
        showTabs={true}
        showFilters={true}
        className="animate-fade-in"
      />

      <ProductGrid
        title="POPULAR RIGHT NOW"
        showTabs={true}
        showFilters={false}
        className="animate-fade-in"
      />

      {/* Promotional Sections */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {promoSections.map((section, index) => (
              <div
                key={index}
                className="group animate-scale-in hover-lift relative overflow-hidden rounded-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="relative flex h-96 items-center justify-center bg-cover bg-center text-center"
                  style={{ backgroundImage: `url(${section.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
                  <div className="relative z-10 p-8">
                    <h3 className="font-montserrat mb-4 text-2xl font-bold tracking-wider text-white md:text-3xl">
                      {section.title}
                    </h3>
                    <p className="font-inter mb-6 text-base text-white md:text-lg">
                      {section.subtitle}
                    </p>
                    <button className="hover-scale focus-ring font-poppins rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100">
                      {section.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductGrid
        title="SHOP SUMMER ESSENTIALS"
        showTabs={true}
        showFilters={true}
        className="animate-fade-in"
      />

      <section className="bg-gray-900 py-16">
        <Carousel
          items={categoryItems}
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={true}
          showArrows={true}
          className="animate-fade-in"
        />
      </section>

      <div className="fixed right-4 bottom-4 z-50">
        <button
          onClick={() =>
            setCurrentPage(currentPage === 'home' ? 'product-detail' : 'home')
          }
          className="hover-lift focus-ring font-poppins rounded-lg bg-white px-4 py-2 font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:bg-gray-100"
        >
          {currentPage === 'home' ? 'View Product Detail' : 'Back to Home'}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
