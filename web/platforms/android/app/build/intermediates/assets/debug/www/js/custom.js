// JavaScript Document
"use strict"

Vue.use(VueMaterial.default)

var example = {
  name: "DuplicatedFeedback",
  data: function data() {
    return {
      chips: ["Pop", "Rock", "Jazz", "Metal"]
    }
  }
};

var app = new Vue(example)

app.$mount("#app")