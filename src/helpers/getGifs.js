
//Como es una función asíncrona, no retorna directamente el array de gifs, sino una promesa con el array de gifs
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2KK6DVa3ttmbkzqxuvm2vxemRqtt3C9e`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
};