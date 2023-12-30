import { NextResponse } from "next/server";
import { Resend } from "resend";
import { GithubAccessTokenEmail } from "../../../components/EmailExample";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "hello@umma.dev",
      to: "ummagohil@gmail.com",
      subject: "Resend Test",
      react: GithubAccessTokenEmail({ username: "zenorocha" }),
    });
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
