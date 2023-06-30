import Axios from "axios";

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Njk2MjY2NTAsImV4cCI6MTY2OTYzMDI1MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQHNjaG9vbGFwaS5jb20ifQ.eB9Vi0OpwI5XVZafJof8X8xxOc-aysy1bDiTgc0Xb7wCKWEkpaRV8tWNbaiyVYiy7FWahB3WcrvySxowDHYloeZsJTPc0EwvP7LVg08lY9ad9JoYgc9a_TWMt4AdsrS2A6Mj-8kQUom72ulCdCcsJOIYrngFxOolz_YHHoLWGKREvtSMDyeJfSWLcBpl3SN3QFHUGSqZD8QdlpQMk2nesivMBkLl7XETWQczgahjvLRjaKhYe_A9DuNMtgp8pqt6prM2qJbczXl8k3PbVtK2-7C_S2tYenN4WHZ1phalvQ6ZX4h9mMbD0P1dScDomkSqT37n8bobljHMU-lJL2cfQhAQ6QknGIhB0a09IP8Gk3aJZ3C3Aal17DqemKxR0HOZqsU4_06voCAWJ11mBP9toD-kVmp92WGAVvU0l8fFnMdiUGndxGZr0XqIeaqsrq3kHxlStgEH6xkHsd_JYA_Z0YjvhbOKMYcBzhJY3IMVfSw2gUE9GpjuvnrEat-P4XM2yK-lBoTqyWaPHgXGaf6bpmjb_3PWXV_so-KQQiN5sjlVz2BAwDSm9JIArMMmQxcZw1KFggRHjUUkZXB8K9yQb4s8_kFHHbkIEeVxXA5gZQxmnDUesVvJmd5vW2FYLjQm-zuGf_uyk8rJkGOvgnitcQtoHKAw-nbOnLJW9-jVXDo";


const instance = Axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer '+token, 
        'Content-Type': 'json'
    }
});

export default instance