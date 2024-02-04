import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComment,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import LoanSection from "@/components/LoanSection";
import Whyloan from "@/components/Whyloan";
import Minifaq from "@/components/Minifaq";
import WhyQuick from "@/components/WhyQuick";
import Disclosure from "@/components/Disclosure";
import { FormDataProvider } from "@/contexts/data";
import HeroPage from "@/components/Hero-page";
import Testimonial from "@/components/Testimonials";
import TestSteps from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0">
          <div className="absolute /z-10 w-full h-full bg-purple-800 opacity-80"></div>
          <Image
            width={1000}
            height={1000}
            alt=""
            className="w-full h-full object-cover"
            src="/assets/happyloan.jpg"
          />
        </div>
        <HeroPage />
        <TestSteps />
      </div>
      <Whyloan />
      <Minifaq />
      <WhyQuick />
      <Disclosure />
    </>
  );
}
