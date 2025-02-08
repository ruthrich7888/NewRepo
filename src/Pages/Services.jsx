import React from "react";
import Layout from "../components/Layout";
import WeHelp from "../components/Home Components/WeHelp";

const Services = () => {
  return (
    <>
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6 ">
            Our Services
          </h2>

          <p className="text-gray-700 text-center mb-6">
            At <strong>Agricultural Farm Rental LLC</strong>, we provide
            top-tier agricultural solutions to help farmers, agribusinesses, and
            landowners maximize productivity while reducing operational costs.
          </p>

          <div className="space-y-6">
            {/* Farmland Rental Services */}
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-green-800">
                Farmland Rental Services
              </h3>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>
                  Short-Term & Long-Term Leasing – Flexible rental options.
                </li>
                <li>
                  Irrigated & Non-Irrigated Land – High-quality farmland
                  available.
                </li>
                <li>Soil & Land Assessment – Optimize your soil conditions.</li>
              </ul>
            </div>

            {/* Agricultural Equipment Leasing */}
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-green-800">
                Agricultural Equipment Leasing
              </h3>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Modern Farming Equipment – Tractors, plows, and more.</li>
                <li>Affordable Leasing Plans – Cost-effective solutions.</li>
                <li>Maintenance & Support – Regular servicing included.</li>
              </ul>
            </div>

            {/* Farm Management & Consulting */}
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-green-800">
                Farm Management & Consulting
              </h3>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>
                  Expert Farm Planning – Crop rotation & soil health strategies.
                </li>
                <li>
                  Yield Optimization – Improve productivity & sustainability.
                </li>
                <li>
                  Regulatory Compliance – Assistance with agricultural
                  regulations.
                </li>
              </ul>
            </div>

            {/* Remote Agricultural Support */}
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-green-800">
                Remote Agricultural Support
              </h3>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Virtual Farm Advisory – Consult with experts online.</li>
                <li>
                  Data-Driven Insights – Precision farming and yield
                  predictions.
                </li>
                <li>24/7 Customer Support – Assistance anytime, anywhere.</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-900">
              Why Choose Us?
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>
                Experienced Professionals – Expert agricultural specialists.
              </li>
              <li>
                Flexible & Affordable Solutions – Custom rental and leasing
                plans.
              </li>
              <li>
                Sustainability Focused – Promoting eco-friendly farming
                practices.
              </li>
            </ul>
          </div>

          {/* Contact Call to Action */}
          <div className="mt-6 text-center">
            <p className="text-gray-700 font-semibold">Get in Touch Today!</p>
            <p className="text-gray-600">
              Looking for farmland, equipment, or expert farming advice?
            </p>
            <br />
          </div>
        </div>
        <WeHelp />
      </Layout>
    </>
  );
};

export default Services;
