<template>
  <div class="home">
    <Column title="中国科技史新闻" :lists="scienceLists" :columnID="0" />
    <Column title="学会新闻" :lists="newsLists" :columnID="1"/>
    <Column title="学会党建" :lists="partyLists" :columnID="2"/>
  </div>
</template>

<script>
import Column from "@/components/Column.vue";

export default {
  name: "Home",
  components: {
    Column
  },
  data() {
    return {
      scienceLists: [],
      newsLists: [],
      partyLists: [],
    };
  },
  mounted() {
      // fetch(``, {
      //   method: "G ET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // token: this.token
      //   }
      // }).then(res => {
      //   if (res.ok) {
      //     return res.json();
      //   }
      // }).then(res => {
      //   this.list = res.list;
      // })

      let lists = []
      for (let i = 0; i < 10; i++) {
        lists.push({
          title: "湖北省机械工程学会增材制造技术专题交流会线上会议顺利召开",
          time: "2020-4-16",
          id: i
        });
      }
      this.scienceLists = lists;
      this.newsLists = lists;
      this.partyLists = lists;
      
  }
  
};
</script>
