import type { ReactNode } from 'react';

export const metadata = {
  title: 'お問い合わせ',
};

export const revalidate = 60;

type Props = {
  children: ReactNode;
};

export default function ContactLayout({ children }: Props) {
  return (
    <main>
      <section
        style={{
          position: 'relative',
          minHeight: '620px',
          padding: '160px 24px 140px',
          backgroundImage: 'url("/img-mv.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2f4638',
        }}
      >
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              margin: 0,
              color: '#3d5a49',
              fontSize: '48px',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            Contact
          </h1>

          <p
            style={{
              margin: '16px 0 0',
              color: '#2f4a3b',
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            お問い合わせ
          </p>
        </div>
      </section>

      <section
        style={{
          position: 'relative',
          zIndex: 1,
          width: 'min(100% - 48px, 980px)',
          margin: '-80px auto 96px',
          padding: '56px 48px',
          background: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.08)',
        }}
      >
        {children}
      </section>
    </main>
  );
}