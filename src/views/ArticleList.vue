<template>
  <div class="articleLists">
    <div class="title">{{titleArr[cid]}}</div>
    <ul class="listsContainer">
      <li class="list" v-for="list in currentLists" :key="list.id" @click="toDetail(list)">
        <div class="time">[{{list.time}}]</div>
        <div class="articleTitle">
          {{list.title}}
          <!-- {{list.id}} -->
        </div>
      </li>
    </ul>
    <div class="pagination">
      <li :class="{'disabled': currentPage == 0}">
        <div @click="gotoPage(currentPage - 1)">«</div>
      </li>
      <li :class="{'disabled': currentPage == 0}">
        <div @click="gotoPage(0)">首页</div>
      </li>
      <li v-for="p in totalPage" :class="{'active': currentPage == p-1}" :key="p">
        <div @click="gotoPage(p-1)">{{p}}</div>
      </li>
      <li :class="{'disabled': currentPage == totalPage-1}">
        <div @click="gotoPage(totalPage-1)">尾页</div>
      </li>
      <li :class="{'disabled': currentPage == totalPage-1}">
        <div @click="gotoPage(currentPage + 1)">»</div>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleList",
  data() {
    return {
      cid: 0,
      titleArr: ["中国科技史新闻", "学会新闻", "学会党建"],
      lists: [],
      currentLists: [],
      currentPage: 0,
      totalPage: 0
    };
  },
  methods: {
    init() {
      this.cid = this.$route.params.cid;
      let url = ['/api/history/news', '/api/study/news', '/api/study/cpc/articles']
      fetch(`${url[this.cid]}?page=${this.currentPage}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(res => {
        if(this.cid == 2){
          this.lists = res.data.articles;
        }else{
          this.lists = res.data.news;
        }
        this.currentLists = this.lists.slice(0, 18);
        this.totalPage = res.page_count;
      });

      // this.lists = [];
      // for (let i = 0; i < 30; i++) {
      //   this.lists.push({
      //     title: "湖北省机械工程学会增材制造技术专题交流会线上会议顺利召开",
      //     time: "2020-4-16",
      //     id: i
      //   });
      // }
      // this.currentLists = this.lists.slice(0, 18);
      // this.totalPage = Math.ceil(this.lists.length / 18);
    },
    gotoPage(page) {
      console.log(page);
      if (this.currentPage != page && page >= 0 && page < this.totalPage) {
        this.currentLists = this.lists.slice(page * 18, (page + 1) * 18);
        this.currentPage = page;
      }
      console.log(this.currentPage);
    },
    toDetail(list) {
      this.$router.push({
        name: "Detail",
        params: {
          cid: this.cid,
          aid: list.id
        }
      });
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    $route: function() {
      this.init();
    }
  }
};
</script>
<style scoped>
.title {
  text-align: center;
  width: 100%;
  font-size: 24px;
  color: #2d6bbd;
  font-weight: bold;
  line-height: 50px;
  border-bottom: 2px solid #2d6bbd;
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
.listsContainer {
  height: 602px;
}
.pagination {
  margin: 23px auto 0;
  width: 600px;
  display: flex;
  justify-content: center;
}
.pagination li {
  list-style: none;
  /* display: inline-block; */
  margin: 3px;
  border: 1px solid #2d6bbd;
  color: #2d6bbd;
  height: 30px;
  min-width: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
}
.disabled {
  cursor: Default !important;
  border: 1px solid #e5e5e5 !important;
}
.active {
  cursor: Default !important;
  border: 1px solid #000 !important;
  color: #000 !important;
}
</style>