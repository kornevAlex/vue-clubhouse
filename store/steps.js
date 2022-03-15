export const state = () => ({
    step:0,
})

export const getters = {
    getStep({ step }) {
        return step;
    }
}

export const mutations = {
    nextSteps(state) {
        state.step += 1;
    },
    getActualStep(state) {
        const data = '';

        state.step = 3

        // const json = JSON.parse(data);
        // if(json.phone) {
        //     state.step = 5
        // } else if(json.fullname) {
        //     state.step = 4
        // }
    }
}

export const actions = {
    async sendSMS({ commit }, phone) {

        const result = await this.$api.post(`/auth/phone`, {}, {
            params: {
                phone,
            },
        });
        if(result.status === "OK") {
            commit("nextSteps");
            commit("user/setUserPhone", phone, { root: true })
        }
    },
    async confirmCode({ commit }, code) {
        console.log(code);
        await this.$api.post('/auth/phone/activate', {}, {
            params: {
                code
            }
        })
    }
}