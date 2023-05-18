import styles from './page.module.css';
import UcBtn from '../components/uc';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.content}>
			Go to <Link href="subpage">subpage</Link>
			<br />
			<UcBtn />
			<br />
			<a href="https://codesandbox.io/p/github/cgpro/stencil-next/draft/laughing-franklin" target="_blank">
				See codesandbox
			</a>
		</main>
	);
}
