import Vue from "vue";
import VueRouter from "vue-router";
import EventComponents from "@/components/EventComponents";
import hello from "@/components/hello";
import HelloWorld from "@/components/HelloWorld";
import MyInput from "@/components/MyInput";
import MyCheckBox from "@/components/MyCheckBox";
import WatchComponents from "@/components/WatchComponents";
Vue.use(VueRouter)
const routes=[
    {path:"/EventComponents", component: EventComponents},
    {path:"/hello", component: hello},
    {path:"/HelloWorld", component: HelloWorld},
    {path:"/MyInput", component: MyInput},
    {path:"/MyCheckBox", component: MyCheckBox},
    {path:"/WatchComponents", component: WatchComponents}
]
const router=new VueRouter({routes})
export default router