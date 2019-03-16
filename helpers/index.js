/**
 * Higher order function to wrap around a click event handler that executes the passed function only if the click is a pure primary button click
 * @param {function} onClick The event handler to be called, if it is a pure left click without modifiers
 * @returns {function} new handler
 */
export const withPureClick = onClick => {
	return e => {
		if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
			if (onClick) { onClick(e); }
		}
	};
};

/**
 * Higher order function to wrap around a click event handler that blurs the clicked element after the passed function is executed
 * @param {function} onClick The event handler to be called
 * @returns {function} new handler
 * @deprecated
 */
export const blurAfterClick = onClick => {
	console.warn("Function blurAfterClick is deprecated and will be removed in the near future.");

	return e => {
		if (onClick) { onClick(e); }
		e.currentTarget.blur && typeof e.currentTarget.blur === "function" && e.currentTarget.blur();
	};
};

/**
 * Higher order function to be used as an event handler of a keypress event that is emulating a button behavior (click with spacebar key) on a link
 * @param {function} onClick The event handler to be called
 * @returns {function} new handler
 */
export const spaceClick = onClick => {
	return e => {
		if (e.key === " ") {
			if (onClick) { onClick(e); }
		}
	};
};

/**
 * Higher order function to be used as an event handler of a keypress event that is emulating a button behavior (click with spacebar key) on a link
 * @param {function} handler The event handler to be called
 * @returns {function} new handler
 */
export const withPreventDefault = handler => {
	return e => {
		e.preventDefault();
		if (handler) { handler(e); }
	};
};

/**
 * Combines strings and/or objects into one single string usable as a value for the className property
 * @param {string|string[]|object|object[]} classes A string, an object of truthy/falsy properties or an array of strings and/or objects of truthy/falsy properties
 * @returns {string} className Class names separated by a space
 */
export const classNames = (classes = []) => {
	// I am aware of the classnames npm package, but I do not want to introduce any unnecessary dependency
	return (Array.isArray(classes) ? classes : [classes]).reduce((cls, cl) => {
		// an empty string will still pass - it is faster and breaks nothing
		if (typeof cl === "string") {
			cls.push(cl);
		} else {
			// every truthy property is included in the final className
			cl && Object.keys(cl).forEach(key => cl[key] && cls.push(key));
		}
		return cls;
	}, []).join(" ");
};
