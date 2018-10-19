/**
 * Higher order function to wrap around a click event handler that executes the passed function only if the click is a pure primary button click
 * @param {function} onClick The event handler to be called, if it is a pure left click without modifiers
 */
export const withPureClick = onClick => {
	return e => {
		if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
			e.preventDefault();
			if (onClick) { onClick(e); }
		}
	};
};

/**
 * Higher order function to wrap around a click event handler that blurs the clicked element after the passed function is executed
 * @param {function} onClick The event handler to be called
 */
export const blurAfterClick = onClick => {
	return e => {
		if (onClick) { onClick(e); }
		if (e.currentTarget.blur && typeof e.currentTarget.blur === "function") { e.currentTarget.blur(); }
	};
};

/**
 * Higher order function to be used as an event handler of a keypress event that is emulating a button behavior (click with spacebar key) on a link
 * @param {function} onClick The event handler to be called
 */
export const spaceClick = onClick => {
	return e => {
		if (e.key === " ") {
			e.preventDefault();
			if (onClick) { onClick(e); }
		}
	};
};
