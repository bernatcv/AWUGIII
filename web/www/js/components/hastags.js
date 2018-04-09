"use strict"

Vue.use(VueMaterial.default)

var example = {
  name: "Static",
  data: function data() {
    return {
      cities: ["New York", "Amsterdam", "Tokyo", "Rome"]
    }
  }
}

var app = new Vue(example)

app.$mount("#app")


// JavaScript Document