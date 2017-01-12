

var keyMap = arr => arr.map(v => {
  return {
    name: v,
    value: v
  }
});

var _arrMap = arr => arr.map((value, i) => {
  return {
    value,
    index: i + 1
  }
});

// 把对象转换成 数组
var _objKeyValue = obj => {
  let arr = [];
  for (let o in obj) {
    arr.push({
      name: obj[o],
      value: o
    });
  }
  return arr;
};


const CONSTANT = {

  // home页的tab切换栏
  TAB_DATA : _arrMap(['最快', '最热', '新手区', '10元']),
  // 底部的footBar列表
  FOOT_LIST : _arrMap(['首页','揭晓','分类','发现','我的'])
 
};

export default CONSTANT;
