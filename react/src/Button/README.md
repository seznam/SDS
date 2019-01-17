## Button(props)
Button represents a primary or secondary standalone button

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>object</code> |  | An object with props |
| [props.surface] | <code>number</code> | <code>5</code> | Surface level 0-5; if Button is primary, value of this prop is ignored |
| [props.className] | <code>string</code> |  | Space separated list of CSS classes to be added to those that Button uses internaly |
| [props.primary] | <code>boolean</code> | <code>false</code> | If set, Button is rendered in accent color, otherwise the color is derived from given Surface |
| [props.size] | <code>string</code> | <code>&quot;\&quot;regular\&quot;&quot;</code> | One of the sizes "x-small", "small" or "regular" |
| [props.icon] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Icon |
| [props.text] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Button's label |
| [props.disabled] | <code>boolean</code> | <code>false</code> | If true, Button is rendered as disabled and does not react to any action |
| [props.loading] | <code>boolean</code> | <code>false</code> | If true, Button is rendered with a Spinner inside and also behaves as disabled |
| [props.href] | <code>string</code> |  | If set, Button shall be rendered as an "a" tag and can be CTRL + clicked, bookmarked etc. |
| [props.onClick] | <code>function</code> |  | An onClick event listener (also triggered if the Button is focused and spacebar is pressed) |
| [props.noPreventDefault] | <code>boolean</code> | <code>false</code> | If true, even the default action for click event shall not be prevented (even if onClick and href are set at the same time!) |
