export default function Button(props) {
	const pr = { ...props };
	const classes =
		'mx-1 border rounded border-skipper-black hover:bg-skip-white-dark';
	if (!pr.size || pr.size === 'md') {
		pr.className = pr.className + ' px-3 py-0.5 ' + classes;
		return <button {...pr}></button>;
	}
	if (pr.size === 'lg') {
		pr.className = pr.className + ' px-4 py-1 ' + classes;
		return <button {...pr}></button>;
	}
	if (pr.size === 'sm') {
		pr.className = pr.className + ' px-2 ' + classes;
		return <button {...pr}></button>;
	}
}
