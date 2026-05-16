"use client"
import React, { useEffect, useState } from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";
import useApi from "@/hooks/useApi";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const { data, isLoading, error, get } = useApi("/products");

  useEffect(() => {
    const fetchData = async () => {
      const res = await get("/products?page=1&limit=2");

      const productsData = res?.data || [];

      setProducts(productsData?.products || []);
      setPagination(productsData?.pagination || null);
    };

    fetchData();
  }, []);

  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              
              {products?.map((item) => (
                <div key={item.product_id} className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                  <div className="flex items-center gap-14">
                    <div>
                      <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-6">
                        <a href="#"> {item.product_name} </a>
                      </h2>

                      <div>
                        <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                          {item.product_description}
                        </p>
                        <span className="flex items-center gap-3">
                          <span className="font-medium text-heading-5 text-red">
                            K{item.final_price}
                          </span>
                          {/* <span className="font-medium text-2xl text-dark-4 line-through">
                            K999
                          </span> */}
                        </span>
                      </div>
                    </div>

                    <div
                      className="w-[200px] h-[200px] rounded-lg relative overflow-hidden"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.product_images[0]}`}
                        alt={item.product_name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
