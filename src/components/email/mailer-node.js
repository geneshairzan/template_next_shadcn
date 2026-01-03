import nodemailer from "nodemailer";

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PWD,
  },
  // logger: Boolean(process.env.SMTP_LOG),
  connectionTimeout: 5000,
};

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  // transporter.verify((err, success) => {});

  return await transporter.sendMail({
    from: process.env.SMTP_FROM,
    ...data,
  });
};
