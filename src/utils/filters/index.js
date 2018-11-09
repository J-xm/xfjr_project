export default {
  capitalize(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  //格式化金额
  numFormat(val) {
    if (!val) return '';

    val = val.toString().replace(/\$|\,/g, '');
    if (isNaN(val)) {
      val = "0";
    }
    let sign = (val == (val = Math.abs(val)));
    val = Math.floor(val * 100 + 0.50000000001);
    let cents = val % 100;
    val = Math.floor(val / 100).toString();
    if (cents < 10) {
      cents = "0" + cents
    }
    for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
      val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
    }

    return (((sign) ? '' : '-') + val + '.' + cents);
  },
  //模糊手机号
  blurPhoneNumber(value) {
    if (!value) return ''
    return value.substring(0, 3) + "****" + value.substring(value.length - 4);
  },
  //格式化账户
  accountNoFtr(value) {
    if (!value) return ''
    value = value.replace(/\s+/g, "");; //去除空格
    // value = "*".repeat(value.length - 4) + value.substring(value.length - 4);
    // value = value.replace(/(.{4})/g, "$1 ");
    return value.substring(0,4) + " **** **** "+value.substring(value.length - 4);
  }
}
