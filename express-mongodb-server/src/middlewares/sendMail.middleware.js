const nodemailer = require("nodemailer");

const sendEmail = async (mailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      // service: process.env.SERVICE,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail(mailOptions);

    console.log("email sent sucessfully");
  } catch (error) {
    throw new Error("email not sent");
    // console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
