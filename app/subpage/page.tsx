import styles from '../page.module.css';
import UcBtn from '../../components/uc';
import Link from 'next/link';

export default function Subpage() {
	return (
		<main className={styles.content}>
			<h2>gbw-video</h2>
			<UcBtn />
			<br />
			<Link href="/">Back 2 root</Link>

			<div
				dangerouslySetInnerHTML={{
					__html: `
					<!-- gbw-video-youtube w. preview image -->
					<gbw-video video-type="youtube" video-id="0Rq0sROZpcI" poster-title="Das Vorschaubild (title)" poster-alt="Das Vorschaubild (alt)" poster-thumb="https://picsum.photos/id/0/30/17" poster-low="https://picsum.photos/id/0/576/324" poster-medium="https://picsum.photos/id/0/768/432" poster-high="https://picsum.photos/id/0/1200/675">
					<div class="video-caption">
						<small>
						© adipisicing laboris cupidatat
						<p>
						id laboris deserunt nostrud sunt officia pariatur proident labore ad
						</p>
						</small>
					</div>
					</gbw-video>

					<!-- gbw-video-youtube -->
					<gbw-video video-type="youtube" video-id="0Rq0sROZpcI">
					<div class="video-caption">
						<small>
							© ea anim anim
							<p class="video-title">
								<strong>
										
									culpa amet anim
								</strong>
							</p>
							<p>
								duis ea ad amet nulla commodo quis quis pariatur minim
							</p>
						</small>
					</div>
					</gbw-video>
					
					<!-- gbw-video (canto) -->
					<gbw-video video-type="canto" video-id="https://messe-muenchen.canto.global/direct/video/7tgngr7dip60h8cttm4acvml5q/qV0Q4aZYGpZbZfq-OW1sw4A4rfk/original?content-type=video%2Fmp4&#38;name=video-cyan.mp4" poster-title="Das Vorschaubild (title)" poster-alt="Das Vorschaubild (alt)" poster-thumb="https://picsum.photos/id/0/30/17" poster-low="https://picsum.photos/id/0/576/324" poster-medium="https://picsum.photos/id/0/768/432" poster-high="https://picsum.photos/id/0/1200/675">
						<div class="video-caption">
							<small>
								© excepteur consequat adipisicing
								<p>
									exercitation ullamco mollit sit consequat consequat Lorem dolore Lorem tempor
								</p>
							</small>
						</div>
					</gbw-video>

					<!-- gbw-uc -->
					<gbw-uc></gbw-uc>
          			`,
				}}
			></div>
		</main>
	);
}
