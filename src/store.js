import createLogger from 'vuex/dist/logger'   //vuex 日志插件。
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
const loggerconfig = {
    collapsed: false, // 自动展开记录的 mutation
    filter(mutation) {
        // 若 mutation 需要被记录，就让它返回 true 即可
        // 顺便，`mutation` 是个 { type, payload } 对象
        return mutation.type !== "aBlacklistedMutation"
    },
    transformer(state) {
        // 在开始记录之前转换状态
        // 例如，只返回指定的子树
        return state.subTree
    },
    mutationTransformer(mutation) {
        // mutation 按照 { type, payload } 格式记录
        // 我们可以按任意方式格式化
        return mutation
    },
    logger: console, // 自定义 console 实现，默认为 `console`
};

export default new Vuex.Store({
    state: {
        orderTypes: [],
        orders: [],
        order: {},
        tabActive: 0,
        leftActive: 0,
        rightActive: 0,
    },
    mutations: {
        ordertypes(state, payload) {
            state.orderTypes = payload;
            this.commit("orders", 0);
            this.commit("order", 0);
        },
        orders(state, payload) {
            if (state.orderTypes.length > payload) {
                state.orders = state.orderTypes[payload].orders;
            }
        },
        order(state, payload) {
            if (state.orders.length > payload) {
                state.order = state.orders[payload];
            }
        },
        tabActive(state, payload) {
            state.tabActive = payload;
        },
        leftActive(state, payload) {
            state.leftActive = payload;
        },
        rightActive(state, payload) {
            state.rightActive = payload;
        }
    },
    actions: {},
    plugins: [createLogger(loggerconfig)]
});

