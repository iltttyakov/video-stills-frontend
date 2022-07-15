import base from '../base'
import urls from "../urls";

const list = () => base.get(urls.videos.list)
const get = name => base.get(urls.videos.get(name))
const getFrames = (name, timecode) => base.get(
    urls.videos.getFrames(name),
    {params: {timecode}},
)

export default {
    list, get, getFrames
}