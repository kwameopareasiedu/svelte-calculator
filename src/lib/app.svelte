<script lang="ts">
  import Calculator from "./calculator/calculator.svelte";
</script>

<main class="h-auto md:h-full md:flex">
  <section
    class="w-full grid place-items-center border-b-2 border-gray-100 md:border-e-2 md:max-w-screen-sm"
  >
    <div class="p-6 md:p-0">
      <h3 class="font-bold text-4xl text-center">Svelte Calculator</h3>
      <p class="text-center font-light">Kwame Opare Asiedu</p>
    </div>
  </section>

  <section class="grid place-items-center p-6 md:grow">
    <Calculator />
  </section>
</main>
