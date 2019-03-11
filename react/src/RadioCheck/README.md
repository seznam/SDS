<a name="TYPE_RADIO"></a>

## TYPE\_RADIO
To be used as value for `type` property of RadioCheck component, if the desired output is a radiobutton.

<a name="TYPE_CHECK"></a>

## TYPE\_CHECK
To be used as value for `type` property of RadioCheck component, if the desired output is a checkbox.

<a name="RadioCheck"></a>

## RadioCheck(props)
A functional component RadioCheck represents a checkbox or a radiobutton with inline label or standalone. It takes [RadioCheckProps](#RadioCheckProps) as a parameter and returns a React component instance.


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>RadioCheckProps</code>](#RadioCheckProps) | An object with properties |

<a name="RadioCheckProps"></a>

## RadioCheckProps : <code>Object</code>
An object with RadioCheck's properties.

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [props.className] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Space separated list of CSS classes to be added to those that RadioCheckLabel uses internaly |
| [props.type] | <code>number</code> | <code>TYPE_CHECK</code> | Either `TYPE_RADIO` for radiobutton or `TYPE_CHECK` for checkbox |
| [props.forwardedRef] | <code>object</code> |  | React ref to be forwarded to the real input with type radio or checkbox |
| [props.disabled] | <code>boolean</code> | <code>false</code> | Is this form field disabled? |
| [props.error] | <code>boolean</code> | <code>false</code> | Is the value invalid? |
| [props.label] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Text to be shown next to the field as a label |

