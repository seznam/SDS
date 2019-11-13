import React, { memo, forwardRef } from 'react';
import RadioCheck, { TYPE_CHECK } from '../RadioCheck';

/**
 * Checkbox provides encapsulation for label, anything that is supposed to be a form field and optional description
 * @param {CheckboxProps} props An object with properties
 */
const Checkbox = memo(forwardRef((props, ref) => <RadioCheck {...props} forwardedRef={ref} type={TYPE_CHECK} />));

Checkbox.displayName = 'Checkbox';

export default Checkbox;

/**
 * An object with Checkbox's properties. Checkbox internally uses {@link ../RadioCheck/README.md#RadioCheck|RadioCheck} and takes also properties included in {@link ../RadioCheck/README.md#RadioCheckProps|RadioCheckProps}.
 * @typedef {Object} CheckboxProps
 * @property {string} [props.className = ""] Space separated list of CSS classes to be added to those that Checkbox uses internaly
 * @property {boolean} [props.disabled=false] Is this form field disabled?
 * @property {boolean} [props.error=false] Is the value invalid?
 * @property {string} [props.label = ""] Text to be shown next to the field as a label
 */
