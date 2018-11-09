export default {
  //限制输入数字且保留两位有效数字
  limitNumber: {
    bind: function (el, binding) {
      var len = binding.value;
      el.handler = function () {
        if (len) {
          len = parseInt(len)
          if (el.value.length > len) {
            el.value = el.value.substring(0, len);
          }
        }
        if (/^\.$/.test(el.value)) {
          setTimeout(() => {
            el.value = "0."
          }, 0)
        }
        // el.value = el.value.replace(/^\.$/, '0.'); //首位小数点自动补零
        el.value = el.value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符  
        el.value = el.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
        el.value = el.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        el.value = el.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数  
        if (el.value.indexOf(".") < 0 && el.value != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
          el.value = parseFloat(el.value);
        }
      };
      el.addEventListener("input", el.handler);
    },
    unbind: function (el) {
      el.removeEventListener("input", el.handler);
    }
  },
  //限制数字
  limitNum: {
    bind: function (el, binding) {
      var len = parseInt(binding.value)
      el.handler = function () {
        if (el.value.length > len) {
          el.value = el.value.substring(0, len);
        }
        el.value = el.value.replace(/[^\d]/g, "");
      };
      el.addEventListener("input", el.handler);
    },
    unbind: function (el) {
      el.removeEventListener("input", el.handler);
    }
  }

}
