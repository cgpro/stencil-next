'use client';

declare global {
	interface Window {
		UC_UI: any;
	}
}

export default function UcBtn() {
	return (
		<>
			<a
				href="#"
				onClick={() => {
					window.UC_UI.showSecondLayer();
				}}
				className="usercentrics-show-layer"
				data-trk-click-location="???"
				data-trk-click-type="internal"
				data-trk-click-name="Privatsphäre/Datenschutz"
				data-trk-target="#"
				data-trk-event="navigation.click"
			>
				Privatsphäre/Datenschutz
			</a>
		</>
	);
}
