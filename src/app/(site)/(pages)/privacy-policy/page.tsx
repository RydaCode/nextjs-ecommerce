import React from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Details Page for NextCommerce Template",
  // other metadata
};

const PrivacyPolicyPage = () => {
    return (
        <main>
            <PrivacyPolicy />
        </main>
    );
};

export default PrivacyPolicyPage;
