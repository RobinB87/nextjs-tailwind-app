import { NextResponse } from "next/server";
import { Resend } from "resend";

import WelcomeTemplate from "@/emails/WelcomeTemplate";

// create account at https://resend.com/blog/tailwind-with-react-email
// configure your domain
// add api key in env
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
  await resend.emails.send({
    from: "your_email@bla.com", // configured domain
    to: "some_email@bla.com",
    subject: "...",
    react: <WelcomeTemplate name="Robin" />,
  });

  return NextResponse.json({});
};
