<template>
  <div>
    <input :value="hasChecked" @input="$emit('changed',$event.target.value)">
  </div>
</template>

<script>
export default {
name: "MyCheckBox",
  props:{
    hasChecked:Boolean,
  },
  model:{
    prop:'checked',
    event:'changed'
  }
}
</script>

<style scoped>

</style>