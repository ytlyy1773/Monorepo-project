# demo page

> 仅供实验

## Markdown Content

The count is: {{ count }}

<div>
    <input v-model="value" />
</div>


<script setup>
import { ref } from 'vue'
import { inputNumber, decimal, removeEndSymbol, objectIsEmptyKey, arrayEmptyLength } from 'user-demo777'

const value = ref(10)
</script>
