// このファイルは、お問い合わせフォームから送信されたデータを受け取り、実際にメールを送信する処理を担当する


import type { NextApiRequest, NextApiResponse } from 'next';  // Next.jsのAPI Routesを扱うのに必要な型を読み込み
import nodemailer from 'nodemailer';                          // メールを送信するためのライブラリ読み込み

// Next.jsのAPI Routeのエントリーポイントとなる非同期関数
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // APIエンドポイントがPOSTリクエストのみを受け付ける
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // リクエストの本文（body）に含まれるデータを取得
  const { name, company, email, message } = req.body;

  // 必須のデータが空出ないか確認
  if (!name || !company || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // nodemailerを使い、メール送信をするための設定
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS, // アプリパスワード
    },
  });

  //メール送信処理のエラハン（tryブロックを実行し、エラー発生したらcatchブロックを実行）
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `【im_harutoお問い合わせ】 from ${name} (${company})`,
      text: `【会社名】${company}\n【名前】${name} 様\n【メール（ご希望の返信先）】 ${email}\n\n【お問いわせ内容】\n${message}`,
    });

    res.status(200).json({ message: '送信成功' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '送信失敗' });
  }
}
