import {combineReducers} from "redux"
import videosReducer from "./videos/videosReducer";


const rootReducer = combineReducers({
    videos: videosReducer
})

export default rootReducer