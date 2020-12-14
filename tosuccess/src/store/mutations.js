export default {
    setUserInfo(state, obj) {
        state.userInfo.name = obj.name
        state.userInfo.age = obj.age
    }
}