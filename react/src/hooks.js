import { useState, useEffect } from 'react';

export const useModal = (mode = false) => {
	const [open, setOpen] = useState(mode);
	const toggle = () => setOpen(!open);

	return [open, setOpen, toggle];
};

// zdroj: https://usehooks.com/useMedia/
export function useMedia(queries, values, defaultValue) {
	const mediaQueryLists = queries.map(query => window.matchMedia(query));

	function getValue() {
		const index = mediaQueryLists.findIndex(mql => mql.matches);

		return typeof values[index] === 'undefined' ? defaultValue : values[index];
	}

	const [value, setValue] = useState(getValue);

	useEffect(function mqEffect() {
		const handler = () => setValue(getValue);

		mediaQueryLists.forEach(mql => mql.addListener(handler));

		return function mqEffectCleanup() {
			mediaQueryLists.forEach(mql => mql.removeListener(handler));
		};
	}, []);

	return value;
}
