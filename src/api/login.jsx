import axios from "axios"
import Cookies from "js-cookie"
import {SERVER_URL } from "../config/config"

const login= async (phoneNumber, password, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/user/login`,
        method: "post",
        data: {
            phoneNumber, password
        }
    })
    const result= await res.data
    if(parseInt(res.status) === 200) {
        Cookies.set("uid", result.user._id)
        Cookies.set("accessToken", result.accessToken)
        window.location.href= window.location.origin
    }
    return setData(result)
}

export default login