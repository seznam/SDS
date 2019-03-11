<a name="EMPTY_SURFACE"></a>

## EMPTY\_SURFACE
Surface level 0 is no visible surface (no border, no background), but needed to create consistent focus for anything using a Surface.

<a name="DEFAULT_SURFACE"></a>

## DEFAULT\_SURFACE
Surface level 5 is default value for anything using a Surface.

<a name="PRIMARY_SURFACE"></a>

## PRIMARY\_SURFACE
Surface level 6 represents a special case of a surface that uses the same level of depth as level 5 but uses primary color as background and shadow tint.

<a name="SURFACE_LEVELS"></a>

## SURFACE\_LEVELS
The most usual scale of surface levels.

<a name="ALL_SURFACE_LEVELS"></a>

## ALL\_SURFACE\_LEVELS
The complete scale of surface levels.

<a name="Surface"></a>

## Surface
Surface encapsulates the visual style of an elevated surface of any given element/component


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>SurfaceProps</code>](#SurfaceProps) | An object with properties |

<a name="SurfaceProps"></a>

## SurfaceProps : <code>Object</code>
An object with Surface's properties.

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [surface] | <code>0</code> \| <code>1</code> \| <code>2</code> \| <code>3</code> \| <code>4</code> \| <code>5</code> \| <code>6</code> | <code>5</code> | Surface level 0-5; any other value results in a primary surface |
| [className] | <code>string</code> |  | Space separated list of CSS classes to be added to those that Surface uses internaly |
| [tagName] | <code>string</code> | <code>&quot;\&quot;div\&quot;&quot;</code> | Rendered element/component to be equipped with a surface visual |
| [primary] | <code>boolean</code> | <code>false</code> | If set, Button is rendered in accent color, otherwise the color is derived from given Surface |
| [disabled] | <code>boolean</code> | <code>false</code> | If true, Surface is rendered as disabled and does not react to any action |
| [sharp] | <code>boolean</code> | <code>false</code> | If true, Surface does not have rounded edges and is suitable for full-width usage (header, footer, ...) |
| [href] | <code>string</code> |  | If set, Button shall be rendered as an "a" tag and can be CTRL + clicked, bookmarked etc. |
| [onClick] | <code>function</code> |  | An onClick event listener (also triggered if the Surface is focused and spacebar is pressed) |

