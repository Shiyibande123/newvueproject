import VueRouter from "vue-router";
import index from '../../components/index.vue';
import list from '../../components/list.vue';
import detail from '../../components/detail.vue';
import register from '../../components/register.vue';
import login from '../../components/login.vue';
import cart from '../../components/cart.vue';
import sort from '../../components/sort.vue';
import bottom from '../../components/bottom.vue';
import me from '../../components/me.vue';

var router = new VueRouter({
    // 注意这里是routes，路线的意思，不是router，router是路由器
    routes: [
        {
            path: '/',
            component: bottom,
            children: [
                {
                    path: '/index',
                    component: index
                },
                {
                    path: '/cart',
                    component: cart
                }, {
                    path: '/sort',
                    component: sort
                },{
                    path:'/me',
                    component:me
                }
            ],
          redirect:'/index'

        }, {
            path: '/login',
            component: login
        }, {
            path: '/register',
            component: register
        }, {
            path: '/detail',
            component: detail
        }, {
            path: '/list',
            component: list
        }
    ]
})
export default router;