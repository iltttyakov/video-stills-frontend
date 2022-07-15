export const BASE_URL = 'http://127.0.0.1:5000/'

const apiUrls = {

    videos: {
        list: 'videos',
        get: name => `videos/${name}`,
        getFrames: name => `videos/${name}/frames`,
        test: 'test'
    },

}

export default apiUrls