<template>
  <div class="column">
    <div class="titleContainer">
      <div class="title">{{ title }}</div>
      <div class="dot" @click="toList()">···</div>
    </div>
    <div class="lineContainer">
      <div class="line blue" :class="{bluelong: title.length > 4}"></div>
      <div class="line grey" :class="{greyshort: title.length > 4}"></div>
    </div>
    <ul class="listsContainer">
      <li class="list" v-for="list in lists.slice(0, 5)" :key="list.id" @click="toDetail(list)">
        <div class="time">[{{list.time}}]</div>
        <div class="articleTitle">{{list.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    title: String,
    lists: Array,
    columnID: Number
  },
  methods: {
    toDetail(list) {
      this.$router.push({
        name: "Detail",
        params: {
          cid: this.columnID,
          aid: list.id,
        }
      });
    },
    toList() {
      this.$router.push({
        name: "ArticleList",
        params: {
          cid: this.columnID
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleContainer {
  padding: 10px 0 0 10px;
}
.title {
  font-size: 20px;
  color: #2d6bbd;
  font-weight: bold;
  display: inline-block;
}
.line {
  display: inline-block;
  border-top: 2px solid;
  height: 0.5px;
  transform: skewX(-45deg);
}
.blue {
  border-color: #2d6bbd;
  background: #2d6bbd;
  width: 10%;
  margin-right: 5px;
}
.grey {
  border-color: #999999;
  background: #999999;
  width: 89%;
}
.bluelong {
  width: 17%;
}
.greyshort {
  width: 82%;
}
.dot {
  float: right;
  letter-spacing: 6px;
  color: #2d6bbd;
  font-weight: bold;
  margin-top: 7px;
  cursor: pointer;
  margin-right: 40px;
}
.list {
  margin: 10px 0;
  cursor: pointer;
}
.articleTitle {
  width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  /* display: inline-block; */
}
.time {
  float: right;
  margin-right: 40px;
}
.listsContainer{
  height: 160px;
}
</style>
