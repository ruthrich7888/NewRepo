import emailjs from "@emailjs/browser";

export const sendEmail = async ({ to_name, to_email, message }) => {
  try {
    await emailjs.send(
      "service_df4m8j4",  

      "template_uit7pa4",

      {
        to_name,

        to_email,

        message,
      },

      "P6goDKKqiEanYkrco",
    );

    console.log("Email sent");
  } catch (error) {
    console.log(error);
  }
};
