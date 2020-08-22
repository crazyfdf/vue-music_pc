const getters = {
	powerCount(state) {
		return state.count * state.count
	},
	more20stu(state) {
		return state.students.filter(s => s.age >= 20);
	},
	moreAgeStu(state) {
		return age => {
			return state.students.filter(s => s.age >= age)
		}
	}
}
export default getters