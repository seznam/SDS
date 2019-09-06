<a name="LabelWrapper"></a>

## LabelWrapper
LabelWrapper provides encapsulation for label, anything that is supposed to be a form field and optional description. It takes [LabelWrapperProps](#LabelWrapperProps) as a parameter and returns a React component instance.


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>LabelWrapperProps</code>](#LabelWrapperProps) | An object with properties |

<a name="LabelWrapperProps"></a>

## LabelWrapperProps : <code>Object</code>
An object with LabelWrapper's properties.

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [className] | <code>string</code> |  | Space separated list of CSS classes to be added to those that LabelWrapper uses internaly |
| [label] | <code>string</code> |  |  |
| [layout] | <code>&quot;column&quot;</code> \| <code>&quot;row&quot;</code> |  |  |
| [description] | <code>string</code> |  | Additional description, if label is not enough |
| [errorDescription] | <code>string</code> |  | Displayed instead of description, if present; used for error messages directly next to the relevant form field |
| [size] | <code>&quot;small&quot;</code> \| <code>&quot;regular&quot;</code> | <code>&quot;regular&quot;</code> |  |

