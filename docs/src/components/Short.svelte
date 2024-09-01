<script>
    
    const inputStyle = "bg-gray-200 appearance-none border-2 border-gray rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500";
    const buttonStyle = "bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-10 pr-4";
    
    let SHORTIO_DOMAIN = import.meta.env.PUBLIC_SHORTIO_DOMAIN;
    let SHORTIO_API_KEY = import.meta.env.PUBLIC_SHORTIO_API_KEY;

    let url = "";
    let resultUrl = "";
    let show = false;

    const fetchUrl = async () => {
        // OJO: headers según cada API
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: SHORTIO_API_KEY
            },
            body: JSON.stringify({
                originalURL: url,
                domain: SHORTIO_DOMAIN
            })
        };

        const response = await fetch('https://api.short.io/links', options);
        const data = await response.json();
        console.log(data);
        resultUrl = data.shortURL;
    }

</script>


<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
        <label for="" class="block text-gray-500 font-bold md:text-right pr-4">
            URL to shorten
        </label>
    </div>
    <div class="md:w-1/3">
        <input
            type="text" placeholder="Example://www.mysite.com"
            bind:value={url} class={inputStyle}
        />
    </div>
</div>


<div class="md:flex md:items-center justify-center">
    <button type="button" class={buttonStyle} on:click={fetchUrl}>Shorten</button>
</div>

<h1>{ resultUrl }</h1>

