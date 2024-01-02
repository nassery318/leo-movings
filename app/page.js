import Image from 'next/image'
import logo from "../public/Leo_Movings_Logo.png";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div class="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
        <div class="max-md:order-1 max-md:text-center">
          <h3 class="md:text-4xl text-xl md:leading-10 font-bold text-[#80390A] mb-4">
            Leo is here to make your moving hassle free!
          </h3>
          <p class="mt-4 text-base text-[#666] leading-relaxed">
            We are dedicated to making the lives of our customers easier by offering a
            seamless and stress-free moving experience. With a team of highly
            trained professionals, we handle every aspect of the moving
            process, from packing and loading to transportation and unpacking,
            ensuring a smooth transition for our clients.{" "}
          </p>
          <div class="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
            <a
              href="javascript:void(0);"
              class="px-6 py-3 text-base font-semibold text-white bg-[#F9B32F] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#F9B32F] focus:outline-none focus:ring-opacity-50"
            >
              Get a Free Quote
            </a>
            <a
              href="javascript:void(0);"
              class="px-6 py-3 text-base font-semibold text-[#80390A] border border-[#80390A] rounded-full hover:text-white hover:bg-[#80390A] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#80390A] focus:outline-none focus:ring-opacity-50"
            >
              Call us at: 437-937-4578
            </a>
          </div>
        </div>
        <div class="md:h-[350px]">
          <Image
            src={logo}
            class="w-full h-full object-contain rounded-lg shadow-xl"
            alt="Dining Experience"
          />
        </div>
      </div>
    </main>
  );
}
