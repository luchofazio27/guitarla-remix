export async function getGuitars() {
    const response = await fetch(`${process.env.API_URL}/guitars?populate=*`)
    return await response.json()
}



//(`${process.env.API_URL}/guitars?populate=imagen`)