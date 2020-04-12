# frida-vue-components

## Installation

```
npm install --save frida-vue-components
```

Then...

```
import 'frida-vue-components'
```

## Content

- charleft
- ...

## Usage

```
<template>
  <div id="app">
    <hr />
    <input v-model="text" />
    <hr />
    <char-left :text="text" :maxChars="25"></char-left>
  </div>
</template>

<script>
import 'frida-vue-components'

export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
```
