import _axios from "axios"

if (!process.env.REACT_APP_API_BASE_URL) {
	throw new Error("No `REACT_APP_API_BASE_URL` found in environment!")
}

const axios = _axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
})

export default axios
