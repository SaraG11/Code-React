
const apiKey = 'BiWd4rJZbSZV6szcfh9cvkPSgrwdIZ3Z';
const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpCall
    .then( resp => resp.json())
    .then( ({ data }) => {
        const { url } = data.images.preview_gif;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img )
    })
    .catch( console.warn);
