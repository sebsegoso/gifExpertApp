import { GIPHY_APKI_KEY } from '../utils/constants';


const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${GIPHY_APKI_KEY}`;
        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;
        
    } catch (error) {
        console.log(error)
    }
}

export {getGifs}