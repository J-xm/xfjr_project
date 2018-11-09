<template>
  <div class="bank-card-list">
    <mt-index-list>
      <mt-index-section v-for="(items,key) in cardList" :key="key" :index="items.index">
        <div class="mint-cell" v-for="(item,key) in items.details" :key="key">
          <div class="mint-cell-wrapper">
            <div class="my-cell-title mint-cell-title">
              <div class="my-cell-title-left">
                <div class="bank-icon-box">
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="item.icon"></use>
                  </svg>
                </div>
                <span class="mint-cell-text">{{item.name}}</span>
              </div>
              <div class="my-button-box">
                <div class="my-button" @click="goBack">
                  <span>确认</span>
                  <svg class="icon icon-htmal5icon22" aria-hidden="true">
                    <use xlink:href="#icon-htmal5icon22"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      cardList: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("./static/json/bankCardList.json")
        .then(res => {
          this.cardList = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.bank-card-list {
  width: 100vw;
}
.my-cell-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.my-cell-title:hover .my-button-box {
  display: block;
}
.my-cell-title-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon {
  width: 7.467vw;
  height: 7.467vw;
}
.bank-icon-box {
  width: 11.2vw;
  height: 11.2vw;
  border: 0.0133rem solid #f1f1f1;
  border-radius: 2.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mint-cell-text {
  font-size: 4.267vw;
  margin-left: 2.667vw;
}
.mint-indexsection-index {
  font-size: 4vw;
  color: #5f5f5f;
}
.my-cell-button {
  width: 14.667vw;
  height: 6.667vw;
  background-color: #f0f0f7;
  border-radius: 3.333vw;
}
.my-button-box {
  display: none;
}
.my-button {
  width: 14.667vw;
  height: 6.667vw;
  background-color: #f0f0f7;
  border-radius: 3.333vw;
  font-size: 3.2vw;
  color: #2197d4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.icon-htmal5icon22 {
  height: 2.8vw;
  width: 2.8vw;
  margin-left: 0.533vw;
}
.mint-cell-wrapper {
  height: 14.8vw;
}
</style>
