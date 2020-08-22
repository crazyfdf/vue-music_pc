import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modulesA from './modules/modulesA'
Vue.use(Vuex)

const state = {
	count: 1000,
	students: [{
			id: 110,
			name: 'aaa',
			age: 18
		},
		{
			id: 111,
			name: 'bbb',
			age: 19
		},
		{
			id: 112,
			name: 'ccc',
			age: 20
		},
		{
			id: 113,
			name: 'ddd',
			age: 21
		},
	],
	info: {

		name: 'www',
		age: 18,
		height: 1.55
	},
}
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		a: modulesA
	}
})

export default store