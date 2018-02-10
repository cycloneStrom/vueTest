<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="showMyPage()">开始我的第一个elementUI</h2>
    <router-link to="/view-a">测试我的路由</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is my first vue APP'
    }
  },
  methods: {
    showMyPage: function () {
      alert(111)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
