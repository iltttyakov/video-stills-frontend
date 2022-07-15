import axios from "axios";
import {BASE_URL} from "./urls";

const base = axios.create({
    baseURL: `${BASE_URL}/api`
})

export default base