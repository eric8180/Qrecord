import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import judge from './components/judge.vue';
import Notid from './components/Notid.vue'; 
import Isid from './components/Isid.vue';
import Idright from './components/Idright.vue';


Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',component:judge},
        {path:'/Notid',component:Notid},
        {path:'/Isid',component:Isid},
        {path:'/Idright',component:Idright}

    ]
})
 