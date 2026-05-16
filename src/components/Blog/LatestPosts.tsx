"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import useApi from "@/hooks/useApi";

const LatestPosts = () => {

  const { data, isLoading, error, get } = useApi(`/stores/toprated?cat_name=general&limit=10&open_close=true`);
    useEffect(() => {
        get();
    }, []);

  const storesList = data?.stores ?? [];

  return (
    <div className="shadow-1 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">General Products Stores</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          {/* <!-- post item --> */}

          {storesList?.map((item) => (
            <div className="flex items-center gap-4" key={item.store_id}>
              <Link
                href="/blogs/blog-details-with-sidebar"
                className="max-w-[90px] max-h-[80px] w-full rounded-[10px] overflow-hidden"
              >
                <Image
                  // src={item.store_profileimage}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.store_profileimage}`}
                  alt="blog"
                  className="rounded-[10px] w-full"
                  width={110}
                  height={80}
                />
              </Link>

              <div>
                <h3 className="text-dark leading-[22px] ease-out duration-200 mb-1.5 hover:text-blue">
                  <Link href="/blogs/blog-details-with-sidebar">{item.store_name}</Link>
                </h3>

                <span className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-custom-xs ease-out duration-200 hover:text-blue"
                  >
                    {item.store_category}
                  </a>

                  {/* <!-- divider --> */}
                  <span className="block w-px h-4 bg-gray-4"></span>

                  <a
                    href="#"
                    className="text-custom-xs ease-out duration-200 hover:text-blue"
                  >
                    {item.review_count} Reviews
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
