<template>
  <div>
    <button v-on:click="increaseMethod">{{increase}}</button>
  </div>
</template>

<script>
export default {
name: "EventComponents",
  data(){
  return {
    increase:0
  }
  },
  methods:{
    increaseMethod:function (){
      this.increase=this.increase+1;
      this.$emit(" increaseEvent");
      return this.increase;
    }
  }
}
</script>

<style scoped>

</style>