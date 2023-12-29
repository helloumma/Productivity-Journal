import { GithubAccessTokenEmail } from "../components/EmailExample";
import { Resend } from "resend";
import { defer } from "@defer/client";
// send the email to the user's email
// find a way to schedule the email given the time and date from the reminder set
// within the 'GithubAccessTokenEmail' send the data from the reminder
// the above needs to be done for EACH reminder set but how???

async function SendEmail() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data } = await resend.emails.send({
    from: "hello@umma.dev",
    to: "ummagohil@gmail.com",
    subject: "Resend Test",
    react: GithubAccessTokenEmail({ username: "zenorocha" }),
  });
  return data;
}

export default defer(SendEmail);
