import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nerands | E-commerce ",
  description: "Multivendor ecommerce marketplace in Zambia for online stores, product selling, and delivery services using runners and transporters for local and nationwide logistics.",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
