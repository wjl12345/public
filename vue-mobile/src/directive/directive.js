import Vue from 'vue'
const focus = Vue.directive('focus',{
	inserted:function(el){
		el.focus();
		el.setAttribute('placeholder','请输入金额')
		el.style.color = 'red'
	}
})
