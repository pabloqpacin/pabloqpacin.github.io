<script>

  import Loader from "./Loader.svelte";

  let prompt = "";
  let url = "";
  let load = false;

  // const API_KEY = "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";
  const API_KEY = import.meta.env.PUBLIC_OPENAI_API_KEY;   // ojo..............
  const OPENAI_URL = "https://api.openai.com/v1/images/generations";

  const apiSubmit = async () => {

    load = true;
    url = "";

    const body = {
      // OJO aquí
      prompt, prompt,
      model: "dall-e-3",
      size: "1024x1024",
      n: 1
    };

    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    })

    const choices = await response.json()
    // console.log(choices)

    url = choices.data[0].url
    if (url != ""){
      load = false
      prompt = ""
    }

  };
</script>


<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div class="px-4 py-5 sm:px-6">
    <h2 class="text-6xl font-medium text-gray-900">Dall-E Generator</h2>
  </div>
  <div class="border-t border-gray-200">
    <div class="px-4 py-5 sm:p-6">
      <div class="mb-4">
        <textarea
          bind:value={prompt}
          class="border-2 border-pink-500 rounded-md w-full py-2 px-3"
          rows="4"
          placeholder="Escribe tu descripción aquí"
        />
      </div>
      <div>
        <button
          class="px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none"
          on:click={ apiSubmit }>Enviar</button
        >
      </div>
      <img src={ url } alt="" class="mt-4">
      {#if load}
        <Loader />
      {/if}
    </div>
  </div>
</div>

