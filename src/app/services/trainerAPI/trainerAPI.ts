const BASE_URL = "https://noroff-api-2022.herokuapp.com/trainers"
const API_KEY = "mCCrFQCflzcRNCMK+alj0mCPRlb94Nt3GH2jAJaLLu0kB4TM7+rraU8CimfYqUHh3GgpLFgyUO1oG9MoOAJrZA=="

export async function getUserFromAPI(userName:string) {
    try {
        const config = {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "X-API-KEY" : API_KEY
            },
        }
        const response = await fetch(`${BASE_URL}`, config)
        const data = await response.json()
        console.log(userName)
        for (let user of data) {
            if (user.username.toLowerCase() === userName.toLowerCase()) {
                return [null, user]
            }
        }
        return registerUserAPI(userName)
    }
    catch (error:any) {
        return [error.message, null]
    }
}

export async function registerUserAPI(userName:string) {
    try {
        const pokemon:string[] = []
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY
            },
            body: JSON.stringify(
                {
                    username: userName,
                    pokemon
                }
            )
        }
        const response = await fetch(`${BASE_URL}`, config)
        const data = await response.json()
        console.log([null, data])
        return [null, data]
    }
    catch (error:any) {
        return [error.message, null]
    }
}