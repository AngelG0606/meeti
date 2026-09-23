
import Hero from "@/src/shared/components/ui/Hero";
import { Metadata } from "next";


export const metadata : Metadata = {
  title : 'Meeti'
}

export default async function Home() {

  
  return (
    <>
       <Hero />
    </>
  );
}
