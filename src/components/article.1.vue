<template>
  <div class="article">
    <div class="wrapper">
      <div class="title-box">
        <p class="title">{{title}}</p>
      </div>
      <div class="date-box">
        <p class="date">{{date}}</p>
        <i class="iconfont icon-xxx"></i>
      </div>
      <div class="content-box">
        <div class="content" v-for="(item,key) in newInfoData" :key="key">
          <div class="content-title-box" v-if="item.title">
            <p class="content-title">{{item.title}}</p>
          </div>
          <div class="content-text-box" v-if="item.content">
            <p class="content-text">{{item.content}}</p>
          </div>
          <div class="content-img-box" v-if="item.img">
            <img :ref="'box'+key" class="content-img" :src="item.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      newInfoData: "",
      title: "",
      date: ""
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("./static/json/article.json")
        .then(res => {
          this.newInfoData = res.data.contents;
          this.title = res.data.title;
          this.date = res.data.date;
          this.note = res.data.note;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.article {
  width: 100vw;
}
.wrapper {
  padding-left: 5.3333vw;
  padding-right: 5.3333vw;
  margin-top: 9.3333vw;
}
.title-box {
}
.title {
  line-height: 8vw;
  font-size: 6.4vw;
  /* font-weight: bold; */
}
.date-box {
  margin-top: 2.1333vw;
}
.date {
  font-size: 3.3333vw;
  color: #9e9e9e;
}
.content-box {
  margin-top: 2.1333vw;
  margin-bottom: 9.3333vw;
}
.content-title-box {
  margin-top: 2vw;
  margin-bottom: 2vw;
}
.content-title {
  font-size: 4.8vw;
  font-weight: bold;
}
.content-text-box {
  margin-top: 2vw;
  margin-bottom: 2vw;
}
.content-text {
  font-size: 4.8vw;
  line-height: 6.4vw;
}
.content-img-box {
  margin-top: 2vw;
  margin-bottom: 2vw;
}
.content-img {
  width: 89.3333vw;
  height: 158.6667vw;
}
</style>
