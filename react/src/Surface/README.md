<a name="Surface"></a>

## Surface
Surface encapsulates the visual style of an elevated surface of any given element/component


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>object</code> |  | An object with props |
| [props.surface] | <code>number</code> | <code>5</code> | Surface level 0-5 |
| [props.className] | <code>string</code> |  | Space separated list of CSS classes to be added to those that Surface uses internaly |
| [props.tagName] | <code>string</code> | <code>&quot;\&quot;div\&quot;&quot;</code> | Rendered element/component to be equipped with a surface visual |
| [props.disabled] | <code>boolean</code> | <code>false</code> | If true, Surface is rendered as disabled and does not react to any action (even if clickable=true) |
| [props.sharp] | <code>boolean</code> | <code>false</code> | If true, Surface does not have rounded edges and is suitable for full-width usage (header, footer, ...) |

<a name="surfaceClassName"></a>

## surfaceClassName(depth)

| Param | Type | Description |
| --- | --- | --- |
| depth | <code>number</code> | Depth of the surface from 0 to 5 |

