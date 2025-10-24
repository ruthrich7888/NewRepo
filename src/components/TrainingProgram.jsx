import React from "react";

const TrainingProgram = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>7-Day Employee Training Program</h1>
      <div>
        <Day1 />
        <Day2 />
        <Day3 />
        <Day4 />
        <Day5 />
        <Day6 />
        <Day7 />
      </div>
    </div>
  );
};

const Day1 = () => {
  return (
    <div style={styles.dayContainer}>
      <h2 style={styles.dayHeader}>
        Day 1: Social Media Posting & Company Introduction
      </h2>
      <p style={styles.dayText}>
        **Welcome to Day 1 of your training!** Today is all about understanding
        who we are as a company and getting started with social media outreach.
        By the end of today, you’ll be posting your first job openings to the
        public and getting familiar with our mission and values.
      </p>
      <ul style={styles.dayList}>
        <li>
          **Company Mission & Values**: Our mission is to simplify farming
          operations and maximize productivity by offering affordable, flexible,
          and efficient rental solutions. We are committed to making farming
          more accessible and less financially burdensome by providing
          well-maintained, reliable equipment for rent at competitive prices.
        </li>
        <li>
          **Social Media Strategy**: Social media is a critical part of our
          outreach. It allows us to engage with our target audience — farmers,
          agricultural businesses, and potential employees. You'll practice
          posting job openings on platforms like Facebook, Instagram, and
          TikTok.
        </li>
        <li>
          **Hands-On Posting**: Use our provided content templates to create job
          posts. You'll share these posts on Facebook, TikTok, and Instagram.
          Review your posts with your supervisor before making them live.
        </li>
        <li>
          **Social Media Guidelines**: Make sure the tone is friendly but
          professional, and always include the company’s contact information.
          Each post should reflect our core values of reliability,
          affordability, and accessibility.
        </li>
      </ul>
      <p style={styles.assertiveText}>
        By the end of Day 1, you will have posted your first job opening and
        gained a deeper understanding of how our company engages with the world
        through social media.
      </p>
      <p style={styles.assertiveText}>
        **Takeaway**: Every post is a reflection of our brand  post with pride,
        professionalism, and attention to detail.
      </p>
    </div>
  );
};

const Day2 = () => {
  return (
    <div style={styles.dayContainer}>
      <h2 style={styles.dayHeader}>Day 2: Analytics & Reporting</h2>
      <p style={styles.dayText}>
        **Day 2 is all about tracking performance and improving our outreach
        strategy.** After today, you’ll know how to use our analytics tools to
        track social media posts, monitor website traffic, and adjust strategies
        based on real-time data.
      </p>
      <ul style={styles.dayList}>
        <li>
          **Plausible Analytics Overview**: You’ll dive into **Plausible
          Analytics** the tool we use to track website traffic and engagement.
          You’ll learn how to interpret metrics such as page views, visitors,
          and traffic sources.
        </li>
        <li>
          **Tracking Your Social Media Posts**: Log in to **Plausible** and
          start tracking the posts you created on Day 1. Analyze data like the
          number of visitors referred from Facebook or TikTok and see how your
          posts are driving website traffic.
        </li>
        <li>
          **Performance Insights**: Understand which posts are performing best
          and why. Are Facebook posts driving more traffic than TikTok? What
          does that tell you about our audience?
        </li>
        <li>
          **Filters and Adjustments**: Use filters to monitor traffic sources
          and segment data. Based on this data, you’ll start adjusting future
          posts to optimize for better performance.
        </li>
      </ul>
      <p style={styles.assertiveText}>
        By the end of Day 2, you’ll be confident in your ability to track and
        interpret data from social media campaigns, helping us refine our
        strategy and reach.
      </p>
      <p style={styles.assertiveText}>
        **Takeaway**: In marketing, data is king. Use it to optimize and elevate
        our outreach strategies!
      </p>
    </div>
  );
};

const Day3 = () => {
  return (
    <div style={styles.dayContainer}>
      <h2 style={styles.dayHeader}>
        Day 3: Vendor Communication & Admin Task Management
      </h2>
      <p style={styles.dayText}>
        **Day 3 focuses on efficient communication and organization.** You’ll
        practice reaching out to vendors, using professional communication
        templates, and managing tasks using tools like Trello or Notion.
        Effective vendor communication and task management are key to smooth
        operations.
      </p>
      <ul style={styles.dayList}>
        <li>
          **Vendor Email Communication**: Below is a professional email template
          for vendor outreach. It’s important to maintain clarity and
          professionalism when communicating with external partners.
          <br />
          <i>"Dear [Vendor Name],</i>
          <br />
          <i>
            Thank you for partnering with Agricultural Farm Works Rental LLC. I
            wanted to check in to see if there are any updates or adjustments to
            our ongoing orders. If you could provide us with a brief status
            update, that would be much appreciated. Here's the [link] to the
            vendor portal for your reference.
          </i>
          <br />
          <i>Sincerely, [Your Name]"</i>
        </li>
        <li>
          **Managing Vendor Relationships**: Use this email template to
          establish a professional rapport with our vendors. Don’t forget to
          keep track of their responses and update the contact sheet.
        </li>
        <li>
          **Admin Task Management**: Use **Trello** or **Notion** to manage your
          daily admin tasks. Create a board titled “Daily Admin Tasks” and add
          tasks like "Respond to Vendor X," "File Rental Agreements," and
          "Update Contact List."
        </li>
        <li>
          **Task Workflow**: As you complete tasks, move them across columns
          like “To-Do,” “In Progress,” and “Done.” This will help you stay
          organized and efficient.
        </li>
      </ul>
      <p style={styles.assertiveText}>
        By the end of Day 3, you will be well-equipped to handle professional
        vendor communication and manage your daily admin tasks efficiently using
        task management tools.
      </p>
      <p style={styles.assertiveText}>
        **Takeaway**: Stay organized, follow up, and always keep your
        communication clear and polite. Your work is a reflection of the
        company’s professionalism.
      </p>

      <hr style={styles.separator} />
      <p style={styles.sectionHeader}>Equipment Rental Rates</p>
      <p style={styles.dayText}>We offer the following equipment for rent:</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Equipment</th>
            <th>1-Day Rate</th>
            <th>3-Day Rate</th>
            <th>1-Week Rate</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mini Excavator (3–5 ton)</td>
            <td>$180</td>
            <td>$450</td>
            <td>$800</td>
            <td>From $40</td>
          </tr>
          <tr>
            <td>Mid-Size Excavator (10–12 ton)</td>
            <td>$300</td>
            <td>$750</td>
            <td>$1,300</td>
            <td>From $60</td>
          </tr>
          <tr>
            <td>Compact Tractor + Tiller</td>
            <td>$130</td>
            <td>$300</td>
            <td>$550</td>
            <td>From $40</td>
          </tr>
          <tr>
            <td>Utility Tractor (40–60HP)</td>
            <td>$160</td>
            <td>$400</td>
            <td>$700</td>
            <td>From $50</td>
          </tr>
        </tbody>
      </table>

      <p style={styles.assertiveText}>
        These rates reflect the full range of services we provide. Make sure to
        reference these rates when communicating with customers to offer the
        best service possible.
      </p>
    </div>
  );
};

const Day4 = () => {
  return (
    <div style={styles.dayContainer}>
      <h2 style={styles.dayHeader}>
        Day 4: Customer Relations & Email Communication
      </h2>
      <p style={styles.dayText}>
        **Customer relations are key to maintaining strong partnerships.** Day 4
        focuses on mastering email etiquette, responding to customer queries,
        and handling complaints professionally. These skills will help you
        maintain a positive customer experience.
      </p>
      <ul style={styles.dayList}>
        <li>
          **Customer Email Templates**: Use the following email template to
          respond to customer inquiries:
          <br />
          <i>"Dear [Customer Name],</i>
          <br />
          <i>
            Thank you for reaching out! We have received your inquiry and would
            be happy to assist you. Please let us know if you have any specific
            questions or require more information on our rental process. We look
            forward to hearing from you soon!
          </i>
          <br />
          <i>Sincerely, [Your Name]"</i>
        </li>
        <li>
          **Email Etiquette**: Learn to craft clear, concise, and professional
          emails. Whether you're confirming orders, responding to queries, or
          addressing complaints, professionalism in email communication is
          paramount.
        </li>
        <li>
          **Complaint Resolution**: When customers have complaints, acknowledge
          them, show empathy, and propose solutions. It’s about finding a
          win-win situation for both the customer and the company.
        </li>
      </ul>
      <p style={styles.assertiveText}>
        By the end of Day 4, you’ll confidently manage customer communications,
        handle complaints professionally, and use email to strengthen customer
        relations.
      </p>
      <p style={styles.assertiveText}>
        **Takeaway**: Clear, professional communication builds trust. Always
        take the extra step to ensure our customers feel heard and valued.
      </p>
    </div>
  );
};

const Day5 = () => {
  return (
    <div style={styles.dayContainer}>
      <h2 style={styles.dayHeader}>Day 5: Tawk.to Chat Support Training</h2>
      <p style={styles.dayText}>
        **Live chat support is vital to providing quick, effective service.** On
        Day 5, you’ll dive into **Tawk.to** chat support — the tool we use for
        real-time customer interactions.
      </p>
      <ul style={styles.dayList}>
        <li>
          **Tawk.to Overview**: Familiarize yourself with the **Tawk.to**
          dashboard. Understand the difference between “Inbox,” “Monitoring,”
          and “Chat” sections. These are your tools for managing conversations.
        </li>
        <li>
          **Responding to Customers**: Practice responding to mock chat messages
          using **canned responses** for common inquiries like “Pricing,”
          “Availability,” and “How to Rent Equipment.”
        </li>
        <li>
          **Escalating Chats**: If a situation requires a higher level of
          attention, learn when and how to escalate a chat to a supervisor.
        </li>
      </ul>
      <p style={styles.assertiveText}>
        By the end of Day 5, you’ll be ready to handle live chat support
        confidently, ensuring customers receive immediate assistance in a
        professional and friendly manner.
      </p>
      <p style={styles.assertiveText}>
        **Takeaway**: Chat support is fast-paced. Be clear, concise, and always
        aim to resolve issues quickly.
      </p>
    </div>
  );
};

const Day6 = () => {
  return (
    <div style={styles.dayContainer}>
      <h2 style={styles.dayHeader}>
        Day 6: Admin Support, Scheduling, and File Management
      </h2>
      <p style={styles.dayText}>
        **Day 6 is about staying organized and managing tasks effectively.**
        Today, you’ll learn how to handle your calendar, manage admin tasks, and
        keep files neatly organized for quick access.
      </p>
      <ul style={styles.dayList}>
        <li>
          **Calendar Management**: Learn how to use **Google Calendar** to
          schedule meetings, set reminders, and organize your time effectively.
          Your calendar will be your best friend.
        </li>
        <li>
          **Task Management Tools**: Use tools like **Trello** or **Notion** to
          manage tasks. Prioritize your to-dos and track the progress of each
          task throughout the day.
        </li>
        <li>
          **File Organization**: Stay on top of important documents. Organize
          files into categories like “Invoices,” “Agreements,” and “Customer
          Emails” to keep everything accessible.
        </li>
      </ul>
      <p style={styles.assertiveText}>
        By the end of Day 6, you’ll be able to manage your schedule, prioritize
        tasks, and ensure files are always well-organized for easy access.
      </p>
      <p style={styles.assertiveText}>
        **Takeaway**: Organization is key to success. Keep your day structured,
        and everything will fall into place.
      </p>
    </div>
  );
};

const Day7 = () => {
  return (
    <div style={styles.dayContainer}>
      <h2 style={styles.dayHeader}>Day 7: SOPs, Wrap-Up, & Final Review</h2>
      <p style={styles.dayText}>
        **Day 7 is your final day of training.** We’ll review company Standard
        Operating Procedures (SOPs), answer any lingering questions, and prepare
        you to start real tasks.
      </p>
      <ul style={styles.dayList}>
        <li>
          **Review SOPs**: Go over the key SOPs that govern our workflows.
          Understanding these will ensure consistency and efficiency in
          everything you do.
        </li>
        <li>
          **Weekly Report**: Submit your first weekly report. Summarize the key
          activities you’ve worked on, the challenges you’ve faced, and what
          you’ve learned during the training.
        </li>
        <li>
          **Supervisor Feedback**: Prepare for a feedback session with your
          supervisor. This is your opportunity to discuss your progress and ask
          any questions you have about your role.
        </li>
      </ul>
      <p style={styles.assertiveText}>
        By the end of Day 7, you will be fully prepared to tackle real tasks and
        contribute meaningfully to the team. You’ve completed the onboarding
        process with flying colors.
      </p>
      <p style={styles.assertiveText}>
        **Takeaway**: This is just the beginning. Stay sharp, stay organized,
        and keep striving for excellence!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "2em",
    color: "#333",
    marginBottom: "20px",
  },
  dayContainer: {
    backgroundColor: "#f9f9f9",
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "8px",
    borderLeft: "5px solid #4CAF50",
  },
  dayHeader: {
    fontSize: "1.6em",
    color: "#333",
  },
  dayText: {
    fontSize: "1.1em",
    color: "#555",
    lineHeight: "1.6",
  },
  dayList: {
    listStyleType: "disc",
    marginLeft: "20px",
    fontSize: "1em",
    color: "#444",
  },
  assertiveText: {
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    borderTop: "2px solid #e0e0e0",
    margin: "20px 0",
  },
  sectionHeader: {
    fontSize: "1.3em",
    fontWeight: "bold",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },
  tableHead: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    textAlign: "left",
  },
};

export default TrainingProgram;
