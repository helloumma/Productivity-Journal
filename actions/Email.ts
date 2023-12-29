import { GithubAccessTokenEmail } from "../components/EmailExample";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getUser } from "./supabase";

// send the email to the user's email
// find a way to schedule the email given the time and date from the reminder set
// within the 'GithubAccessTokenEmail' send the data from the reminder
// the above needs to be done for EACH reminder set but how???

export default async function SendEmail() {
  const getUserInfo = await getUser();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data } = await resend.emails.send({
    from: "hello@umma.dev",
    to: "ummagohil@gmail.com",
    subject: "Resend Test",
    react: GithubAccessTokenEmail({ username: "zenorocha" }),
  });
  return data;
}
