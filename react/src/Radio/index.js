import React from 'react';
import RadioCheck, { TYPE_RADIO } from '../RadioCheck';

/**
 * Radio provides encapsulation for label, anything that is supposed to be a form field and optional description
 * @param {RadioProps} props An object with properties
 */
const Radio = React.memo(React.memo(React.forwardRef((props, ref) => <RadioCheck {...props} forwardedRef={ref} type={TYPE_RADIO} />)));

Radio.displayName = 'Radio';

export default Radio;

/**
 * An object with Radio's properties. Radio internally uses {@link ../RadioCheck/README.md#RadioCheck|RadioCheck} and takes also properties included in {@link ../RadioCheck/README.md#RadioCheckProps|RadioCheckProps}.
 * @typedef {Object} RadioProps
 * @property {string} [props.className = ""] Space separated list of CSS classes to be added to those that Radio uses internaly
 * @property {boolean} [props.disabled=false] Is this form field disabled?
 * @property {boolean} [props.error=false] Is the value invalid?
 * @property {string} [props.label = ""] Text to be shown next to the field as a label
 */
