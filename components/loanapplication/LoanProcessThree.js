/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useState } from "react";
import FormDataContext from "@/contexts/data";

const LoanProcessThree = ({ step, setStep }) => {
  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const { formData, setFormData } = useContext(FormDataContext);
  const [formErrors, setFormErrors] = useState({});
  const [sameAddress, setSameAddress] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const handleCheckboxChange = () => {
    setSameAddress(!sameAddress);
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.address) {
      errors.address = "Address is required";
    }

    if (!formData.city) {
      errors.city = "City is required";
    }

    if (!formData.state) {
      errors.state = "State is required";
    }

    if (!formData.zipCode) {
      errors.zipCode = "Zip Code is required";
    }

    if (!formData.residenceDuration) {
      errors.residenceDuration = "Residence duration is required";
    }

    if (!formData.residenceStatus) {
      errors.residenceStatus = "Residence status is required";
    }

    if (!formData.monthlyMortgage) {
      errors.monthlyMortgage = "Monthly mortgage is required";
    }

    // if (!formData.eviction) {
    //   errors.eviction = "Eviction information is required";
    // }
    if (!sameAddress) {
      if (!formData.rentalAddress) {
        errors.rentalAddress = "This field is required";
      }
      if (!formData.rentalcity) {
        errors.rentalcity = "This field is required";
      }
      if (!formData.rentalzipCode) {
        errors.rentalzipCode = "This field is required";
      }
      if (!formData.rentalstate) {
        errors.rentalstate = "This field is required";
      }
      if (!formData.rentalmonthlyMortgage) {
        errors.rentalmonthlyMortgage = "This field is required";
      }
      if (!formData.rentalresidenceDuration) {
        errors.rentalresidenceDuration = "This field is required";
      }
      if (!formData.rentalresidenceStatus) {
        errors.rentalresidenceStatus = "This field is required";
      }
    }
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    const isValid = validateForm();
    if (isValid) {
      setStep(step + 1);
    }
  };

  return (
    <div className="w-full p-6">
      <h2 className="capitalize font-bold text-2xl mb-8 text-center">
        Your Address
      </h2>

      {/* Section for Current Residential Address */}
      <section>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="address"
        >
          What's your address? (Please use a physical address, not a PO Box)
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        {formErrors.address && (
          <p className="text-red-500">{formErrors.address}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="suiteApt"
        >
          Suite / Apt # (Optional)
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="suiteApt"
          id="suiteApt"
          value={formData.suiteApt}
          onChange={handleChange}
          placeholder="Suite / Apt #"
          required
        />

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="city"
        >
          City
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        {formErrors.city && <p className="text-red-500">{formErrors.city}</p>}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="state"
        >
          State
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="state"
          id="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select a state</option>
          {usStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        {formErrors.state && <p className="text-red-500">{formErrors.state}</p>}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="zipCode"
        >
          Zip Code
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="zipCode"
          id="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        {formErrors.zipCode && (
          <p className="text-red-500">{formErrors.zipCode}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="residenceDuration"
        >
          How long have you been at your residence?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="residenceDuration"
          id="residenceDuration"
          value={formData.residenceDuration}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="6 months or less">6 months or less</option>
          <option value="7-12 months">7-12 months</option>
          <option value="1-2 years">1-2 years</option>
          <option value="3+ years">3+ years</option>
        </select>
        {formErrors.residenceDuration && (
          <p className="text-red-500">{formErrors.residenceDuration}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="residenceStatus"
        >
          Do you rent or own your home?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="residenceStatus"
          id="residenceStatus"
          value={formData.residenceStatus}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Rent">Rent</option>
          <option value="Own">Own</option>
          <option value="Parents">Parents</option>
        </select>
        {formErrors.residenceStatus && (
          <p className="text-red-500">{formErrors.residenceStatus}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="monthlyPayment"
        >
          Monthly mortgage / Rent amount
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="number"
          name="monthlyMortgage"
          id="monthlyMortgage"
          value={formData.monthlyMortgage}
          onChange={handleChange}
          placeholder="Monthly mortgage / Rent amount"
          required
        />
        {formErrors.monthlyMortgage && (
          <p className="text-red-500">{formErrors.monthlyMortgage}</p>
        )}
      </section>
      <h2 className="capitalize font-bold text-2xl mt-4 mb-8 text-center">
        Rental assistance address
      </h2>
      <div className="my-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500"
            checked={sameAddress}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2 text-gray-700">Same as Current Address</span>
        </label>
      </div>
      <section className={sameAddress ? "hidden" : ""}>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="rentalAddress"
        >
          What's the address? (Please use a physical address, not a PO Box)
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="rentalAddress"
          id="rentalAddress"
          value={formData.rentalAddress}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        {formErrors.rentalAddress && (
          <p className="text-red-500">{formErrors.address}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="rentalsuiteApt"
        >
          Suite / Apt # (Optional)
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="rentalsuiteApt"
          id="rentalsuiteApt"
          value={formData.rentalsuiteApt}
          onChange={handleChange}
          placeholder="Suite / Apt #"
        />

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="city"
        >
          City
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="rentalcity"
          id="rentalcity"
          value={formData.rentalcity}
          onChange={handleChange}
          placeholder="City"
          required
        />
        {formErrors.rentalcity && (
          <p className="text-red-500">{formErrors.rentalcity}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="rentalstate"
        >
          State
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="rentalstate"
          id="rentalstate"
          value={formData.rentalstate}
          onChange={handleChange}
          required
        >
          <option value="">Select a state</option>
          {usStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        {formErrors.rentalstate && (
          <p className="text-red-500">{formErrors.rentalstate}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="zipCode"
        >
          Zip Code
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="rentalzipCode"
          id="rentalzipCode"
          value={formData.rentalzipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        {formErrors.rentalzipCode && (
          <p className="text-red-500">{formErrors.rentalzipCode}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="rentalresidenceDuration"
        >
          How long have you been at your residence?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="rentalresidenceDuration"
          id="rentalresidenceDuration"
          value={formData.rentalresidenceDuration}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="6 months or less">6 months or less</option>
          <option value="7-12 months">7-12 months</option>
          <option value="1-2 years">1-2 years</option>
          <option value="3+ years">3+ years</option>
        </select>
        {formErrors.rentalresidenceDuration && (
          <p className="text-red-500">{formErrors.rentalresidenceDuration}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="residenceStatus"
        >
          Do you rent or own your home?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="rentalresidenceStatus"
          id="rentalresidenceStatus"
          value={formData.rentalresidenceStatus}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Rent">Rent</option>
          <option value="Own">Own</option>
          <option value="Parents">Parents</option>
        </select>
        {formErrors.rentalresidenceStatus && (
          <p className="text-red-500">{formErrors.rentalresidenceStatus}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="monthlyPayment"
        >
          Monthly mortgage / Rent amount
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="number"
          name="rentalmonthlyMortgage"
          id="rentalmonthlyMortgage"
          value={formData.rentalmonthlyMortgage}
          onChange={handleChange}
          placeholder="Monthly mortgage / Rent amount"
          required
        />
        {formErrors.rentalmonthlyMortgage && (
          <p className="text-red-500">{formErrors.rentalmonthlyMortgage}</p>
        )}
      </section>

      {/* Checkbox to indicate if addresses are the same */}

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
          className="px-4 py-2 bg-blue-500 text-white font-semibold text-sm rounded-lg focus:outline-none"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LoanProcessThree;
