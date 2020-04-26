<template>
  <div class="detail">
    <div class="title">{{title}}</div>
    <div class="viceTitle">
      <div>撰稿人：{{author}}</div>
      <div>发表时间：{{time}}</div>
    </div>
    <div id="content"></div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      content: "",
      title: "",
      time: "",
      author: ""
    };
  },
  methods: {
    addContent() {
      let el = document.getElementById("content");
      el.innerHTML = this.content;
    }
  },
  mounted() {
    // fetch(``, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // }).then(res => {
    //   if (res.ok) {
    //     return res.json();
    //   }
    // }).then(res => {
    //   this.content = res.content;
    //   this.title = res.title;
    //   this.author = res.author
    //   this.addContent();
    // })

    this.content =
      '<p><strong> 2020年4月2日</strong>，由湖北省机械工程学会主办，中石化石油机械公司承办的“增材制造技术专题交流会”网络会议顺利召开。来自华科大、哈工大、武科大、江汉大学、长江大学、湖北汽车工学院等高等院校的科研人员；武钢研究院、东风装备、三灵新材料、恩硕科技、石化机械公司等企业的技术管理人员，及省机械工程学会秘书处和各专委会的秘书长，共175位出席了会议。</p> <p>湖北省机械工程学会朱永平秘书长主持会议。朱永平秘书长介绍了当前疫情下学会发挥作用组织开展高科技应用前沿学术交流的必要性。感谢为本次会议组织前期准备的相关领导和报告专家。感谢陈万诚监事长为本次会议筹备付出的努力。</p><p>中石化石油工程机械有限公司谢永金总经理致词。在武汉新冠疫情取得初步胜利、公司复工复产关键阶段，很高兴与大家共同开展增材制造领域技术交流，感谢史玉升教授和张海鸥教授给企业科技人员带来高端制造领域的前沿技术信息。</p>';
    this.title = "湖北省机械工程学会增材制造技术专题交流会线上会议顺利召开";
    this.time = "2020-4-16";
    this.author = "张三";
    this.addContent();
  }
};
</script>

<style >
#content p {
  text-indent: 2em;
}
.detail .title {
  text-align: center;
  width: 100%;
  font-size: 24px;
  color: #2d6bbd;
  font-weight: bold;
  line-height: 50px;
  border-bottom: 2px dashed #2d6bbd;
}

.detail .articleTitle {
  width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  /* display: inline-block; */
}
.detail .viceTitle {
  margin: 10px 0;
  width: 100%;
  text-align: center;
  text-align: center;
  color: #aaaaaa;
}
.detail .viceTitle div{
  display: inline-block;
  margin: 0 15px;
}
#content {
  padding: 0 40px;
  min-height: 629px;
}
</style>