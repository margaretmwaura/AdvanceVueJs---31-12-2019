import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

    strict : true,
    state:{
        name : 'Maggie'
    },
    mutations : {

        changename(state,newname)
        {
            state.name = newname
        }
    },
    getters :
        {
            currentuser : state => {
                return state.name
            },
        },
    actions:
        {
        perfomchanhing ({ commit },name)
        {
            commit('changename',name);
        },
       },

});
// store.commit('increment');
// console.log(store.state.count);
