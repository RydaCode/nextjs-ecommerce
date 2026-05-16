import React from "react";
import AboutUs from "@/components/AboutUs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Details Page for NextCommerce Template",
  // other metadata
};

const AboutUsPage = () => {
    return (
        <main>
            <AboutUs />
        </main>
    );
};

export default AboutUsPage;
