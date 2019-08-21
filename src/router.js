import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import judge from './components/judge.vue';
import Notid from './components/Notid.vue'; 
import Isid from './components/Isid.vue';
import Idright from './components/Idright.vue';
import Idfalse from './components/Idfalse.vue';
import Nameright from './components/Nameright.vue';
import Namefalse from './components/Namefalse.vue';


Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',component:judge},
        {path:'/Notid',component:Notid},
        {path:'/Isid',component:Isid},
        {path:'/Idright',component:Idright},
        {path:'/Idfalse',component:Idfalse},
        {path:'/Nameright',component:Nameright},
        {path:'/Namefalse',component:Namefalse}

    ]
})
 