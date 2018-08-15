/**
 * 
 * @param {function} onClick The event handler to be called, if it is a pure left click without modifiers
 */
export const withPureClick = onClick => {
	return (e => {
		if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
			e.preventDefault();
			if (onClick) { onClick(e); }
		}
	});
};

/**
 * 
 * @param {function} onClick The event handler to be called
 */
export const blurAfterClick = onClick => {
	return e => {
		if (onClick) { onClick(e); }
		if (e.target.blur && typeof e.target.blur === "function") { e.target.blur(); }
	};
};
