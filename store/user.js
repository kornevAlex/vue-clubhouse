export const state = () => ({
    userInfo: {
        id:0,
        fullName: '',
        avatarUrl: './default_avatar.png',
        phone: '',
    }
});

export const getters = {
    getUserInfo({ userInfo }) {
        return userInfo;
    },
    getfullName({ userInfo }) {
        if (userInfo.fullName) {
            return userInfo.fullName;
        }
        return '';
    },
    getAvatarUrl({ userInfo }) {
        if (userInfo.avatarUrl) {
            return userInfo.avatarUrl;
        }
    }
};

export const mutations = {
    setUserInfo(state, item) {
        state.userInfo = item
    },
    updateFullName(state, item) {
        state.userInfo.fullName = item
    },
    uploadsPhoto(state, item) {
        state.userInfo.avatarUrl = item
    },
};

export const actions = {
    async downloadAvatars({ commit }, item) {
        const formData = new FormData();

        formData.append('photo', item)

        const data = await this.$axios.$post('/upload', formData, {
            headers: {
                'Content-type': 'multipart/form-data',
            }
        })
        commit('uploadsPhoto', data.url)
    }
}