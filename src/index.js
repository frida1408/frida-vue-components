import Vue from "vue";
import CharLeft from "./components/charleft.vue";

const Components = {
  CharLeft
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
