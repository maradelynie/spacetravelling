import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <img src="/images/Logo.svg" alt="logo" />
    </header>
  );
}
