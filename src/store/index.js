import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    profile: {
      name: "",
    },
  },
  mutations: {
    decrement(state) {
      state.count--;
    },
    increment(state) {
      state.count++;
    },
    updateUser(state, payload) {
      state.profile = payload;
    },
  },
  actions: {
    decrement(context) {
      context.commit("decrement");
    },
    increment(context) {
      context.commit("increment");
    },
    updateUser(context, data) {
      console.log(data);
      context.commit("updateUser", data);
    },
  },
  modules: {},
});
