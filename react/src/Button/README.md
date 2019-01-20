<a name="Button"></a>

## Button(props)
A functional component Button represents a primary or secondary standalone button. It takes [ButtonProps](#ButtonProps) as a parameter and returns a React component instance.


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>ButtonProps</code>](#ButtonProps) | An object with properties |

<a name="ButtonProps"></a>

## ButtonProps : <code>Object</code>
An object with Button's properties. Button internally uses [Surface](../Surface/README.md#Surface) and takes also properties included in [SurfaceProps](../Surface/README.md#SurfaceProps).

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [surface] | <code>1</code> \| <code>2</code> \| <code>3</code> \| <code>4</code> \| <code>5</code> | <code>5</code> | Surface level 0-5; if Button is primary, value of this prop is ignored |
| [className] | <code>string</code> |  | Space separated list of CSS classes to be added to those that Button uses internaly |
| [primary] | <code>boolean</code> | <code>false</code> | If set, Button is rendered in accent color, otherwise the color is derived from given Surface |
| [size] | <code>&quot;x-small&quot;</code> \| <code>&quot;small&quot;</code> \| <code>&quot;regular&quot;</code> | <code>&quot;regular&quot;</code> |  |
| [icon] | <code>string</code> |  | Icon |
| [text] | <code>string</code> |  | Button's label |
| [disabled] | <code>boolean</code> | <code>false</code> | If true, Button is rendered as disabled and does not react to any action |
| [loading] | <code>boolean</code> | <code>false</code> | If true, Button is rendered with a Spinner inside and also behaves as disabled |
| [href] | <code>string</code> |  | If set, Button shall be rendered as an "a" tag and can be CTRL + clicked, bookmarked etc. |
| [onClick] | <code>function</code> |  | An onClick event listener (also triggered if the Button is focused and spacebar is pressed) |
| [noPreventDefault] | <code>boolean</code> | <code>false</code> | If true, even the default action for click event shall not be prevented (even if onClick and href are set at the same time!) |

