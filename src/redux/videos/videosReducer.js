import videosActionTypes from "./videosActionTypes";

const initialState = {
    list: [],
    listIsLoading: false,

    active: null,
    activeIsLoading: false,

    videoModalIsOpen: false,

    framesList: [],
    framesListIsLoading: false,
    framesModalIsOpen: false,
}


export default function videosReducer(state = initialState, action) {
    switch (action.type) {

        /** LIST **/
        case videosActionTypes.list.start:
            return {...state, list: [], listIsLoading: false}
        case videosActionTypes.list.success:
            return {...state, list: action.payload}
        case videosActionTypes.list.finish:
            return {...state, listIsLoading: false}
        /** END LIST **/


        /** VIDEO MODAL **/
        case videosActionTypes.videoModal.open:
            return {...state, videoModalIsOpen: true}
        case videosActionTypes.videoModal.close:
            return {...state, videoModalIsOpen: false, active: null}
        /** END VIDEO MODAL **/


        /** VIDEO GET **/
        case videosActionTypes.get.start:
            return {...state, active: null, activeIsLoading: false}
        case videosActionTypes.get.success:
            return {...state, active: action.payload}
        case videosActionTypes.get.finish:
            return {...state, activeIsLoading: false}
        /** END VIDEO GET **/


        /** VIDEO GET FRAMES **/
        case videosActionTypes.getFrames.start:
            return {...state, framesListIsLoading: true}
        case videosActionTypes.getFrames.success:
            return {...state, framesList: action.payload}
        case videosActionTypes.getFrames.finish:
            return {...state, framesListIsLoading: false}
        /** END VIDEO GET FRAMES **/


        /** FRAMES MODAL **/
        case videosActionTypes.framesModal.open:
            return {...state, framesModalIsOpen: true, videoModalIsOpen: false}
        case videosActionTypes.framesModal.close:
            return {...state, framesModalIsOpen: false, framesList: []}
        /** END FRAMES MODAL **/


        default:
            return state
    }
}