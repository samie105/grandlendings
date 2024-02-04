/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useContext, useState, useEffect } from "react";
import FormDataContext from "@/contexts/data";

const LoanProcessTwo = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const isFormDataValid = validateForm();
    setIsFormValid(isFormDataValid);
  }, [formData]);

  //   const handlePhoneChange = (e) => {
  //     const { name, value } = e.target;

  //     // Remove non-digit characters from the phone number
  //     const cleanedPhoneNumber = value.replace(/\D/g, "");

  //     // Format the phone number
  //     let formattedPhoneNumber = "";
  //     if (cleanedPhoneNumber.length > 0) {
  //       formattedPhoneNumber += "(" + cleanedPhoneNumber.substr(0, 3);
  //       if (cleanedPhoneNumber.length > 3) {
  //         formattedPhoneNumber += ") " + cleanedPhoneNumber.substr(3, 3);
  //         if (cleanedPhoneNumber.length > 6) {
  //           formattedPhoneNumber += " - " + cleanedPhoneNumber.substr(6, 4);
  //         }
  //       }
  //     }

  //     // Limit the number of characters to 16 (including formatting characters)
  //     const limitedPhoneNumber = formattedPhoneNumber.slice(0, 16);

  //     // Update the form data
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       [name]: limitedPhoneNumber,
  //     }));
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNext = async () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setIsLoading(true); // Set isLoading to true when checking existence

      setIsLoading(false);
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    // Check if it's the first step
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate email address
    if (!formData.affectedByCovid) {
      errors.affectedByCovid = "Please choose an option";
    }

    // Validate primary phone number
    if (!formData.annualIncomeReducedBy70) {
      errors.annualIncomeReducedBy70 = "Please choose an option";
    }
    if (!formData.issuedEvictionNotice) {
      errors.issuedEvictionNotice = "Please choose an option";
    }
    if (!formData.oweUtilityBill) {
      errors.oweUtilityBill = "Please choose an option";
    }
    if (!formData.rentalAssistanceDuration) {
      errors.rentalAssistanceDuration = "Please choose an option";
    }
    if (!formData.rentalAssistancePaymentMeans) {
      errors.rentalAssistancePaymentMeans = "Please choose an option";
    }

    return errors;
  };
  return (
    <>
      <div className="w-full p-6">
        <h2 className="capitalize font-bold text-2xl mb-8 text-center">
          Rental Assistance Estimation
        </h2>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="affectedByCovid"
        >
          Where you affected by Covid
        </label>
        <select
          className={`block w-full  ${
            errors.affectedByCovid ? "border-red-500" : "border-gray-300"
          } border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
          name="affectedByCovid"
          id="affectedByCovid"
          value={formData.affectedByCovid}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.affectedByCovid && (
          <p className="text-red-500">{errors.affectedByCovid}</p>
        )}
        <label
          className="block text-gray-700 font-semibold mb-2 mt-5"
          htmlFor="emailAddress"
        >
          Did your household annual income reduce by 70%?
        </label>
        <select
          className={`block w-full  ${
            errors.annualIncomeReducedBy70
              ? "border-red-500"
              : "border-gray-300"
          } border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
          name="annualIncomeReducedBy70"
          id="annualIncomeReducedBy70"
          value={formData.annualIncomeReducedBy70}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.annualIncomeReducedBy70 && (
          <p className="text-red-500">{errors.annualIncomeReducedBy70}</p>
        )}
        <label
          className="block text-gray-700 font-semibold mb-2 mt-5"
          htmlFor="issuedEvictionNotice"
        >
          Have you been issued an eviction notice
        </label>
        <select
          className={`block w-full  ${
            errors.issuedEvictionNotice ? "border-red-500" : "border-gray-300"
          } border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
          name="issuedEvictionNotice"
          id="issuedEvictionNotice"
          value={formData.issuedEvictionNotice}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.issuedEvictionNotice && (
          <p className="text-red-500">{errors.issuedEvictionNotice}</p>
        )}
        <label
          className="block text-gray-700 font-semibold mb-2 mt-5"
          htmlFor="oweUtilityBill"
        >
          Do you owe utility bill
        </label>
        <select
          className={`block w-full  ${
            errors.oweUtilityBill ? "border-red-500" : "border-gray-300"
          } border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
          name="oweUtilityBill"
          id="oweUtilityBill"
          value={formData.oweUtilityBill}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.oweUtilityBill && (
          <p className="text-red-500">{errors.oweUtilityBill}</p>
        )}
        <label
          className="block text-gray-700 font-semibold mb-2 mt-5"
          htmlFor="rentalAssistanceDuration"
        >
          How many months rental assistance do you require?( $2000/month )
        </label>
        <select
          className={`block w-full  ${
            errors.rentalAssistanceDuration
              ? "border-red-500"
              : "border-gray-300"
          } border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
          name="rentalAssistanceDuration"
          id="rentalAssistanceDuration"
          value={formData.rentalAssistanceDuration}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          <option value="1 month">1 month</option>
          <option value="2 Months">2 Months</option>
        </select>
        {errors.rentalAssistanceDuration && (
          <p className="text-red-500">{errors.rentalAssistanceDuration}</p>
        )}
        <label
          className="block text-gray-700 font-semibold mb-2 mt-5"
          htmlFor="rentalAssistancePaymentMeans"
        >
          how would you like your rental assistance to be paid?
        </label>
        <select
          className={`block w-full  ${
            errors.rentalAssistancePaymentMeans
              ? "border-red-500"
              : "border-gray-300"
          } border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
          name="rentalAssistancePaymentMeans"
          id="rentalAssistancePaymentMeans"
          value={formData.rentalAssistancePaymentMeans}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          <option value="Paper Check">Paper Check</option>
          <option value="Direct Deposit">Direct Deposit</option>
        </select>
        {errors.rentalAssistancePaymentMeans && (
          <p className="text-red-500">{errors.rentalAssistancePaymentMeans}</p>
        )}

        <div className="flex justify-between mt-7">
          {step > 1 && (
            <button
              className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg focus:outline-none"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          <button
            className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg focus:outline-none disabled:bg-gray-300 disabled:text-gray-800 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={!isFormValid || isLoading} // Disable the button when loading
          >
            {isLoading ? "Validating..." : "Next"}{" "}
            {/* Display "Loading..." when isLoading is true */}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanProcessTwo;
