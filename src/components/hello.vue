<template>
  <div id="hello">
    <h1>{{hello}}</h1>
    <h1>{{msg}}</h1>
    <h1>{{m1("this is input param")}}</h1>
    <h1>{{c1("this is computed input param")}}</h1>
    <slot>this is hello components default slot</slot>
    <slot name ="slot1">my name is slot1</slot>
  </div>
</template>

<script>
export default {
  name: "hello",
  props:{
   msg:String
  },
  data(){
    return {
      hello:"hello vue"
    }
  },
  methods:{
    m1:function (name){
      return "this is m1"+name;
    }
  },
  computed:{
    c1(){
      return function (param){
        return "this is computed"+","+param;
      }
    }
  },

}
</script>

<style scoped>

</style>