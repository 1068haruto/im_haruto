// お問い合わせフォームのデータを受け取り、実際にメールを送信する処理を担当する

import type { NextApiRequest, NextApiResponse } from 'next';                        // Next.jsのAPI Routesを扱うのに必要な型を読み込み
import nodemailer from 'nodemailer';                                                // メールを送信するためのライブラリ読み込み

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  // Next.jsのAPI Routeのエントリーポイントとなる非同期関数
  if (req.method !== 'POST') {                                                      // APIエンドポイントがPOSTリクエストのみを受け付ける
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, company, email, message } = req.body;                               // リクエストの本文（body）に含まれるデータを取得

  if (!name || !company || !email || !message) {                                    // 必須のデータが空出ないか確認
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({                                  // nodemailerを使い、メール送信をするための設定
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,                                                  // アプリパスワード
    },
  });

  try {                                                                             //メール送信処理のエラハン（tryブロックを実行し、エラー発生したらcatchブロックを実行）
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
