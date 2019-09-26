import React, { Fragment } from 'react';
import { classNames } from '@sznds/helpers';
import Typography from '../Typography';
import PropTypes from 'prop-types';

/**
 * Default size of a RadioCheck component.
 * @private
 */
const DEFAULT_SIZE = 'regular';

/**
 * To be used as value for `type` property of RadioCheck component, if the desired output is a radiobutton.
 */
export const TYPE_RADIO = 1;
/**
 * To be used as value for `type` property of RadioCheck component, if the desired output is a checkbox.
 */
export const TYPE_CHECK = 2;

/**
 * A functional component RadioCheck represents a checkbox or a radiobutton with inline label or standalone. It takes {@link RadioCheckProps} as a parameter and returns a React component instance.
 * @param {RadioCheckProps} props An object with properties
 */
const RadioCheck = React.memo(({
	className = '',
	type = TYPE_CHECK,
	forwardedRef,
	disabled = false,
	error = false,
	label = '',
	size = DEFAULT_SIZE,
	...props
}) => {
	const classes = classNames([
		'sds-radiocheck',
		{
			'sds-radiocheck--error': error,
			'sds-radiocheck--disabled': disabled,
			'sds-radiocheck--small': size === 'small',
		},
		className,
	]);

	const conditionalProps = {};

	if (disabled) {
		conditionalProps['aria-disabled'] = 'true';
		conditionalProps.disabled = disabled;
	}

	return <label className={classes} {...props}>
		<input {...props} ref={forwardedRef} type={type === TYPE_CHECK ? 'checkbox' : 'radio'} className="sds-radiocheck__input" {...conditionalProps} />
		<svg viewBox="0 0 24 24" className="sds-radiocheck__switch">
			{type === TYPE_CHECK
				? <Fragment>
					<path d="M22.8418035,18.1894962 C23.278041,16.1716015 23.5,14.1006432 23.5,12.0002231 C23.5,9.89994261 23.278023,7.82876147 22.8418048,5.81095603 C22.3377956,3.47971173 20.5205552,1.66239649 18.1893354,1.15842784 C16.1706959,0.722069167 14.0997744,0.5 12.0001115,0.5 C9.90036715,0.5 7.82922117,0.722087344 5.81090487,1.15842413 C3.4797888,1.66241491 1.66240498,3.47981563 1.15841722,5.81096107 C0.722078948,7.82909982 0.5,9.90004101 0.5,11.9997769 C0.5,14.0996815 0.722067364,16.1706247 1.15841831,18.189044 C1.66240498,20.5201844 3.4797888,22.3375851 5.81095015,22.8415857 C7.82844688,23.2779671 9.89959787,23.5 12.0001115,23.5 C14.1000071,23.5 16.1707283,23.2780996 18.1889312,22.8420093 C20.5202762,22.3382642 22.3377815,20.5207999 22.8418048,18.1894901 Z" className="sds-radiocheck__switch__border"></path>
					<path d="M22.3530945,18.0838386 C22.3530949,18.0838365 22.3530954,18.0838345 22.3530958,18.0838325 L22.3530932,18.0838446 C22.3530936,18.0838426 22.3530941,18.0838406 22.3530945,18.0838386 Z M24.3079343,18.506451 L24.3079317,18.5064631 C23.6795116,21.4131578 21.4125311,23.6800872 18.5057358,24.3081726 C16.3836048,24.7667195 14.2066877,25 12.0001115,25 C9.79284425,25 7.61539178,24.7665713 5.4939263,24.3077016 C2.58746137,23.6793195 0.320666462,21.4125035 -0.307711236,18.5060048 C-0.766539878,16.3836109 -1,14.2064218 -1,11.9997769 C-1,9.79329224 -0.766526468,7.61609373 -0.307708613,5.49398309 C0.320666462,2.58749647 2.58746137,0.320680493 5.49393843,-0.307704199 C7.61623248,-0.76651978 9.79362634,-1 12.0001115,-1 C14.206511,-1 16.3836688,-0.766538892 18.5062789,-0.307705436 C21.4128822,0.320650975 23.6795352,2.58739724 24.3079343,5.49399522 C24.7666361,7.61580229 25,9.79323033 25,12.0002231 C25,14.2073569 24.7666538,16.384562 24.3079343,18.506451 Z" className="sds-radiocheck__switch__focus"></path>
					<path d="M22.3530945,18.0838386 C22.7818372,16.1006104 23,14.0650699 23,12.0002231 C23,9.93551338 22.7818187,7.89974787 22.3530958,5.91661368 C21.8905491,3.77714989 20.2231129,2.10964499 18.083693,1.64714012 C16.0997049,1.21827185 14.0641956,1 12.0001115,1 C9.93594742,1 7.9002174,1.21828972 5.9165644,1.6471327 C3.77723128,2.10965972 2.10965116,3.77725534 1.64712511,5.91662375 C1.21828075,7.90010185 1,9.93562393 1,11.9997769 C1,14.0641014 1.21826978,16.0996293 1.64712728,18.0833863 C2.10965116,20.2227447 3.77723128,21.8903403 5.91665495,22.3528869 C7.89946525,22.7817657 9.93518241,23 12.0001115,23 C14.064447,23 16.0997695,22.781893 18.0833308,22.3532879 C20.2228559,21.8909903 21.8905349,20.2233505 22.3530945,18.0838386 Z" className="sds-radiocheck__switch__error"></path>
					<path d="M10,14.0857864 L16.2928932,7.79289322 C16.6834175,7.40236893 17.3165825,7.40236893 17.7071068,7.79289322 C18.0976311,8.18341751 18.0976311,8.81658249 17.7071068,9.20710678 L10.7071068,16.2071068 C10.3165825,16.5976311 9.68341751,16.5976311 9.29289322,16.2071068 L6.29289322,13.2071068 C5.90236893,12.8165825 5.90236893,12.1834175 6.29289322,11.7928932 C6.68341751,11.4023689 7.31658249,11.4023689 7.70710678,11.7928932 L10,14.0857864 Z" className="sds-radiocheck__switch__mark"></path>
				</Fragment>
				: <Fragment>
					<circle cx="12" cy="12" r="11.5" className="sds-radiocheck__switch__border" />
					<circle cx="12" cy="12" r="13" className="sds-radiocheck__switch__focus" />
					<circle cx="12" cy="12" r="11" className="sds-radiocheck__switch__error" />
					<circle cx="12" cy="12" r="5" className="sds-radiocheck__switch__mark" />
				</Fragment>}
		</svg>
		{label ? <Typography tagName="span" variant={size === 'small' ? 'body-small' : 'body'} className="sds-radiocheck__label">{label}</Typography> : null}
	</label>;
});

RadioCheck.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf([TYPE_CHECK, TYPE_RADIO]),
	forwardedRef: PropTypes.shape({ current: PropTypes.any }),
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	label: PropTypes.string,
	size: PropTypes.oneOf(['small', 'regular']),
};

export default RadioCheck;

/**
 * An object with RadioCheck's properties.
 * @typedef {Object} RadioCheckProps
 * @property {string} [props.className = ""] Space separated list of CSS classes to be added to those that RadioCheckLabel uses internaly
 * @property {number} [props.type = TYPE_CHECK] Either `TYPE_RADIO` for radiobutton or `TYPE_CHECK` for checkbox
 * @property {object} [props.forwardedRef] React ref to be forwarded to the real input with type radio or checkbox
 * @property {boolean} [props.disabled=false] Is this form field disabled?
 * @property {boolean} [props.error=false] Is the value invalid?
 * @property {string} [props.label = ""] Text to be shown next to the field as a label
 */
