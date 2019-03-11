<a name="Input"></a>

## Input
Input is a standard input that may be accompanied by two icons that can be clickable.

<a name="new_Input_new"></a>

### new Input(props)

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>InputProps</code>](#InputProps) | An object with properties |

<a name="InputProps"></a>

## InputProps : <code>Object</code>
An object with Input's properties. Input internally uses [InputSurface](../InputSurface/README.md#InputSurface) and takes also properties included in [InputSurfaceProps](../InputSurface/README.md#InputSurfaceProps).

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [className] | <code>string</code> |  | Space separated list of CSS classes to be added to those that Input uses internaly |
| [iconLeft] | <code>string</code> |  | Optional left icon glyph |
| [iconRight] | <code>string</code> |  | Optional right icon glyph |
| [onIconLeftClick] | <code>function</code> |  | Click handler for the left icon, its presence makes the icon clickable |
| [onIconRightClick] | <code>function</code> |  | Click handler for the right icon, its presence makes the icon clickable |
| [size] | <code>&quot;small&quot;</code> \| <code>&quot;regular&quot;</code> | <code>&quot;regular&quot;</code> |  |

