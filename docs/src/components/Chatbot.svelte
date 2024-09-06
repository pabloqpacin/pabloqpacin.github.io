<script>

  import Loader from "./Loader.svelte";

  let prompt = "";
  let result = "";
  let load = false;

  const API_KEY = import.meta.env.PUBLIC_OPENAI_API_KEY;   // ojo..............
  const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

  const apiSubmit = async () => {

    load = true;
    result = "";

    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    };

    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const { choices } = await response.json();

    result = choices[0].message.content;
    if (result != ""){
      load = false
      prompt = ""
    }

  };
</script>


<div class="max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div class="px-4 py-5 sm:px-6">
    <h2 class="text-6xl font-medium text-gray-900">ChatBot GPT</h2>
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
      <pre>{ result }</pre>
      {#if load}
        <Loader />
      {/if}
    </div>
  </div>
</div>

