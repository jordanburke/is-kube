# is-kube

> Checks to see if the process is running inside a kubernetes container (i.e., similar to is-docker)

## Install

```
$ npm install is-kube
```

## Usage

JavaScript:

```javascript
const isKube = require('is-kube');

if (isKube()) {
  console.log('Running inside a kubernetes container');
}
```

Typescript:

```typescript
import isKube from "is-kube"

if (isKube()) {
  console.log('Running inside a kubernetes container');
}
```
