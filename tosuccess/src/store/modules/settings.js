import defaultSettings from '../../../settings'
import variables from '@/styles/variables.scss'
// 引入全局的方法
import $global from '@/utils/global'
const { sideTheme, showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  theme: $global.getStorage('theme') || variables.theme,
  sideTheme: sideTheme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

