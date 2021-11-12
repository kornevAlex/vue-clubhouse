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
    }
}