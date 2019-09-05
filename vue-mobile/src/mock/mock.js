// 引入mockjs
const Mock = require("mockjs");
// 获取 mock.Random 对象
const Random = Mock.Random;
// 我的账户
const data = (options)=>{
	//console.log(options)
	let page = JSON.parse(options.body).pageNum
	let pageSize = JSON.parse(options.body).pageSize
	//console.log(page)
	//console.log(pageSize)
	return Mock.mock({
		success: true,
		DataList: [
		{name:'张三',age:'23',dept:'开发部',position:'项目经理'},
		{name:'李四',age:'24',dept:'业务部',position:'业务经理'},
		{name:'王五',age:'19',dept:'市场部',position:'市场经理'},
		{name:'赵六',age:'22',dept:'公关部',position:'公关部长'},
		{name:'钱七',age:'20',dept:'营销部',position:'营销部长'},
		]
	});
};
Mock.mock("/local/acccountManage.do", "post", data);
export default data