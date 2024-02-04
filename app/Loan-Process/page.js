/* eslint-disable react/no-unescaped-entities */
"use client";
import LoanRequirement from "@/components/LoanProcess/LoanRequirement";
import LoanStep from "@/components/LoanProcess/LoanStep";
import FAQ from "@/components/Minifaq";
import Image from "next/image";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Link from "next/link";

export default function LoanProcess() {
  const ParallaxSection = () => {
    useEffect(() => {
      const handleScroll = () => {
        const parallaxImage = document.querySelector(".parallax-image");
        const scrollPosition = window.pageYOffset;

        parallaxImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  };
  ParallaxSection();
  return (
    <>
      <div className="page-container w-full">
        <section className="imageNhero w-full relative overflow-hidden">
          <div className="overlay absolute bg-purple-800 opacity-80 w-full h-full z-10"></div>
          <div className="text-container flex flex-col justify-center items-center absolute z-10 w-full h-full">
            <div className="text-header text-lg sm:text-xl md:text-3xl text-white font-extrabold opacity-90">
              How Emergency Rental Assistance Works
            </div>
          </div>
          <div className="image-container /lg:h-2/6">
            <div className="parallax-image w-full lg:h-[70vh] overflow-hidden">
              <Image
                src="/assets/loanproc.jpg"
                width={1000}
                height={1000}
                alt="Successful application merry moment"
                className="w-full"
              />
            </div>
          </div>
        </section>
        {/* <section>
          <LoanStep />
        </section>
        <section>
          <LoanRequirement />
        </section>
        <section>
          <FAQ />
        </section> */}
        <section className="w-full py-12 ">
          <div className="container px-4 md:px-6">
            {/* <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                How It Works
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500  dark:text-gray-400">
                Follow these simple steps to apply for our rental assistance
                program.
              </p>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 py-8">
                  <FileIcon className="h-12 w-12 text-purple-800 dark:text-gray-50" />
                  <h3 className="text-lg font-semibold text-purple-800">
                    Documentation
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Gather all necessary documents for your application
                    including any issued identification.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 py-8">
                  <UploadIcon className="h-12 w-12 text-purple-800 dark:text-gray-50" />
                  <h3 className="text-lg font-semibold text-purple-800">
                    Application
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Fill out the online application form and upload your
                    documents.{" "}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 py-8">
                  <CheckIcon className="h-12 w-12  dark:text-gray-50 text-purple-800" />
                  <h3 className="text-lg font-semibold text-purple-800">
                    Approval
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Review your application and hit submit. We'll take it from
                    there!
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 text-center mt-24">
              <h2 className="text-3xl font-bold tracking-tighter">
                What You'll{" "}
                <span className="text-purple-800 underline">Need</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500  dark:text-gray-400">
                Here are the documents you'll need to gather before applying.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 py-6 text-purple-800">
                  <CreditCardIcon className="h-12 w-12  dark:text-gray-50" />
                  <h3 className="text-lg font-semibold">Identification</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    You must have a valid government-issued identification and
                    must have paid rent during the covid 19 pandemic
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 py-6 text-purple-800">
                  <HomeIcon className="h-12 w-12  dark:text-gray-50" />
                  <h3 className="text-lg font-semibold">Residence</h3>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    You must be a resident of the state where you are applying
                    for assistance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 text-purple-800 py-6">
                  <CurrencyIcon className="h-12 w-12  dark:text-gray-50" />
                  <h3 className="text-lg font-semibold">Accessibility</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You must be an active citizen of the states
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-16">
              <Button className="h-12 px-6  font-semibold text-white bg-purple-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-100">
                <Link href="/">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>
        <section>
          <FAQ />
        </section>
      </div>
    </>
  );
}
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FK5tVYtvnB4
 */

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
