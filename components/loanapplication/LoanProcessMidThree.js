"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import FormDataContext from "@/contexts/data";

const LoanProcessMidThree = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const {
      landlordName,
      landlordPhoneNumber,
      occupantsNumber,
      monthlyRentAmount,
      totalRentsOwed,
    } = formData;
    const newErrors = {};

    if (!landlordName) {
      newErrors.landlordName = "Landlord's name is required.";
    }

    if (!landlordPhoneNumber) {
      newErrors.landlordPhoneNumber = "Landlord's phone number is required.";
    }

    if (!occupantsNumber) {
      newErrors.occupantsNumber = "Number of occupants is required.";
    }

    if (!monthlyRentAmount) {
      newErrors.monthlyRentAmount = "Monthly rent amount is required.";
    }

    if (!totalRentsOwed) {
      newErrors.totalRentsOwed = "Total sum of rents owed is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateForm();
    if (isValid) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="w-full p-6">
        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="landlordName"
        >
          Landlord's Name
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="landlordName"
          id="landlordName"
          value={formData.landlordName}
          onChange={handleChange}
          placeholder="Enter landlord's name"
          required
        />
        {errors.landlordName && (
          <p className="text-red-500 text-sm mt-1">{errors.landlordName}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="landlordPhoneNumber"
        >
          Landlord's Phone Number
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="tel"
          name="landlordPhoneNumber"
          id="landlordPhoneNumber"
          value={formData.landlordPhoneNumber}
          onChange={handleChange}
          placeholder="Enter landlord's phone number"
          required
        />
        {errors.landlordPhoneNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.landlordPhoneNumber}
          </p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="occupantsNumber"
        >
          Number of Occupants
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="number"
          name="occupantsNumber"
          id="occupantsNumber"
          value={formData.occupantsNumber}
          onChange={handleChange}
          placeholder="Enter number of occupants"
          required
        />
        {errors.occupantsNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.occupantsNumber}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="monthlyRentAmount"
        >
          Monthly Rent Amount
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="number"
          name="monthlyRentAmount"
          id="monthlyRentAmount"
          value={formData.monthlyRentAmount}
          onChange={handleChange}
          placeholder="Enter monthly rent amount"
          required
        />
        {errors.monthlyRentAmount && (
          <p className="text-red-500 text-sm mt-1">
            {errors.monthlyRentAmount}
          </p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="totalRentsOwed"
        >
          Total Sum of Rents Owed
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="number"
          name="totalRentsOwed"
          id="totalRentsOwed"
          value={formData.totalRentsOwed}
          onChange={handleChange}
          placeholder="Enter total sum of rents owed"
          required
        />
        {errors.totalRentsOwed && (
          <p className="text-red-500 text-sm mt-1">{errors.totalRentsOwed}</p>
        )}

        <div className="flex justify-between mt-7">
          <button
            className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 font-semibold text-sm"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold text-sm"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanProcessMidThree;
