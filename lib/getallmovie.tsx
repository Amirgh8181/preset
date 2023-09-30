
export async function getData() {
    try {
        const req = await fetch("https://moviesapi.ir/api/v1/movies?page={page}", { cache: 'no-store' })
        .then(req=>req.json())
        return req.data
    }
    catch (e) {
        throw new Error('faild to fetch data')
    }
}
