/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FAQ from "@/components/Minifaq";
import Image from "next/image";
export default function AboutUs() {
  return (
    <>
      <div className="page-container w-full">
        <section className="imageNhero w-full relative overflow-hidden">
          <div className="overlay absolute bg-purple-900 opacity-80 w-full h-full"></div>
          <div className="text-container flex flex-col justify-center items-center absolute z-10 w-full h-full">
            <div className="text-header text-lg sm:text-xl md:text-3xl lg:text-5xl text-white font-extrabold opacity-90">
              About Us
            </div>
            <div className="text-content px-10 py-5 text-xs md:py-7 md:px-14 sm:py-4 sm:px-10 sm:text-sm text-white opacity-90 font-semibold lg:text-xl lg:px-28 lg:py-10 text-center">
              We are committed to providing rental assistance to those in need.
            </div>
          </div>
          <div className="image-container lg:h-[50vh] overflow-hidden">
            <Image
              src="/assets/aboutus.jpg"
              width={500}
              height={500}
              alt="Successful loan application merry moment"
              className="w-full full"
            />
          </div>
        </section>
        <section className="w-full py-10">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            {/* <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Us
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are committed to providing rental assistance to those in
                need.
              </p>
            </div> */}
            <div className="grid w-full grid-cols-2 items-stretch justify-center gap-6 md:grid-cols-4 lg:gap-12">
              <div className="mx-auto flex w-full items-center justify-center flex-col">
                <HomeIcon className="h-10 w-10 mb-4 text-purple-800" />
                <h3 className="text-lg font-bold text-purple-800">
                  Rental Assistance
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We provide financial aid to individuals struggling to pay
                  rent.
                </p>
              </div>
              <div className="mx-auto flex w-full items-center justify-center flex-col">
                <ShieldCheckIcon className="h-10 w-10 mb-4  text-purple-800" />
                <h3 className="text-lg font-bold  text-purple-800">
                  Importance
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our assistance ensures that individuals maintain safe and
                  stable housing.
                </p>
              </div>
              <div className="mx-auto flex w-full items-center justify-center flex-col">
                <HeartIcon className="h-10 w-10 mb-4 text-purple-800" />
                <h3 className="text-lg font-bold  text-purple-800">Impact</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We've helped thousands of individuals avoid eviction and
                  homelessness.
                </p>
              </div>
              <div className="mx-auto flex w-full items-center justify-center flex-col">
                <BookOpenIcon className="h-10 w-10 mb-4 text-purple-800" />
                <h3 className="text-lg font-bold  text-purple-800">
                  Resources
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We provide additional resources to help individuals navigate
                  their financial challenges.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-purple-800 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
        <Disclosure />
        <FAQ />
      </div>
    </>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bsovfEFwvZX
 */
import Link from "next/link";
import Disclosure from "@/components/Disclosure";

function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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

function ShieldCheckIcon(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
