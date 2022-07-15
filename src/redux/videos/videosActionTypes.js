const videosActionTypes = {

    list: {
        start: 'VIDEOS_LIST_START_ACTION',
        success: 'VIDEOS_LIST_SUCCESS_ACTION',
        finish: 'VIDEOS_LIST_FINISH_ACTION',
    },

    get: {
        start: 'VIDEOS_GET_START_ACTION',
        success: 'VIDEOS_GET_SUCCESS_ACTION',
        finish: 'VIDEOS_GET_FINISH_ACTION',
    },

    videoModal: {
        open: 'VIDEO_MODAL_OPEN_ACTION',
        close: 'VIDEO_MODAL_CLOSE_ACTION',
    },

    getFrames: {
        start: 'VIDEOS_GET_FRAMES_START_ACTION',
        success: 'VIDEOS_GET_FRAMES_SUCCESS_ACTION',
        finish: 'VIDEOS_GET_FRAMES_FINISH_ACTION',
    },

    framesModal: {
        open: 'FRAMES_MODAL_OPEN_ACTION',
        close: 'FRAMES_MODAL_CLOSE_ACTION',
    },

}

export default videosActionTypes