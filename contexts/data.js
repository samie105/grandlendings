"use client";
import React, { useState, useEffect, createContext } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  useEffect(() => {
    try {
      const storedFormData = JSON.parse(localStorage.getItem("formData")) || {};
      const storedFormStep = Number(localStorage.getItem("formStep")) || 1;

      setFormData(
        storedFormData || {
          firstName: "",
          lastName: "",
          loanAmount: 2000,
          loanDuration: 0,
          monthlyMortgage: "",
          interest: 0,
          totalAmountPaid: 0,
          ssn: "",
          dob: "",
          address: "",
          suiteApt: "",
          city: "",
          state: "",

          zipCode: "",
          residenceDuration: "",
          residenceStatus: "",
          monthlyPayment: "",
          eviction: "",
          emailAddress: "",
          primaryPhoneNumber: "",
          primaryPhoneType: "",
          secondaryPhoneNumber: "",
          secondaryPhoneType: "",
          routingNumber: "",
          accountNumber: "",
          confirmAccountNumber: "",
          accountType: "",
          accountDuration: "",
          directDeposit: "",
          didFile2022Taxes: "",
          adjustedGrossIncome: "",
          automaticPayments: "",
          primaryIncome: "",
          lastPayAmount: "",
          taxReturn: "",
          lastPayDate: "",
          nextPayDate: "",
          additionalIncome: "",
          loanPurpose: "",
          militaryStatus: "",
          bankruptcyHistory: "",
          paydayLoanHistory: "",
          EmergencyRentalAssistanceSource: "",
          EmergencyRentalAssistanceSourceOther: "",
          ipPin: "",
          affectedByCovid: "",
          annualIncomeReducedBy70: "",
          issuedEvictionNotice: "",
          oweUtilityBill: "",
          rentalAssistanceDuration: "",
          rentalAssistancePaymentMeans: "",
          receivedIPPIN: "",
          creditScore: "",
          licenseNumber: "",
          frontView: null,
          backView: null,
          rentalAddress: "",
          rentalcity: "",
          rentalzipCode: "",
          rentalstate: "",
          rentalmonthlyMortgage: "",
          rentalresidenceDuration: "",
          rentalresidenceStatus: "",
        }
      );

      setStep(storedFormStep || 1);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("formStep", step.toString());
  }, [formData, step]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData, step, setStep }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
