import Vuex from 'vuex';
// 引入 modules
import user from './modules/user'
import settings from './modules/settings'

import getters from './getters'
import mutations from './mutations';




export default Vuex.createStore({
  modules: {
    user,
    settings
  },
  getters,
  mutations
});
