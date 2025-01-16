'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Pastikan impor ini dari 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Banner Slider */}
      <div className="w-full relative h-[400px]">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000, // Interval 5 detik
            disableOnInteraction: false, // Agar autoplay tetap berjalan meskipun pengguna berinteraksi
          }}
          modules={[Navigation, Pagination]} // Tambahkan modul di sini
         
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/banner1.jpeg"
                alt="Product Advertisement"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <h2 className="text-3xl font-bold">Boost Your System with Our!</h2>
                <p className="mt-4 text-md">
                  Discover our latest products designed to streamline IT operations and deliver exceptional results.
                </p>
                <Link
                  href="/products"
                  className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/banner2.jpg"
                alt="Second Advertisement"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/banner3.jpg"
                alt="Third Advertisement"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <br />

      {/* Hero Section */}
      <div className="hero bg-gray min-h-screen border border-gray-300 p-4 text-black">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-4xl mx-auto">
          <img
            src="https://intelligence.co.id/images/foto/intelligence.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hero Image"
          />
          <div>
            <h1 className="text-4xl font-bold">Transform Your IT Operations with Our Cutting-Edge System</h1>
            <p className="py-6">
              Boost Efficiency, Simplify Workflows, and Elevate Support Quality.
              Revolutionize how your team manages IT support with a powerful system designed to streamline operations, enhance collaboration, and deliver unparalleled results.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {/* Card 1 */}
        <div className="card w-80 bg-white shadow-lg rounded-lg border border-gray-200">
          <img src="/images/card1.png" alt="Product 1" className="rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold flex items-center">
              <span className="mr-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m0-4h.01M12 12v8m0 4a10 10 0 100-20 10 10 0 000 20z"
                  />
                </svg>
              </span>
              Control Management System
            </h2>
            <p className="text-gray-600 mt-2">Integrasi mudah dengan berbagai alat dan platform. CMS yang dirancang untuk meningkatkan produktivitas tim Anda dalam mengelola konten.</p>
            <button className="btn btn-primary mt-4 w-full">View Details</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-80 bg-white shadow-lg rounded-lg border border-gray-200">
          <img src="/images/card2.png" alt="Product 2" className="rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold flex items-center">
              <span className="mr-2 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l-3 3m0 0l3 3m-3-3h12.75M9 21h6M9 3h6"
                  />
                </svg>
              </span>
              Hardware Solution
            </h2>
            <p className="text-gray-600 mt-2">Layanan cepat dan andal untuk semua kebutuhan perangkat keras Anda. Solusi profesional yang memastikan perangkat Anda tetap optimal dan siap mendukung produktivitas.</p>
            <button className="btn btn-primary mt-4 w-full">View Details</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-80 bg-white shadow-lg rounded-lg border border-gray-200">
          <img src="/images/card3.png" alt="Product 3" className="rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold flex items-center">
              <span className="mr-2 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.5-4.5m-9 9l4.5 4.5m0-9l4.5 4.5m-9-9L4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Website & Mobile Development
            </h2>
            <p className="text-gray-600 mt-2">Pengembangan modern untuk website dan aplikasi mobile. Dibangun untuk performa tinggi, responsif, dan pengalaman pengguna yang maksimal.</p>
            <button className="btn btn-primary mt-4 w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
