<script lang="ts">
  import Numpad from "./numpad.svelte";

  function handleKeyPress(e) {
    console.log(e.detail);
  }
</script>

<div id="calculator" class="bg-white w-96 h-auto p-2 overflow-hidden">
  <!-- Screen -->
  <div class="w-full pt-24 md:pt-32 mb-4">
    <!-- Result -->
    <h1 class="text-end text-7xl font-light font-mono mb-6 text-white">1234</h1>
    <!-- Operation -->
    <p class="text-end text-gray-400">1000 + 200 + 30 + 4</p>
  </div>

  <Numpad on:press={handleKeyPress} />
</div>

<style>
  #calculator {
    background-color: #203441;
    border: 2px solid #121212;
    box-shadow: 2px 2px 10px #000;
    border-radius: 48px;
  }
</style>
