import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import QuestionHome from './components/QuestionIndex.vue'
import judge from './components/QuestionName/judge.vue';
import Notid from './components/QuestionName/Notid.vue'; 
import Isid from './components/QuestionName/Isid.vue';
import Idright from './components/QuestionName/Idright.vue';
import Idfalse from './components/QuestionName/Idfalse.vue';
import Nameright from './components/QuestionName/Nameright.vue';
import Namefalse from './components/QuestionName/Namefalse.vue';


Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',component:QuestionHome},
        {path:'/judge',component:judge},
        {path:'/Notid',component:Notid},
        {path:'/Isid',component:Isid},
        {path:'/Idright',component:Idright},
        {path:'/Idfalse',component:Idfalse},
        {path:'/Nameright',component:Nameright},
        {path:'/Namefalse',component:Namefalse}

    ]
})
 