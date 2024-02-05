/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9lNYwJqvcYr
 */
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#111] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
        <div className="flex flex-col space-y-4">
          <div className="LogoSide font-bold lg:pl-3 ">
            <Image
              src="/assets/GLlogo.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <h3 className="text-lg font-semibold">Contact Details</h3>
          <div className="flex items-center space-x-2">
            <MailIcon className="h-5 w-5 text-gray-300" />
            <span>support@grandlendings.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-gray-300" />
            <span>+1 (970) 276 0083</span>
          </div>
          <div className="flex items-center space-x-2 text-sm w-full">
            <LocateIcon className="h-5 w-5 text-gray-300" />
            <span>Grandlendings, PO Box 630, Los Angeles, CA 90074-9399</span>
          </div>
        </div>
        {/* <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Trust Badges</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className=" p-2 flex items-center justify-center">
              <Image
                alt=""
                src="/assets/award-2.png"
                className="w-10 h-10"
                width={1000}
                height={1000}
              />
            </div>
            <div className=" p-2 flex items-center justify-center">
              <Image
                alt=""
                src="/assets/award.png"
                className="w-10 h-10"
                width={1000}
                height={1000}
              />{" "}
            </div>
            <div className=" flex items-center justify-center">
              <Image
                alt=""
                src="/assets/ygj.svg"
                className="w-14 h-14"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div> */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="bg-white bg-opacity-20 rounded-lg p-4 text-sm">
            Our mission is to offer affordable and accessible rental assistance
            to everyone. We believe in promoting housing inclusion and
            empowerment
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex items-center space-x-2">
            <ArrowRightIcon className="h-5 w-5 text-gray-300" />
            <Link className="hover:underline" href="#">
              Apply Now
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowRightIcon className="h-5 w-5 text-gray-300" />
            <Link className="hover:underline" href="/about-us">
              About us
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowRightIcon className="h-5 w-5 text-gray-300" />
            <Link className="hover:underline" href="/Loan-Process">
              How it works
            </Link>
          </div>
          {/* <div className="flex items-center space-x-2">
            <CalculatorIcon className="h-5 w-5 text-gray-300" />
            <Link className="hover:underline" href="#">
              Loan Calculator
            </Link>
          </div> */}
          <div className="flex items-center space-x-2">
            <FileQuestionIcon className="h-5 w-5 text-gray-300" />
            <Link className="hover:underline" href="/FAQ">
              FAQ
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-4 text-gray-300 mt-11 text-sm">
        <p>All rights reserved © 2024</p>
      </div>
    </div>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CalculatorIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}

function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function FileQuestionIcon(props) {
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
      <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
