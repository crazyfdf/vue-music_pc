const actions = {
	aUpdateInfo(context, payload) {
		return new Promise((resolve, reject) => {
			console.log(payload);
			setTimeout(() => {
				context.commit('updateInfo');
				resolve('11111111')
			}, 1000);
		})

	}
}
export default actions