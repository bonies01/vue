<template>
  <div>
    <input ref="myInput" :value="inputParam" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script>
export default {
name: "MyInput",
  props:{
    inputParam:String
  }

}
</script>

<style scoped>

</style>