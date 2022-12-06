import {
    reqGetSearchInfo
} from "@/api"

// search模块的小仓库
const state = {
    // 仓库初始状态
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({
        // 当前这个 reqGetSearchInfo 函数在调用获取服务器参数的时候,至少传递一个空对象
        // params 形参:是当前用户派发 action 的时候,第二个参数传递过来的,至少是一个空对象
        commit
    }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
//计算属性
//项目当中getters主要的作用是：简化仓库中的数据（简化数据而生）
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
    //当前形参state，当前仓库中的state，并非大仓库中的那个state
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}