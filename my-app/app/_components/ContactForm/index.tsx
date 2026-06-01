'use client';

import { FormEvent, useState } from 'react';
import styles from './index.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      lastName: String(formData.get('lastName') || '').trim(),
      firstName: String(formData.get('firstName') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.message || '送信に失敗しました。');
        return;
      }

      setStatus(result.message || 'お問い合わせを送信しました。');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('通信エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>
            姓
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className={styles.input}
            placeholder="山田"
            autoComplete="family-name"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>
            名
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className={styles.input}
            placeholder="太郎"
            autoComplete="given-name"
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          placeholder="example@example.com"
          autoComplete="email"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="company" className={styles.label}>
          会社名・所属名
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className={styles.input}
          placeholder="株式会社〇〇"
          autoComplete="organization"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          本文
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="お問い合わせ内容をご入力ください。"
          required
        />
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className={styles.button}
          disabled={loading}
        >
          {loading ? '送信中...' : '送信する'}
        </button>
      </div>

      {status && (
        <p
          role="status"
          aria-live="polite"
          style={{
            marginTop: '16px',
            textAlign: 'center',
          }}
        >
          {status}
        </p>
      )}
    </form>
  );
}