"use client"
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import blogData from "../BlogGrid/blogData";
import Image from "next/image";
import useApi from "@/hooks/useApi";

const PrivacyPolicy = () => {

  const [page, setPage] = useState<any>(null);
  const { data, isLoading, error, get } = useApi('/admin');

  useEffect(() => {
    const fetchData = async () => {
      const res = await get("/admin/legalpages/privacy-policy");

      const termsData = res;

      setPage(termsData);
    };

    fetchData();
  }, []);

  const formattedDate = page?.data?.updated_at
  ? new Date(page.data.updated_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  : null;

  return (
    <>
      <Breadcrumb
        title={"Privacy Policy"}
        pages={["Privacy policy"]}
      />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-12.5">
            {/* <!-- blog details --> */}
            <div className="lg:max-w-[750px] w-full">
              {/* <div className="rounded-[10px] overflow-hidden mb-7.5">
                <Image
                  className="rounded-[10px]"
                  src="/images/blog/blog-details-01.jpg"
                  alt="details"
                  width={750}
                  height={477}
                />
              </div> */}











            <div>
                <span className="flex items-center gap-3 mb-4">
                    <span>Last Updated: {formattedDate}</span>

                    <span className="block w-px h-4 bg-gray-4"></span>

                    <span>Version: {page?.data?.version}</span>
                </span>

                







                {page?.data?.content?.sections?.map((section: any, index: number) => (
  <div key={index} className="mb-8">

    {/* Heading */}
    {section.heading && (
      <h3 className="font-medium text-dark text-lg xl:text-[26px] mb-4">
        {section.heading}
      </h3>
    )}

    {/* TEXT TYPE */}
    {section.type === "text" &&
      section.content?.map((text: string, i: number) => (
        <p key={i} className="mb-6">
          {text}
        </p>
      ))}

    {/* LIST TYPE */}
    {section.type === "list" && (
      <ul className="list-disc pl-6 space-y-2 mb-6">
        {section.content?.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}

  </div>
))}







                <div className="flex flex-wrap items-center justify-between gap-10 mt-10">
                    <div className="flex items-center gap-3">
                    <a
                        href="#"
                        className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#1877F2] ease-in duration-200 hover:bg-opacity-95"
                    >
                        <svg
                        width="9"
                        height="18"
                        viewBox="0 0 9 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z"
                            fill="white"
                        ></path>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>

            {/* <!-- blog sidebar --> */}
            <div className="lg:max-w-[370px] w-full">
              {/* <!-- search box --> */}
              {/* <SearchForm /> */}

              {/* <!-- Recent Posts box --> */}
              <LatestPosts />

              {/* <!-- Latest Products box --> */}
              <LatestProducts />

              {/* <!-- Popular Category box --> */}
              {/* <div className="shadow-1 bg-white rounded-xl mt-7.5">
                <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
                  <h2 className="font-medium text-lg text-dark">
                    Popular Category
                  </h2>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col gap-3">
                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Desktop
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        12
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Laptop
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        25
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Monitor
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        23
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      UPS
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        09
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Phone
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        54
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Tablet
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        21
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Watch
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        17
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Mouse
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        08
                      </span>
                    </button>
                  </div>
                </div>
              </div> */}

              {/* <!-- Tags box --> */}
              {/* <div className="shadow-1 bg-white rounded-xl mt-7.5">
                <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
                  <h2 className="font-medium text-lg text-dark">Tags</h2>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-3.5">
                    <a
                      className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      Desktop
                    </a>

                    <a
                      className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      Macbook
                    </a>

                    <a
                      className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      PC
                    </a>

                    <a
                      className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      Watch
                    </a>

                    <a
                      className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      USB Cable
                    </a>

                    <a
                      className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      Mouse
                    </a>

                    <a
                      className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      Windows PC
                    </a>

                    <a
                      className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      Monitor
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;