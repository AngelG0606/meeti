
import HEader from "@/src/shared/components/ui/HEader";
import Hero from "@/src/shared/components/ui/Hero";
import { Metadata } from "next";


export const metadata : Metadata = {
  title : 'Meeti'
}

export default function Home() {
  return (
    <>

       <Hero />
    </>
  );
}
