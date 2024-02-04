"use client";
/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xHYKDHalseQ
 */
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Link from "next/link";
import FormDataContext from "@/contexts/data";
import { useContext } from "react";

export default function Component() {
  const { formData, setStep } = useContext(FormDataContext);
  const loanby20 = (formData.loanAmount / 100) * 80;
  const payback = (formData.totalAmountPaid / 100) * 80;
  const handleClick = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("formStep");
    setStep(1);
  };
  return (
    <div
      key="1"
      className="flex flex-col min-h-screen bg-purple-800 dark:bg-purple-900"
    >
      <main className="flex-1 flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-white">
            Your Application Was Successful!
          </h1>
          <p className="mx-auto max-w-[700px] text-white/80 text-sm">
            {/* However, your information didn't meet the standard for the requested
            amount. We've approved you for a loan of{" "}
            <span className="font-bold">${loanby20}</span>. Our Customer Care
            Consultant will reach you soon. Here are the details: */}
            We've successfully received your application, and our team is now in
            the process of reviewing it. Please note that the approval procedure
            usually takes between 3 to 9 weeks. Throughout this period, if any
            further details are required, we'll reach out to you.
          </p>
        </div>
        <Card className="w-full max-w-md mt-8 py-4 bg-transparent bg-opacity-20 /backdrop-blur-md rounded-md border-0">
          {/* <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold flex items-center text-white">
                <DollarSignIcon className="h-5 w-5 mr-2 text-white" />
                Original Requested Amount:
              </h2>
              <span className="text-sm text-white">${formData.loanAmount}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold flex items-center text-white">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-white" />
                Approved Loan Amount:
              </h2>
              <span className="text-sm text-white">${loanby20}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold flex items-center text-white">
                <CalculatorIcon className="h-5 w-5 mr-2 text-white" />
                Total Repayment Amount:
              </h2>
              <span className="text-sm text-white">${payback}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold flex items-center text-white">
                <CalendarIcon className="h-5 w-5 mr-2 text-white" />
                Repayment Period:
              </h2>
              <span className="text-sm text-white">
                {formData.loanDuration} Months
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold flex items-center text-white">
                <ClockIcon className="h-5 w-5 mr-2 text-white" />
                Monthly Repayment:
              </h2>
              <span className="text-sm text-white">
                ${formData.monthlyPayment}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold flex items-center text-white">
                <PercentIcon className="h-5 w-5 mr-2 text-white" />
                Interest Rate:
              </h2>
              <span className="text-sm text-white">
                {formData.interest}% per month
              </span>
            </div>
          </CardContent> */}
          <CardFooter>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md font-bold bg-white w-full px-8 text-sm text-purple-800 shadow transition-colors hover:bg-gray-200/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-800 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              <HomeIcon className="h-5 w-5 mr-2 text-purple-800 font-bold" />
              Back to Home
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
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

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
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

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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

function PercentIcon(props) {
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
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}
