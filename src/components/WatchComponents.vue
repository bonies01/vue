<template>
  <div id = "computed_props">
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">

  </div>

</template>

<script>
export default {
name: "WatchComponents",
 data(){
  return {
    kilometers:0,
    meters:0
  }
 },
  watch:{
    kilometers:function (val){
      console.info(val);
      this.kilometers=val;
      this.meters=this.kilometers*1000;
    },
    meters:function (val){
      this.meters=val;
      this.kilometers=this.meters/1000;
    }
  }
}
</script>

<style scoped>

</style>