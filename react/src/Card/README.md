<a name="Card"></a>

## Card(props)
**WIP** A functional component Card represents a single card (usually in a list). It takes [CardProps](#CardProps) as a parameter and returns a React component instance.


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>CardProps</code>](#CardProps) | An object with properties |

<a name="CardProps"></a>

## CardProps : <code>Object</code>
An object with Card's properties. Card internally uses [Surface](../Surface/README.md#Surface) and takes also properties included in [SurfaceProps](../Surface/README.md#SurfaceProps).

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;\&quot;div\&quot;&quot;</code> | Name of a component or tag Card should use as its container |
| [className] | <code>string</code> |  | Space separated list of CSS classes to be added to those that Card uses internaly |

