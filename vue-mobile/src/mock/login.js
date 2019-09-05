//引入mockjs
const Mock = require("mockjs");
//获取random对象
const Random = Mock.Random
const loginData = (options) => {
  let data = JSON.parse(options.body)
  const loginList = {
    userName: 'weijunlong',
    passWord: '123456'
  }
  if(Mock.valid(loginList, options)) {
  	console.log(loginList.userName)
  	console.log(loginList.passWord)
  	console.log(data.username)
  	console.log(data)
  	
    if(loginList.userName === data.username && loginList.passWord === data.password) {
      return {
        data: {
          status: 200,
          msg: "success"
        }
      }
    }else{
    	return {
        data: {
          status: 500,
          msg: "error"
        }
      }
    }
  }

}
Mock.mock("/local/login.do", "post", loginData);
export default loginData