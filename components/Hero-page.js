/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useContext, useState } from "react";
import FormDataContext from "@/contexts/data";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroPage() {
  const { formData, setFormData } = useContext(FormDataContext);
  const [formError, setFormError] = useState(false);
  const router = useRouter();

  const handleLoanAmountChange = (event) => {
    const amount = parseFloat(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      loanAmount: event.target.value,
    }));
    calculateLoanDetails(amount, formData.loanDuration);
  };

  const handleLoanDurationChange = (event) => {
    const duration = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      loanDuration: duration,
    }));
    calculateLoanDetails(formData.loanAmount, duration);
  };

  const calculateLoanDetails = (amount, duration) => {
    const baseInterestRate = 5; // Base interest rate in percentage
    const interestIncreaseRate = 2.5; // Interest increase rate in percentage
    const monthsInYear = 12; // Number of months in a year

    let interestRate = baseInterestRate;
    if (duration > 6) {
      const additionalMonths = Math.floor((duration - 6) / 6); // Subtract 6 to align with base duration
      interestRate += additionalMonths * interestIncreaseRate;
    }

    const monthlyInterestRate = interestRate / monthsInYear / 100;
    const totalAmountPaid = amount * (1 + monthlyInterestRate * duration);
    const monthlyPayment = totalAmountPaid / duration;

    setFormData((prevFormData) => ({
      ...prevFormData,
      monthlyPayment: monthlyPayment.toFixed(2),
      interest: (monthlyInterestRate * 100).toFixed(2),
      totalAmountPaid: totalAmountPaid.toFixed(2),
    }));
  };

  const formatAmount = (value) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(value);
  };

  const handleLoanApplication = () => {
    if (formData.loanAmount || formData.loanAmount != "") {
      // Submit the loan application
      setFormError(false);

      // Redirect to "/loan" page

      router.push("/loan");
    } else {
      setFormError(true);
    }
  };
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 relative /bg-purple-800 z-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold /tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Secure Your Rental Assistance Now
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 text-sm md:text-base py-2 md:px-4">
                Experience hassle-free support for your rental needs. Low-cost
                assistance, straightforward application, and swift approval
                process!
              </p>
            </div>
            <div className="space-x-4">
              <Dialog>
                <DialogTrigger>
                  <div className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-purple-800 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600">
                    Apply Now
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <section className="loaninput-section  w-full flex-grow h-full justify-center flex">
                    <section>
                      <div className="loan-header capitalize text-center">
                        <p className="lg:text-xl md:text-lg sm:text-lg pb-4 font-bold lg:hidden"></p>
                      </div>
                      <div className="flex flex-col ">
                        <div className="itemm">
                          <div className="loan-header capitalize text-center">
                            <p className="text-sm font-bold py-1  opacity-60">
                              Choose an amount:
                            </p>
                          </div>
                          <div className="input-field flex justify-center pb-3">
                            <select
                              value={formData.loanAmount}
                              onChange={handleLoanAmountChange}
                              className="w-64 px-4 py-2 border text-xs h-11 overflow-scroll lg:text-sm md:text-sm sm:text-sm font-semibold border-gray-300 rounded-lg"
                            >
                              <option value="">Select an amount</option>
                              <option value="2000">{formatAmount(2000)}</option>
                              <option value="4000">{formatAmount(4000)}</option>
                            </select>
                          </div>

                          {/* <div className="loan-header capitalize text-center">
                            <p className="text-sm font-bold py-1 opacity-60">
                              Loan Duration:
                            </p>
                          </div>

                          <div className="input-field flex justify-center pb-3">
                            <select
                              value={formData.loanDuration}
                              onChange={handleLoanDurationChange}
                              className="w-64 px-4 py-2 text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border border-gray-300 rounded-lg"
                            >
                              <option value="Choose Duration">
                                Choose Duration
                              </option>
                              {[6, 12, 18, 24, 30, 36, 42, 48, 54, 60].map(
                                (months) => (
                                  <option key={months} value={months}>
                                    {months} months
                                  </option>
                                )
                              )}
                            </select>
                          </div> */}
                        </div>
                        {/* <div className="itemm px-5 pb-2">
                          <div className="loan-header capitalize text-center">
                            <p className="text-sm font-bold py-1 lg:py-3 md:py-3 sm:py-3 opacity-60">
                              Monthly Payment:
                            </p>
                          </div>

                          <div className="input-field flex justify-center pb-2">
                            <input
                              type="text"
                              value={formatAmount(formData.monthlyPayment)}
                              readOnly
                              placeholder="Estimated monthly payment"
                              className="w-64 px-4 py-2 border text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border-gray-300 rounded-lg"
                            />
                          </div>

                          <div className="loan-header capitalize text-center">
                            <p className="text-sm font-bold py-1  opacity-60">
                              Interest rate (per 6 months):
                            </p>
                          </div>

                          <div className="input-field flex justify-center pb-2">
                            <input
                              type="text"
                              value={` ${formData.interest}%`}
                              readOnly
                              placeholder="Estimated interest"
                              className="w-64 px-4 py-2 border text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border-gray-300 rounded-lg"
                            />
                          </div>
                        </div> */}
                      </div>
                      {/* <div className="loan-header capitalize text-center">
                        <p className="text-sm font-bold py-1  opacity-60">
                          Total:
                        </p>
                      </div>

                      <div className="input-field flex justify-center pb-2">
                        <input
                          type="text"
                          value={formatAmount(formData.totalAmountPaid)}
                          readOnly
                          placeholder="Total amount paid"
                          className="w-64 px-4 py-2 border text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border-gray-300 rounded-lg"
                        />
                      </div> */}

                      <div className="last-laugh mt-3 text-center">
                        <div className="button flex flex-col justify-center">
                          <button
                            className="rounded-lg bg-purple-800 w-2/4 mx-auto text-white font-bold px-5 py-3 text-sm"
                            onClick={handleLoanApplication}
                          >
                            Apply
                          </button>
                          {formError && (
                            <p className="text-red-500 text-center mt-4">
                              Please fill in all the required fields.
                            </p>
                          )}
                        </div>
                      </div>
                    </section>
                  </section>
                </DialogContent>
              </Dialog>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                href="/about-us"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
