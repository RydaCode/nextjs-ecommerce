"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
// import "swiper/css/pagination";
// import "swiper/css";

import Image from "next/image";
import useApi from "@/hooks/useApi";
import { useEffect, useState } from "react";

const HeroCarousal = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const { data, isLoading, error, get } = useApi("/products");

  useEffect(() => {
    const fetchData = async () => {
      const res = await get("/products?page=1&limit=4");

      const productsData = res?.data || [];

      setProducts(productsData?.products || []);
      setPagination(productsData?.pagination || null);
    };

    fetchData();
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {products?.map((item) => (
        <SwiperSlide key={item.product_id}>
        {" "}
        <div className="flex items-center justify-between px-3 py-1 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>
            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">{item.product_name}</a>
            </h1>

            <h1 className="font-semibold text-red text-xl sm:text-3xl mb-3">
              K{item.final_price}
            </h1>

            <p>
              {item.product_description}
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Shop Now
            </a>
          </div>

          <div
            className="w-[351px] h-[370px] rounded-lg relative overflow-hidden"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.product_images[0]}`}
              alt={item.product_name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;
