const modulesA = {
	state: {
		name: 'zhangsan'
	},
	mutations: {
		updateName(state, playload) {
			state.name = playload
		}
	},
	actions: {
		aUpdateName(context) {
			setTimeout(() => {
				context.commit('updateName', 'wangwu')

			}, 1000);
		}
	}
}
export default modulesA