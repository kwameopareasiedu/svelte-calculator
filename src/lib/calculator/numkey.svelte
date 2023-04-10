<script>
  import { createEventDispatcher } from "svelte";

  export let span = 1;
  export let bg = "";
  export let color = "white";
  export let action = "";

  const EVENT_PRESS = "press";
  const dispatch = createEventDispatcher();

  function press() {
    dispatch(EVENT_PRESS, { action });
  }
</script>

<button
  class="w-full py-6 text-center rounded-xl transition-shadow active:shadow-none"
  style={`--bg: ${bg}; --color: ${color}; --span: ${span}`}
  on:click={press}
>
  <slot />
</button>

<style>
  button {
    box-shadow: 0 2px 6px #1212129e, 0 -2px 6px #ffffff1f;
    background-color: var(--bg);
    color: var(--color);
    grid-column: span var(--span) / span var(--span);
  }
</style>
