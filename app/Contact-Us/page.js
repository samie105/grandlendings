import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
/* eslint-disable react/no-unescaped-entities */
export default function Contacts() {
  return (
    <>
      <section className="imageNhero w-full relative overflow-hidden">
        <div className="overlay absolute bg-purple-800 opacity-80 w-full h-full"></div>
        <div className="text-container flex flex-col justify-center items-center absolute z-10 w-full h-full">
          <div className="text-header text-lg sm:text-xl md:text-3xl lg:text-5xl text-white font-extrabold opacity-90">
            Contact Us
          </div>
          <div className="text-content px-10 py-5 text-xs md:py-7 md:px-14 sm:py-4 sm:px-10 sm:text-sm text-white opacity-90 font-semibold lg:text-xl lg:px-32 lg:py-10 text-center">
            Reach out to us anytime, We're working overtime to attend to your
            basic support. Here are our contact informations below
          </div>
        </div>
        <div className="image-container">
          <div className="parallax-image lg:h-[70vh]">
            <Image
              src="/assets/loanproc.jpg"
              width={500}
              height={500}
              alt="Successful loan application merry moment"
              className="w-full "
            />
          </div>
        </div>
      </section>
      <div className="Contact-section">
        <ContactForm />
      </div>
    </>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/G0RhYIlGTTw
 */

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
