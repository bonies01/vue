<template>
  <div id="app">
    <button @click="get">请求后台验证</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hello msg="this is hello components">
      this is app slot
      <br/>
   <h1 slot="slot1"> this is app slot1</h1>
    </hello>
    <watch-components></watch-components>
    <event-components v-on:increaseEvent="count">{{count}}</event-components>
    <event-components v-on:increaseEvent="count">{{count}}</event-components>
    <event-components v-on:increaseEvent="count">{{count}}</event-components>
    <MyInput v-model="inputValue"></MyInput>
    <h1>{{inputValue}}</h1>
    <my-check-box v-model="checkValue"></my-check-box>
    <h1>{{checkValue}}</h1>
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <br/>
    <router-link to="/hello">hello</router-link>
    <br/>
    <router-link to="/WatchComponents">WatchComponents</router-link>
    <br/>
    <router-link to="/EventComponents">EventComponents</router-link>
    <br/>
    <router-link to="/MyInput">MyInput</router-link>
    <br/>
    <router-link to="/MyCheckBox">MyCheckBox</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import hello  from "@/components/hello";
import  WatchComponents from '@/components/WatchComponents.vue'
import EventComponents from "@/components/EventComponents";
import MyInput from "@/components/MyInput";
import MyCheckBox from "@/components/MyCheckBox";
//import {request} from "@/request";
import axios from 'axios';
export default {
  name: 'App',
  components: {
    HelloWorld,
    hello,
    WatchComponents,
    EventComponents,
    MyInput,
    MyCheckBox
  },
  methods:{
      get:function (){
        axios.get('/api/fegin/brother/test1').then(res=>{
          console.info(res)
        })
       // request('/fegin/brother/test1',{}).then(res=>{
       //   console.info(res)
      //  })
      }
  },
  data(){
    return {
      count:0,
      inputValue:0,
      checkValue:'checked'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
