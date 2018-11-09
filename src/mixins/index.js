import {
  MessageBox
} from "mint-ui";
export default {
  methods: {
    goto(id) {
      this.$router.push(id);
    },
    goBack() {
      if (this.$route.path == this.$router.indexRouter) {
        context.finish();
      } else {
        this.$router.back();
      }
    },
    formataccount(DrcrFlag, value) {
      var label;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          switch (DrcrFlag) {
            case "1":
              DrcrFlag = "电子账户";
              break;
            case "2":
              DrcrFlag = "借记卡";
              break;
            case "3":
              DrcrFlag = "贷记卡";
              break;
            case "8":
              DrcrFlag = "借记卡";
              break;
          }
          label = DrcrFlag + "/****" + value.substring(value.length - 4);
          resolve(label);
        })
      });
    },
    formatAccount(value) {
      var label, DrcrFlag;
      return new Promise((resolve, reject) => {
        this.$axios.post("/portal/FindCardName.do", {
          AcctNbr: value
        }).then((res) => {
          var resData = JSON.parse(res.data.encryptBody)
          if (resData.Head.RespCode == "000000") {
            DrcrFlag = resData.Body.DrcrFlag
            switch (DrcrFlag) {
              case "1":
                DrcrFlag = '借记卡'
                break
              case "2":
                DrcrFlag = '贷记卡'
                break
              case "3":
                DrcrFlag = '准贷记卡'
                break
              case "4":
                DrcrFlag = '预付费卡'
                break
            }
            label = DrcrFlag + "/**** " + value.substring(value.length - 4)
            resolve(label);
          }
        })
      })
    },
    //限制用户输入金额格式
    limitMoneyNumber(obj) {
      obj = obj.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符  
      obj = obj.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
      obj = obj.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      obj = obj.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数  
      if (obj.indexOf(".") < 0 && obj != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
        obj = parseFloat(obj);
      }
      return obj;
    },

    //转换金额至标准格式
    transportMoneyToStrand(inStr) {
      console.log('inStr' + inStr)
      if (!inStr) return ""
      var valueArr;
      valueArr = inStr.toString().split(".");
      // 处理小数部分
      var dotStr, dotValue;
      if (valueArr.length == 2) {
        dotValue = valueArr[1];
        if (dotValue.length == 0) {
          dotStr = "00";
        } else {
          if (dotValue.length == 1)
            dotStr = dotValue + "0";
          else
            dotStr = dotValue.substring(0, 2);
        }
      } else {
        dotStr = "00";
      }
      var intStr = valueArr[0];
      return (intStr + "." + dotStr);
    },
    getPrecentDate() {
      var date = new Date();

      var year = date.getFullYear().toString();
      var month = (date.getMonth() + 1).toString();
      var day = date.getDate().toString();

      if (parseInt(month) < '10')
        month = '0' + month;
      if (parseInt(day) < '10')
        day = '0' + day;
      return (year + '-' + month + '-' + day);
    },
    isOpenAccount() {
      var UserGradeCd = context.sessionGetString("UserGradeCd");
      if (UserGradeCd != 3) {
        const htmls = `
            <div class="box">
              <div class="isunbind" style="color:#000000;">
                <div>您未开户，是否</div>
                <div>立即开户？</div>
              </div>
            </div>`;
        MessageBox.confirm("", {
            message: htmls,
            title: "",
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonClass: "cancelButton",
            confirmButtonClass: "confirmButton",
            confirmButtonText: "立即开户",
            cancelButtonText: "暂时不用"
          })
          .then(action => {
            if (action == "confirm") {
              context.launchStage("main.openaccount");
            }
          })
          .catch(err => {
            if (err == "cancel") {
              this.goBack();
            }
          });
      }
    }
  }
}
