# Usage
```jsx
import { Alert } from './path/to/components' 
```

## Alert


#### Props

| Prop      | Type | Default |
| ----------- | ----------- | ----------- |
| variant      | danger, success | |
| children   | node        | |

#### Usage

```jsx
<Alert variant="danger">Lorem ipsum dolor sit amet</Alert>
```

## Input


#### Props

| Prop      | Type | Default |
| ----------- | ----------- | ----------- |
| type      | string | text |
| placeholder   | string        | |
| value   | string        | |
| onChange   | function        | |

#### Usage

```jsx
<Input
  type="password"
  placeholder="Masukkan password"
  value={}
  onChange={(ev) => {}}
/>
```
## Select


#### Props

| Prop      | Type | Default |
| ----------- | ----------- | ----------- |
| placeholder      | string |  |
| options      | array |  |
| onChange      | function |  |
#### Usage

```jsx
<Select
  placeholder="Select a city"
  onChange={(value) => {}}
  options={[ { label: 'Indonesia', value: 'IDN' } ]}
/>
```