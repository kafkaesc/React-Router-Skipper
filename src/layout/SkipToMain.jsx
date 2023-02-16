export default function SkipToMain() {
	function skipToMain() {
		console.log('skipToMain not implemented');
	}

	return (
		<button
			className="absolute focus:relative m-0 h-px focus:h-auto w-px focus:w-full overflow-hidden focus:overflow-auto focus:border focus:rounded focus:border-skip-white p-0 focus:px-3 focus:py-0.5 focus:inline-block focus:mx-auto"
			onClick={skipToMain}
		>
			Skip to main content
		</button>
	);
}
