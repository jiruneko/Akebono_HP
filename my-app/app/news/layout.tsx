import type { ReactNode } from 'react';

export const metadata = {
  title: 'ニュース',
};

export const revalidate = 60;

type Props = {
  children: ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <main>
      <section
        style={{
          position: 'relative',
          minHeight: '420px',
          padding: '160px 24px 120px',
          backgroundImage: 'url("/img-mv.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: '#2f4638',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: '48px',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            News
          </h1>
          <p
            style={{
              margin: '16px 0 0',
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            ニュース
          </p>
        </div>
      </section>

      <section
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '980px',
          margin: '-64px auto 80px',
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