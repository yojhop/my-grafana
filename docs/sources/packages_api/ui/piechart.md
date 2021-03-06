+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "PieChart"
keywords = ["grafana","documentation","sdk","@grafana/ui"]
type = "docs"
draft = true
+++

## PieChart class

<b>Signature</b>

```typescript
export declare class PieChart extends PureComponent<Props> 
```
<b>Import</b>

```typescript
import { PieChart } from '@grafana/ui';
```
<b>Properties</b>

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [containerElement](#containerelement-property) |  | <code>any</code> |  |
|  [defaultProps](#defaultprops-property) | <code>static</code> | <code>{</code><br/><code>        pieType: string;</code><br/><code>        format: string;</code><br/><code>        stat: string;</code><br/><code>        strokeWidth: number;</code><br/><code>        theme: GrafanaThemeType;</code><br/><code>    }</code> |  |
|  [svgElement](#svgelement-property) |  | <code>any</code> |  |
|  [tooltipElement](#tooltipelement-property) |  | <code>any</code> |  |
|  [tooltipValueElement](#tooltipvalueelement-property) |  | <code>any</code> |  |

<b>Methods</b>

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [componentDidMount()](#componentdidmount-method) |  |  |
|  [componentDidUpdate()](#componentdidupdate-method) |  |  |
|  [draw()](#draw-method) |  |  |
|  [render()](#render-method) |  |  |

### containerElement property

<b>Signature</b>

```typescript
containerElement: any;
```

### defaultProps property

<b>Signature</b>

```typescript
static defaultProps: {
        pieType: string;
        format: string;
        stat: string;
        strokeWidth: number;
        theme: GrafanaThemeType;
    };
```

### svgElement property

<b>Signature</b>

```typescript
svgElement: any;
```

### tooltipElement property

<b>Signature</b>

```typescript
tooltipElement: any;
```

### tooltipValueElement property

<b>Signature</b>

```typescript
tooltipValueElement: any;
```

### componentDidMount method

<b>Signature</b>

```typescript
componentDidMount(): void;
```
<b>Returns:</b>

`void`

### componentDidUpdate method

<b>Signature</b>

```typescript
componentDidUpdate(): void;
```
<b>Returns:</b>

`void`

### draw method

<b>Signature</b>

```typescript
draw(): void;
```
<b>Returns:</b>

`void`

### render method

<b>Signature</b>

```typescript
render(): JSX.Element;
```
<b>Returns:</b>

`JSX.Element`

