import { Express, Request, Response } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().optional(),
  message: z.string().min(1, "お問い合わせ内容は必須です"),
});

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req: Request, res: Response) => {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten().fieldErrors });
      return;
    }

    const { name, email, phone, message } = parsed.data;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: "inc@unicara.jp",
        subject: `【Unicara】お問い合わせ: ${name}様`,
        text: [
          `━━━━━━━━━━━━━━━━━━━━━━`,
          `  Unicara Webサイトからのお問い合わせ`,
          `━━━━━━━━━━━━━━━━━━━━━━`,
          ``,
          `【お名前】${name}`,
          `【メール】${email}`,
          `【電話番号】${phone || "未入力"}`,
          ``,
          `【お問い合わせ内容】`,
          message,
          ``,
          `━━━━━━━━━━━━━━━━━━━━━━`,
        ].join("\n"),
      });

      res.json({ success: true });
    } catch (err) {
      console.error("Mail send error:", err);
      res.status(500).json({ error: "メール送信に失敗しました" });
    }
  });
}
