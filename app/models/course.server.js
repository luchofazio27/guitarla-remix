export async function getCourse() {
    const response = await fetch(`${process.env.API_URL}/course?populate=*`)
    return await response.json()
}