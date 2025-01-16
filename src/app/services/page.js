import Image from "next/image";
import Link from "next/link";
import { products, services } from "../../../constant/data";




const ServicesPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={`/ourServices/${service.link}`}>
              <div className="border rounded-lg shadow-md p-4 hover:bg-blue-300 hover:shadow-lg transition-all duration-300">
                <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-center mt-12 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link key={index} href={product.link}>
              <div className="border rounded-lg shadow-md p-4 hover:bg-blue-300 hover:shadow-lg transition-all duration-300">
                <h2 className="text-2xl font-semibold mt-4">{product.title}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
