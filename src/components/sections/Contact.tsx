'use client';
import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/contact.module.scss";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });  // 入力内容管理のための状態を作成
  const [status, setStatus] = useState('');                                                     // フォーム送信管理のための状態を作成

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {      // 入力内容が変化したときに実行する関数
    setFormData({ ...formData, [e.target.name]: e.target.value });                              // 既存のformDataの内容をコピーし、変更された入力欄のnameに対応する値を新しい入力値で上書き
  };

  const handleSubmit = async (e: React.FormEvent) => {                                          // フォーム送信時に実行する非同期関数
    e.preventDefault();
    setStatus('送信しています...');

    const res = await fetch('/api/contact', {                                                   // サーバーにデータを送信する
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('送信が完了しました！ご返信までしばらくお待ちください。');
      setFormData({ name: '', email: '', message: '', company: '' });
    } else {
      setStatus('送信に失敗しました。');
    }
  };

  return (
    <section id="contact" className={`section-anchor-offset ${styles.contact}`}>
      <SectionHeading className={styles['contact-heading']}>お問い合わせ</SectionHeading>
      <p>お問い合わせは、下記フォームよりお願いいたします。</p>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="お名前" value={formData.name} onChange={handleChange} required />
        <input name="company" type="text" placeholder="会社名" value={formData.company} onChange={handleChange} required />
        <input name="email" type="email" placeholder="メールアドレス（ご希望の返信先）" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="お問い合わせ内容" value={formData.message} onChange={handleChange} required />
        <button type="submit">送信</button>
        <p className={styles.status}>{status}</p>
      </form>
    </section>
  );
};

export default Contact;
