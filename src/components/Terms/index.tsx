"use client"
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import blogData from "../BlogGrid/blogData";
import Image from "next/image";
import useApi from "@/hooks/useApi";

const TermsOfUse = () => {
  const [page, setPage] = useState<any>(null);
  const { data, isLoading, error, get } = useApi('/admin');

  useEffect(() => {
    const fetchData = async () => {
      const res = await get("/admin/legalpages/terms");

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
        title={"Terms Of Conditions"}
        pages={["Terms"]}
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

  

<div>
    {/* <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
      {page?.data?.title}
    </h2> */}

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

export default TermsOfUse;