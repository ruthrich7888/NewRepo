{
  /* =========================
   FAQ ACCORDION SECTION
========================= */
}

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How do I start investing?",
    answer:
      "Create an account, choose an investment plan, and complete your deposit to begin.",
  },
  {
    question: "When are profits credited?",
    answer: "Profits are updated weekly based on your active investment plan.",
  },
  {
    question: "Can I withdraw anytime?",
    answer:
      "Yes, withdrawals can be requested anytime depending on your available balance.",
  },
  {
    question: "Is my investment secure?",
    answer:
      "We use secure systems and encrypted transactions to protect investor accounts and data.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl overflow-hidden bg-[#111827]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
