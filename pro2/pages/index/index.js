//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    messageArray: [
      
    ],
    ahide:0,
    animationData:{
     
    },
  },
 
  onLoad: function () {
   this.getMessage()
  },
  getMessage:function(){
    var obj=this;
    wx.request({
      url: 'http://192.168.1.101/momo/index.php/Home/Index/index',
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        // console.log(res)
        obj.setData({
          messageArray: res.data
        })
      }
    })
  },
  showdialog:function(e){
    var that = this;
    var toggleBtnVal = that.data.ahide;
   
    var ids = e.currentTarget.dataset.ids;

    if (toggleBtnVal == ids) {
      that.setData({
        ahide: 0
      })

    }else {
      that.setData({
        ahide: ids,
        
      })
     
     
    }
  }
})
