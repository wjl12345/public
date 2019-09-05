//自定义过滤器，名叫：text,金额格式化
exports.test = (value)=>{
	if(isNaN(Number(value)) === false){
	var reg = /\B(?=(?:\d{3})+$)/g ;
	var str = Number(value).toFixed(2) + '';
    var intSum = str.substring(0, str.indexOf('.')).replace(reg, ','); // 取到整数部分
    var dot = str.substring(str.length, str.indexOf('.')); // 取到小数部分搜索
    value = intSum + dot
		value = '¥'+value
	}else{
		value = '请输入数字'
	}
	return value 
};
//
exports.status = (value)=>{
	var status = ''
	switch(value){
	  case 0:{
	  	status = '等待审核';
	  	break;
	  }
	  case 1:{
	  	status = '审核通过';
	  	break;
	  }
	  case 2:{
	  	status = '审核未通过';
	  	break;
	  }
	}
	return status
}
//日期格式化过滤器
exports.date = (value)=>{
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	m = m>10?m:"0"+m;
	d = d>10?d:"0"+d;
	value = y+"."+m+"."+d;
	return value;
}
