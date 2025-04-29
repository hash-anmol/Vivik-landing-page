import { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()
    const html = `
      <div>
        <h1>New message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `
    const { data, error } = await resend.emails.send({
      from: 'VIVIK <onboarding@resend.dev>',
      to: ['anmolmalik.oss@gmail.com'],
      subject: `From Vivik Landing Page -New Contact Us message from ${name}`,
      html,
      replyTo: email,
    })
    if (error) return Response.json({ error }, { status: 500 })
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 })
  }
}