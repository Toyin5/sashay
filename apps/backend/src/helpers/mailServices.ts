import mailSender from "../middlewares/mailService";
import logger from "../utils/logger";
import mailGenerator from "../utils/mail.generator";

interface IMailContent {
  email: string;
  subject: string;
  message: string;
  html: string;
}

interface IRegistrationMail {
  email: string;
  username: string;
  code: Number;
}
const sendMail = async function ({
  email,
  subject,
  message,
  html,
}: IMailContent) {
  try {
    const mailService = new mailSender();
    await mailService.createConnection();
    await mailService.mail({
      from: {
        address: process.env.EMAIL!,
      },
      email: email,
      subject: subject,
      message: message,
      html: html,
    });
  } catch (error) {
    logger.error(error);
  }
};

export const sendVerificationEmail = async ({
  email,
  username,
  code,
}: IRegistrationMail) => {
  const emailContent = {
    body: {
      name: username,
      intro: "Welcome to Your Sashay store! Your verification code is:",
      code: code,
      outro: "Need help, or have questions? Just reply to this email.",
    },
  };
  const emailBody = mailGenerator.generate(emailContent);
  const emailText = mailGenerator.generatePlaintext(emailContent);

  await sendMail({
    email: email,
    subject: "Kindly Verify",
    html: emailBody,
    message: emailText,
  });
};
