import React from "react";
import Terms from "@/components/Terms";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Details Page for NextCommerce Template",
  // other metadata
};

const TermsOfUsePage = () => {
    return (
        <main>
            <Terms />
        </main>
    );
};

export default TermsOfUsePage;
