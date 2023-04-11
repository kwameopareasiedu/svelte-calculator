<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let digit = "";
  export let span = 1;
  export let bg = "";
  export let color = "white";

  const pressEventName = "press";
  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch(pressEventName, { action: digit });
  }

  function onKeyUp(e) {
    if (e.key === digit.toString()) {
      dispatch(pressEventName, { action: digit });
    }
  }

  onMount(function () {
    window.addEventListener("keyup", onKeyUp);

    return function () {
      window.removeEventListener("keyup", onKeyUp);
    };
  });
</script>

<button
  class="w-full py-6 text-center rounded-xl transition-shadow active:shadow-none"
  style={`--bg: ${bg}; --color: ${color}; --span: ${span}`}
  on:click={onClick}
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
