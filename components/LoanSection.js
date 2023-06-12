"use client";
/* eslint-disable react/no-unescaped-entities */
"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FormDataContext from "@/contexts/data";

export default function LoanSection() {
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
    if (formData.loanAmount && formData.loanDuration) {
      // Submit the loan application
      setFormError(false);
      console.log("Loan application submitted!");

      // Redirect to "/loan" page

      router.push("/loan");
    } else {
      setFormError(true);
    }
  };

  return (
    <div className="mycontainer flex flex-col-reverse lg:flex-row justify-between w-full">
      <section className="hero-section w-full h-full">
        <div className="relative w-full">
          <div className="overlay absolute w-full h-full bg-black opacity-80"></div>

          <div className="image-section w-full hidden lg:block h-full">
            <Image
              src="/assets/happyloan.jpg"
              width={1000}
              height={1000}
              alt="Successful loan application merry moment"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="testimonial-section py-5 p px-4 mx-3 lg:px-1">
          <fieldset className="border p-4 rounded-lg">
            <legend className="text-xl font-bold mb-4">Testimonial</legend>
            <div className="quote bg-gray-800 px-4 py-6 text-white rounded-lg">
              <p className="font-bold text-sm">
                "Great experience. Funds came right away and I appreciate the
                different repayment options. Would definitely use again."
              </p>

              <div className="flex author-name justify-between px-2 py-2">
                <div className="name fonts text-sm">- Gary Gallagher</div>
                <div className="lg-sec">
                  <Image
                    src="/assets/ygj.svg"
                    width={60}
                    height={60}
                    alt="Successful loan application merry moment"
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </section>

      <section className="loaninput-section py-3 md:pl-5 lg:pl-1 w-full flex-grow h-full pt-5 justify-center flex">
        <section>
          <div className="loan-header capitalize text-center">
            <p className="lg:text-xl md:text-lg sm:text-lg pb-6 font-bold">
              Let's Customize Your Loan
            </p>
          </div>
          <div className="flex flex-col md:flex-row sm:flex-row lg:flex-row">
            <div className="itemm lg:pb-8">
              <div className="loan-header capitalize text-center">
                <p className="text-sm font-bold py-1 lg:py-3 md:py-3 sm:py-3 opacity-60">
                  I'd like to borrow:
                </p>
              </div>
              <div className="input-field flex justify-center pb-5">
                <select
                  value={formData.loanAmount}
                  onChange={handleLoanAmountChange}
                  className="w-64 px-4 py-2 border text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border-gray-300 rounded-lg"
                >
                  {Array.from({ length: 50 }, (_, i) => (i + 1) * 100).map(
                    (amount) => (
                      <option key={amount} value={amount}>
                        {formatAmount(amount)}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="loan-header capitalize text-center">
                <p className="text-sm font-bold py-1 lg:py-3 md:py-3 sm:py-3 opacity-60">
                  Loan Duration:
                </p>
              </div>

              <div className="input-field flex justify-center pb-5">
                <select
                  value={formData.loanDuration}
                  onChange={handleLoanDurationChange}
                  className="w-64 px-4 py-2 text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border border-gray-300 rounded-lg"
                >
                  <option value="Choose Duration">Choose Duration</option>
                  {[6, 12, 18, 24, 30, 36, 42, 48, 54, 60].map((months) => (
                    <option key={months} value={months}>
                      {months} months
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="itemm px-5 lg:pb-8">
              <div className="loan-header capitalize text-center">
                <p className="text-sm font-bold py-1 lg:py-3 md:py-3 sm:py-3 opacity-60">
                  Monthly Payment:
                </p>
              </div>

              <div className="input-field flex justify-center pb-5">
                <input
                  type="text"
                  value={formatAmount(formData.monthlyPayment)}
                  readOnly
                  placeholder="Estimated monthly payment"
                  className="w-64 px-4 py-2 border text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border-gray-300 rounded-lg"
                />
              </div>

              <div className="loan-header capitalize text-center">
                <p className="text-sm font-bold py-1 lg:py-3 md:py-3 sm:py-3 opacity-60">
                  Interest rate (per 6 months):
                </p>
              </div>

              <div className="input-field flex justify-center pb-5">
                <input
                  type="text"
                  value={` ${formData.interest}%`}
                  readOnly
                  placeholder="Estimated interest"
                  className="w-64 px-4 py-2 border text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="loan-header capitalize text-center">
            <p className="text-sm font-bold py-1 lg:py-3 md:py-3 sm:py-3 opacity-60">
              Total:
            </p>
          </div>

          <div className="input-field flex justify-center pb-5">
            <input
              type="text"
              value={formatAmount(formData.totalAmountPaid)}
              readOnly
              placeholder="Total amount paid"
              className="w-64 px-4 py-2 border text-xs lg:text-sm md:text-sm sm:text-sm font-semibold border-gray-300 rounded-lg"
            />
          </div>

          <div className="last-laugh mt-8 text-center">
            <div className="button flex flex-col justify-center">
              <button
                className="rounded-lg bg-black w-2/4 mx-auto text-white font-bold px-5 py-3 text-sm"
                onClick={handleLoanApplication}
              >
                Apply for this Loan
              </button>
              {formError && (
                <p className="text-red-500 text-center mt-4">
                  Please fill in all the required fields.
                </p>
              )}
            </div>
            <div className="info flex justify-center">
              <p className="font-bold py-4">Get it as Soon as Now</p>
            </div>
            <div className="info flex justify-center">
              <p className="text-sm opacity-80 font bold underline">
                Checking your rate won't affect your credit score
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
