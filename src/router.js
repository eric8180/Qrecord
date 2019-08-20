import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import QuestionIndex from './components/QuestionIndex.vue';
import QuestionName from './components/QuestionName.vue'; 

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',component:QuestionIndex},
        {path:'/questionname',component:QuestionName}
    ]
})
 