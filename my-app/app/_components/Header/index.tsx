import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Menu from '../Menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.png"
          alt="SIMPLE"
          className={styles.logo}
          width={900}
          height={600}
          priority
          /* ★ 既存のCSSクラス（styles.logo）の干渉を防ぎつつ、
               今の状態から確実に約3倍の大きさ（横幅を調整）にするために
               インラインのスタイルを追加しています。
          */
          style={{
            width: '240px',   // 元の表示サイズに合わせて調整してください（例: 40pxの3倍で120px）
            height: 'auto',   // 縦横比（アスペクト比）を自動で維持
          }}
        />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li>
              <Link href="/news">ニュース</Link>
            </li>
            <li>
              <Link href="members">メンバー</Link>
            </li>
            <li>
              <Link href="contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      <Menu />
    </header>
  );
}