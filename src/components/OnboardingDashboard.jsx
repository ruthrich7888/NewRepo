import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Generate Submission ID
const generateId = () => {
  return "SUB-" + Math.random().toString(36).substring(2, 10).toUpperCase();
};

export default function OnboardingDashboard() {
  const [step, setStep] = useState(1);
  const [submissionId, setSubmissionId] = useState("");
  const [lookupId, setLookupId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentMethods: [],
    paymentDetails: "",
    address: "",
    receipt: null,
    agreement: false,
    signature: "",
  });

  useEffect(() => {
    setSubmissionId(generateId());
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "paymentMethods") {
      let updated = [...formData.paymentMethods];
      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((item) => item !== value);
      }
      setFormData({ ...formData, paymentMethods: updated });
      return;
    }

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "onboarding_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dehvaccuw/image/upload",
      {
        method: "POST",
        body: data,
      },
    );

    const result = await res.json();
    return result.secure_url;
  };

  const sendEmail = async (type = "initial") => {
    let receiptUrl = "Not uploaded";

    if (type === "receipt" && formData.receipt) {
      receiptUrl = await uploadToCloudinary(formData.receipt);
    }

    const templateParams = {
      submissionId: type === "receipt" ? lookupId : submissionId,
      type,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      paymentMethod: formData.paymentMethods.join(", "),
      paymentDetails: formData.paymentDetails,
      address: formData.address,
      receipt: receiptUrl,
    };

    await emailjs.send(
      "service_sh32su9",
      "template_3d5mrqb",
      templateParams,
      "DDKiXRJW1Brf_MHzr",
    );
  };

  const handleSubmit = async () => {
    if (!formData.agreement) {
      alert("You must accept the agreement.");
      return;
    }

    await sendEmail("initial");
    setSuccessMessage("✅ Submission successful!");
    setStep(4);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-3">Equipment Setup</h1>
            <p className="mb-2">
              Submission ID: <strong>{submissionId}</strong>
            </p>
            <button
              onClick={() => setStep(2)}
              className="bg-black text-white px-6 py-2 rounded"
            >
              Start
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />

            <div>
              <p className="font-medium mb-2">Payment Methods:</p>
              {[
                "Zelle",
                "Cash App",
                "PayPal",
                "Venmo",
                "Apple Pay",
                "Bank Transfer",
                "Prepaid Card",
                "Debit/Credit Card",
              ].map((method) => (
                <label key={method} className="block">
                  <input
                    type="checkbox"
                    name="paymentMethods"
                    value={method}
                    onChange={handleChange}
                  />{" "}
                  {method}
                </label>
              ))}
            </div>

            <textarea
              name="paymentDetails"
              placeholder="Payment details"
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            {/* AGREEMENT */}
            <div className="bg-gray-50 p-4 border rounded text-sm">
              <h3 className="font-semibold mb-2">
                Equipment Procurement Agreement
              </h3>
              <p className="mb-2">
                By completing this form, you acknowledge and agree to the
                following:
              </p>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  All funds provided are strictly designated for approved work
                  equipment.
                </li>
                <li>
                  Purchases must be made exclusively through the authorized
                  retailer.
                </li>
                <li>No personal or unauthorized use of funds.</li>
                <li>
                  Equipment will be registered and branded under company
                  systems.
                </li>
                <li>
                  Violation may result in termination and repayment obligation.
                </li>
              </ul>
              <p className="mt-2">
                By signing below, you confirm all information is accurate and
                accept full responsibility.
              </p>
            </div>

            <label>
              <input type="checkbox" name="agreement" onChange={handleChange} />{" "}
              I agree
            </label>

            <input
              name="signature"
              placeholder="Type Full Name as Signature"
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <button
              onClick={() => setStep(3)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Review
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h2 className="font-bold mb-2">Review</h2>
            <p>ID: {submissionId}</p>
            <pre className="bg-gray-100 p-3 rounded text-xs">
              {JSON.stringify(formData, null, 2)}
            </pre>

            <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-2 mt-3 rounded"
            >
              Submit
            </button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="text-center">
            <h2 className="text-xl font-bold">Success 🎉</h2>
            <p>{successMessage}</p>
            <p>
              Your ID: <strong>{submissionId}</strong>
            </p>

            <button
              onClick={() => setStep(5)}
              className="mt-3 bg-black text-white px-4 py-2 rounded"
            >
              Upload Receipt Later
            </button>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <h2 className="font-bold mb-2">Upload Receipt</h2>

            <input
              placeholder="Enter Submission ID"
              value={lookupId}
              onChange={(e) => setLookupId(e.target.value)}
              className="w-full p-3 border rounded mb-2"
            />

            <input type="file" name="receipt" onChange={handleChange} />

            <button
              onClick={async () => {
                if (!lookupId) return alert("Enter your Submission ID");
                await sendEmail("receipt");
                setSuccessMessage("✅ Receipt uploaded!");
              }}
              className="bg-black text-white px-4 py-2 mt-3 rounded"
            >
              Submit Receipt
            </button>

            {successMessage && (
              <p className="text-green-600 mt-2">{successMessage}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

