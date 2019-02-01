import React from "react";
import { classNames } from "@sznds/helpers";

/**
 * Icon component represents one of the built-in icons packed with SDS
 * @param {object} props An object with props
 * @param {string} [props.className] Space separated list of CSS classes to be added to those that Spinner uses internaly
 */
const Spinner = ({ className = "", ...props }) => <span className={classNames(["sds-spinner", className])} {...props}></span>;

export default Spinner;
