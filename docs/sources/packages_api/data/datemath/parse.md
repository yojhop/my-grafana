+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "parse"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## dateMath.parse() function

### dateMath.parse() function

Parses different types input to a moment instance. There is a specific formatting language that can be used if text arg is string. See unit tests for examples.

<b>Signature</b>

```typescript
function parse(text: string | DateTime | Date, roundUp?: boolean, timezone?: TimeZone): DateTime | undefined;
```
<b>Import</b>

```typescript
import { dateMath } from '@grafana/data';
const { parse } = dateMath;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  text | <code>string &#124; DateTime &#124; Date</code> |  |
|  roundUp | <code>boolean</code> |  |
|  timezone | <code>TimeZone</code> |  |

<b>Returns:</b>

`DateTime | undefined`

