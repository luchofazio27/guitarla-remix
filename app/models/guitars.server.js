export async function getGuitars() {
    const response = await fetch(`${process.env.API_URL}/guitars?populate=*`)
    return await response.json()
}

export async function getGuitar(url) {
    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=*`)
    return await response.json()
}


//(`${process.env.API_URL}/guitars?populate=imagen`)