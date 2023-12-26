import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "hello@umma.me",
      to: "ummagohil@gmail.com",
      subject: "Resend Test",
      html: "<h1>Hello world</h1>",
    });
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
