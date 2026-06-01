'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={openMenu}
          aria-label="メニューを開く"
          style={{
            width: 48,
            height: 48,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6,
            padding: 10,
          }}
        >
          <span style={{ width: 28, height: 3, background: '#fff', borderRadius: 999 }} />
          <span style={{ width: 28, height: 3, background: '#fff', borderRadius: 999 }} />
          <span style={{ width: 28, height: 3, background: '#fff', borderRadius: 999 }} />
        </button>
      )}

      <div
        onClick={closeMenu}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999999,
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'transform 0.4s ease, opacity 0.4s ease',
        }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            closeMenu();
          }}
          aria-label="メニューを閉じる"
          style={{
            position: 'absolute',
            top: 32,
            right: 32,
            width: 48,
            height: 48,
            fontSize: 40,
            lineHeight: 1,
            background: 'transparent',
            color: '#333333',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        <ul
          onClick={(e) => e.stopPropagation()}
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 36,
            textAlign: 'center',
          }}
        >
          <li><Link href="/news" onClick={closeMenu}>ニュース</Link></li>
          <li><Link href="/members" onClick={closeMenu}>メンバー</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>お問い合わせ</Link></li>
        </ul>
      </div>
    </>
  );
}