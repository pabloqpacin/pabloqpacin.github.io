<script>

  import Loader from "./Loader.svelte";

  let prompt = "";
  let url = "";
  // let imageURL = "";

  const apiSubmit = async () => {
    alert("asdf")
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
      <img src={ url } alt="imagen con IA" class="mt-4">
      <Loader />
    </div>
  </div>
</div>

