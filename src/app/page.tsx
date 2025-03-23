import Image from "next/image";
import Navbar from "@/components/navbar";
import Herosection from "@/components/herosection";
import Plan from "@/components/plan";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Exercise from "@/components/exercise";

export default function Home() {
  return (
    <>
      <Herosection />
      <Services />
      <Plan />
      <Exercise />
      <Contact />
    </>
  );
}
