"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./MainFAQ.css";

const MainFAQ = () => {
  const [expanded, setExpanded] = useState([]);

  const faqData = [
    {
      question: "1. What is the average approval time for rental assistance?",
      answer:
        "The approval process typically takes between 4 to 9 weeks from the time of application.",
    },
    {
      question: "2. How can I apply for rental assistance?",
      answer:
        "To apply for rental assistance, visit our online application portal on our website and follow the provided instructions.",
    },
    {
      question:
        "3. What documents are required during the application process?",
      answer:
        "One essential document required is a government-issued ID for identification purposes. Ensure you have a valid and up-to-date ID when applying alongside other government issued means of identification.",
    },
    {
      question: "4. Can I check the status of my application?",
      answer:
        "Yes, you can check the status of your application by contacting our support team for assistance: support@emergencyrentals.us.",
    },
    {
      question: "5. Is there a minimum income requirement for eligibility?",
      answer:
        "Income requirements may vary, and eligibility is assessed based on various factors.",
    },
    {
      question: "6. What happens after my application is approved?",
      answer:
        "Once approved, you will receive detailed instructions on the next steps, including how funds will be disbursed and any additional requirements.",
    },
    {
      question:
        "7. Are there specific eligibility criteria for rental assistance?",
      answer:
        "Yes, you require a valid email, a vaild phone contact and a government issued means of identification. Also you must have paid rent during the covid 19 pandemic",
    },
    {
      question: "8. Can I apply for rental assistance if I'm facing eviction?",
      answer:
        "Yes, our program may provide assistance to individuals facing eviction. Ensure to submit your application promptly and provide all necessary documentation.",
    },
    {
      question: "9. What if my application is denied?",
      answer:
        "If your application is denied, you will receive a notification explaining the reason. You may have the option to appeal or reapply, depending on the circumstances. Contact our support team for guidance.",
    },
    {
      question:
        "10. Is there a limit to the number of times I can apply for assistance?",
      answer: "You can only apply once a year",
    },
    {
      question:
        "11. Can I use the rental assistance for overdue rent payments?",
      answer:
        "Yes, the rental assistance funds can be used to cover overdue rent payments. Ensure to provide details of the specific amounts and time periods in your application.",
    },
    {
      question: "12. How are funds disbursed after approval?",
      answer:
        "Funds are disbursed through the means of payment you provided during application.",
    },
    {
      question: "13. Is the application process confidential?",
      answer:
        "Yes, we take privacy seriously. Your application information is treated confidentially, and access is restricted to authorized personnel only.",
    },
    {
      question:
        "14. Can I apply for rental assistance if I'm not a U.S. citizen?",
      answer:
        "Eligibility may extend to non-U.S. citizens based on specific criteria. Review our eligibility guidelines or contact our support team for more information.",
    },
    {
      question: "15. How can I contact customer support for assistance?",
      answer:
        "For any inquiries or assistance, please reach out to our customer support team through support@mergencyrentalassistance.com. We are here to help!",
    },
  ];

  const toggleExpanded = (index) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  return (
    <div className="main-faq lg:px-28 px-10 my-6">
      {faqData.map((item, index) => (
        <div
          className={`faq-item shadow-md shadow-black/10 ${
            expanded.includes(index) ? "expanded" : ""
          }`}
          key={index}
        >
          <div
            className="faq-question text-gray-700 text-sm font-medium"
            onClick={() => toggleExpanded(index)}
          >
            <span>{item.question}</span>
            <FontAwesomeIcon
              icon={expanded.includes(index) ? faAngleUp : faAngleDown}
              className="faq-icon"
            />
          </div>
          <div className="faq-answer px-2 py-4">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default MainFAQ;
