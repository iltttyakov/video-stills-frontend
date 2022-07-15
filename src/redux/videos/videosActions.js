import videosActionTypes from "./videosActionTypes";
import createAction from "../createAction";
import api from "../../api/api";
import {dispatch} from "../store";

const list = () => {
    return dispatch => {
        dispatch(createAction(videosActionTypes.list.start))
        api.videos.list()
            .then(response => {
                dispatch(createAction(videosActionTypes.list.success, response.data))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(videosActionTypes.list.finish))
            })
    }
}

const videoModalOpen = () => dispatch(createAction(videosActionTypes.videoModal.open))
const videoModalClose = () => dispatch(createAction(videosActionTypes.videoModal.close))

const get = name => {
    return dispatch => {
        dispatch(createAction(videosActionTypes.get.start))
        api.videos.get(name)
            .then(response => {
                dispatch(createAction(videosActionTypes.get.success, response.data))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(videosActionTypes.get.finish))
            })
    }
}

const getFrames = (name, timecode) => {
    return dispatch => {
        dispatch(createAction(videosActionTypes.getFrames.start))
        api.videos.getFrames(name, timecode)
            .then(response => {
                dispatch(createAction(videosActionTypes.getFrames.success, response.data))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(videosActionTypes.getFrames.finish))
            })
    }
}

const framesModalOpen = () => dispatch(createAction(videosActionTypes.framesModal.open))
const framesModalClose = () => dispatch(createAction(videosActionTypes.framesModal.close))

export default {
    list: () => dispatch(list()),
    get: name => dispatch(get(name)),
    getFrames: (name, timecode) => dispatch(getFrames(name, timecode)),
    videoModalOpen, videoModalClose,
    framesModalOpen, framesModalClose,
}