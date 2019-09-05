import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
	state:{
		count:0,
		customer:{
			
		}
	},
	//异步数据
	actions:{
		Handle(ctx,param){
			ctx.state.count += param
			ctx.commit('Mutation',ctx.state.count)
		},
		AddCustomer(ctx,param){
			ctx.state.customer = param
			ctx.commit('Mutation2',ctx.state)
		}
	},
	//同步数据
	mutations:{
		Mutation(ctx,payload){
			ctx.state = payload
		},
		Mutation2(ctx,payload){
			ctx.state = payload.customer
		},
	},
	getter:{
		
	}
})
	
