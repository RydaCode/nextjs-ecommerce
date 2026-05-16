"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useApi from "@/hooks/useApi";

const LatestProducts = () => {

  const { data, isLoading, error, get, del } = useApi(
    `/stores/foods?limit=10`
  );

  useEffect(() => {
      get();
  }, []);

  const stores = data?.stores

  return (
    <div className="shadow-1 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">Food & Liquor Stores</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          {/* <!-- product item --> */}
          {stores?.map((item) => (
            <div className="flex items-center gap-6" key={item.store_id}>
              <div className="relative flex items-center justify-center rounded-[10px] bg-gray-3 max-w-[90px] w-full h-22.5 overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.store_profileimage}`}
                  alt="product"
                  fill
                  sizes="90px"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-medium text-dark mb-1 ease-out duration-200 hover:text-blue">
                  <Link href="/shop-details"> {item.store_name} </Link>
                </h3>
                <p className="text-custom-sm">{item.store_province} | {item.review_count} Reviews</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
