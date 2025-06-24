
const getImagen = async() => {
    
    try {
        const apiKey = 'BiWd4rJZbSZV6szcfh9cvkPSgrwdIZ3Z';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();

        const { url } =  data.images.preview_gif;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img )

        console.log(url)
    } catch (error) {
        console.log(error)
    }
}

getImagen();