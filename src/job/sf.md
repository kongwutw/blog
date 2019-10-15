# js 开发面试常考基础算法题

## 1 不需要借助第三个临时变量，实现两个变量的交换
```
function swap（a,b）{
  b = b - a;
  a = a + b;
  b = a - b;
  return [a,b];
}
```

## 2 确保字符串的每个单词首字母都大写，其余部分小写
```
function titleCase(str) {
  var lstr = str.toLowerCase().split(' ');
  for(var i = 0 ; i < lstr.length; i++) {
    lstr[i] = lstr[i][0].toUpperCase() + lstr[i].substring(1, lstr[i].length);
  }
  var res = lstr.join(' ');
  return res;
}
titleCase("good night"); // Good Night
```

## 3 找出正整数 数组的最大差值
```
function getMaxPro(arr){
  var min = arr[0];
  var max = 0;
  for (var i=0;i<arr.length;i++){
    var current = arr[i];
    min = Math.min(min, current);
    var res = currenr - min;
    max = Math.max(max, res);
  }
  return max;  
}
```

## 4 清除字符串前后的空格（兼容所有浏览器）
```
function trim(str) {
  if (str & typeof str === "string") {
    return str.replace(/(^s*)|(s*)$/g, ''); //去除前后空白符
  }
}
```

## 5 去掉一组整型数组中重复的值
```
let unique =  function(arr){
  let hash={};
  let data=[];
  for (let i=0;i < arr.length; i++){
    if (!hash[arr[i]])  {
      hash[arr[i]] = true;
      data.push(arr[i]);
    }      
  }
  return data
}
```

## 6 翻转字符串
- split（）字符串转成数组；
- reverse()翻转数组；
- join()数组转化成字符串。
```
function reverseString(str){    
  return str.split('').reverse().join('');	
}
```

## 7 找到提供的句子中最长的单词，并计算它的长度。
- 转化成数组；
- 根据元素长度排序；
- 输出最长元素并返回长度。
```
function findLongestString(str){
  var arr = str.split(' ');	
  var arrSort = arr.sort(function (a,b) {	   
    return b.length - a.length;
  });
  return [arrSort[0], arrSort[0].length];
}
```

## 8 截断一个字符串，如果字符串的长度比指定的参数num长，则把多余的部分用...来表示
```
function truncate(str, num){
  var trStr = str.slice(0, num);
  if (trStr.length > num) {					
    return trStr.concat('...');
  } else {
    return str;
  }
}
```

## 9 判断一个字符串中出现次数最多的字符，统计这个次数
```
funcion findMaxStrCount(str) {
  var countObj = {};
  var max = '';
  for(var i = 0; i < str.length; i++) {
    var cur = str[i];
    if(!countObj[cur]) {
      countObj[cur] = 0;
    } 
    countObj[cur]++;
    if(max === '' || countObj[cur] > countObj[max]) { max = cur; }
  }
  return [max, countObj[max]];
}

```

## 10 快速排序（Quick Sort）
快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：
```
var quickSort = function(arr) {
　if (arr.length <= 1) { return arr; }
　var pivotIndex = Math.floor(arr.length / 2);
　var pivot = arr.splice(pivotIndex, 1)[0];
　var left = [];
　var right = [];
　for (var i = 0; i < arr.length; i++){
　　if (arr[i] < pivot) {
　　　left.push(arr[i]);
　　} else {
　　　right.push(arr[i]);
　　}
　}
　return quickSort(left).concat([pivot], quickSort(right));
};
```