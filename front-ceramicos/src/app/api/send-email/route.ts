import { google } from "googleapis";
import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
const GMAIL_USER = process.env.GMAIL_USER;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function POST(req: Request) {
  const {  message, phone, email, name, surname } = await req.json();
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: GMAIL_USER,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken.token || accessToken,
  },
} as nodemailer.TransportOptions);


    const mailAdmin = {
      from: `"${name}" <${email}>`,
      to: GMAIL_USER,
      subject: "CONSULTA WEB",
      replyTo: email,
      html: `
        <div style="padding: 10px; border-radius: 5px; width: 100%; font-family: Arial, sans-serif; background-color: #f9f9f9;">
        <div style="background-color: rgba(255, 129, 2, 0.992); padding: 10px; border-radius: 5px; display: flex; align-items: center;">
        <img src="https://donceramicos.vercel.app/logo-bg.png" alt="logo" style="width: 90px; height: 50px; margin-right: 10px;">
        <h1 style="font-size: 16px; color: #000000; font-family: monospace; margin: 0;">RECIBISTE UNA NUEVA CONSULTA DESDE EL SITIO WEB</h1>
        </div>
        <p style="text-align: start; font-size: 14px;">Hola te acercamos una copia de la consulta con los datos de contacto del remitente:</p>
        <p style="font-size: small;">NOMBRE: ${name}</p>
        <p style="font-size: small;">APELLIDO: ${surname}</p>
        <p style="font-size: small;">TELEFONO: ${phone}</p>
        <p style="font-size: small;">CORREO ELECTRONICO: ${email}</p>
        <p style="text-align: justify; font-size: 14px; color: #333;">${message}</p>
        <p style="margin-top:5px; font-size: 14px; text-align: center;">Recorda ponerte en contacto a la brevedad😁</p>
        </div>
        `,
    };

    const mailUser = {
      from: GMAIL_USER,
      to: email,
      subject: "CONFIRMACION DE CONSULTA WEB",
      html: `
        <div style="padding: 10px; border-radius: 5px; width: 100%; font-family: Arial, sans-serif; background-color: #f9f9f9;">
        <div style="background-color: rgba(255, 129, 2, 0.992); padding: 10px; border-radius: 5px; display: flex; align-items: center;">
        <img src="https://.com/logo-bg.png" alt="logo" style="width: 90px; height: 50px; margin-right: 10px;">
        <h1 style="font-size: 16px; color: #000000; font-family: monospace; margin: 0;">CONFIRMACIÓN DE CONSULTA EN NUESTRO SITIO WEB</h1>
        </div>

        <p style="text-align: start; font-size: 14px;">Hola ${name}, te acercamos una copia de tu consulta:</p>
        <p style="text-align: justify; font-size: 14px; color: #333;">${message}</p>
        <p style="margin-top:5px; font-size: 14px;">Nos pondremos en contacto a la brevedad. Gracias por tu consulta.</p>
        </div>
        `,
    };

    await transport.sendMail( mailAdmin );
    await transport.sendMail( mailUser );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json({
      success: false,
      error: "Error al enviar email",
    });
  }
}
