// /src/app/page.js

import Carousel from '@/components/carousels/Carousel';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import ProductGrid from '@/components/ProductGrid';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Component */}
      <Header />

      {/* Carousel Component */}
      <Carousel
        // items={heroItems}  // Asegúrate de pasar los items correctamente si los tienes
        autoPlay={true}
        autoPlayInterval={6000}
        showDots={true}
        showArrows={true}
        className="animate-fade-in"
      />

      {/* ProductGrid - SHOP DROP 3 */}
      <ProductGrid
        title="SHOP DROP 3"
        showTabs={true}
        showFilters={true}
        className="animate-fade-in"
      />

      {/* ProductGrid - POPULAR RIGHT NOW */}
      <ProductGrid
        title="POPULAR RIGHT NOW"
        showTabs={true}
        showFilters={false}
        className="animate-fade-in"
      />

      {/* Promotional Sections */}
      {/* <section className="bg-gray-900 py-16">
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
    </section> */}

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
