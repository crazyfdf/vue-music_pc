const mutations = {
	increment(state) {
		state.count++
	},
	decrement(state) {
		state.count--
	},
	addStudent(state, stu) {
		state.students.push(stu)
	},
	updateInfo(state) {
		state.info['address'] = '洛杉矶'
		// Vue.set(state.info, 'address', '洛杉矶')
		state.info.name = 'dddd'
		delete state.info.name
		// Vue.delete(state.info, 'age')
	}
}
export default mutations