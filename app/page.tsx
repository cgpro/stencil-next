import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.content}>
			Go to <Link href="subpage">subpage</Link>
			<br />
			<a
				href="https://codesandbox.io/p/sandbox/misty-feather-vw79w9?file=%2Fapp%2Fpage.tsx%3A1%2C1"
				target="_blank"
			>
				See codesandbox
			</a>
		</main>
	);
}
