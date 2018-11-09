<template>
  <div class="Main">
    <mt-header title="主页"></mt-header>
    <div @click="goto('Login')">
      <mt-cell title="登录" is-link></mt-cell>
    </div>
    <div @click="goto('Validity')">
      <mt-cell title="登陆后开户-身份验证" is-link></mt-cell>
    </div>
    <div @click="goto('AccountDetails')">
      <mt-cell title="账户明细查询" is-link></mt-cell>
    </div>
    <div @click="goto('MyBankCard')">
      <mt-cell title="我的银行卡" is-link></mt-cell>
    </div>
    <div @click="goto('depositList')">
      <mt-cell title="存款" is-link></mt-cell>
    </div>
    <div @click="goto('FinanceProduct')">
      <mt-cell title="易理财" is-link></mt-cell>
    </div>
    <div @click="goto('Life')">
      <mt-cell title="生活" is-link></mt-cell>
    </div>
    <div @click="goto('redenvelopes')">
      <mt-cell title="我的红包" is-link></mt-cell>
    </div>
    <div @click="goto('MyIntegral')">
      <mt-cell title="我的积分" is-link></mt-cell>
    </div>
    <div @click="goto('AvailableCoupons')">
      <mt-cell title="可使用的卡券" is-link></mt-cell>
    </div>
    <div @click="goto('AnnouncementLists')">
      <mt-cell title="公告" is-link></mt-cell>
    </div>
    <div @click="goto('BankCardDetails')">
      <mt-cell title="支持银行卡列表" is-link></mt-cell>
    </div>
    <div @click="goto('H5Transfer')">
      <mt-cell title="跳转第三方H5" is-link></mt-cell>
    </div>
    <div @click="goto('UploadIDCard')">
      <mt-cell title="上传身份证" is-link></mt-cell>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>
