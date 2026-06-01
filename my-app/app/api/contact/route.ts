import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactRequestBody = {
  lastName?: string;
  firstName?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactRequestBody;

    const lastName = body.lastName?.trim();
    const firstName = body.firstName?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();
    const message = body.message?.trim();

    if (!lastName || !firstName || !email || !company || !message) {
      return NextResponse.json(
        { message: '未入力の項目があります。' },
        { status: 400 }
      );
    }

    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;
    const mailTo = process.env.MAIL_TO || mailUser;

    if (!mailUser || !mailPass || !mailTo) {
      return NextResponse.json(
        { message: 'メール送信設定が不足しています。' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    const adminMail = transporter.sendMail({
      from: `"Akebono公式サイト" <${mailUser}>`,
      to: mailTo,
      replyTo: email,
      subject: '【Akebono】お問い合わせが届きました',
      text: `
Akebono公式サイトよりお問い合わせが届きました。

【お名前】
${lastName} ${firstName}

【メールアドレス】
${email}

【会社名・所属名】
${company}

【お問い合わせ内容】
${message}
`,
    });

    const userMail = transporter.sendMail({
      from: `"Akebono" <${mailUser}>`,
      to: email,
      subject: '【Akebono】お問い合わせを受け付けました',
      text: `
${lastName} ${firstName} 様

お問い合わせありがとうございます。
以下の内容で受け付けました。

内容を確認のうえ、必要に応じてご連絡いたします。

【お名前】
${lastName} ${firstName}

【会社名・所属名】
${company}

【お問い合わせ内容】
${message}

Akebono
`,
    });

    await adminMail;

    userMail.catch((error) => {
      console.error('USER_CONFIRM_MAIL_ERROR:', error);
    });

    return NextResponse.json(
      {
        message:
          'お問い合わせを送信しました。確認メールをお送りしています。',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('CONTACT_MAIL_ERROR:', error);

    return NextResponse.json(
      { message: '送信に失敗しました。' },
      { status: 500 }
    );
  }
}