<a name="NavItem"></a>

## NavItem(props)
A functional component NavItem represents an item of a level 1 or 2 menu or a tab, which is level 3.


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>NavItemProps</code>](#NavItemProps) | An object with properties |

<a name="NavItemProps"></a>

## NavItemProps : <code>Object</code>
An object with NavItem's properties.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [className] | <code>string</code> | Space separated list of CSS classes to be added to those that Button uses internaly |
| [icon] | <code>string</code> | Icon |
| submenu | <code>boolean</code> |  |
| open | <code>boolean</code> |  |
| selected | <code>boolean</code> |  |
| href | <code>string</code> |  |
| [onClick] | <code>function</code> | An onClick event listener (also triggered if the NavItem is focused and spacebar is pressed) |
| [text] | <code>string</code> | NavItem's label |
| level | <code>1</code> \| <code>2</code> \| <code>3</code> |  |
| layout | <code>&quot;horizontal&quot;</code> \| <code>&quot;vertical&quot;</code> |  |

