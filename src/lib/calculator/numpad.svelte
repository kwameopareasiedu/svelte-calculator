<script>
  import Numkey from "./numkey.svelte";
  import { Op } from "./cacluator.ts";
</script>

<div class="grid grid-cols-4 grid-rows-5 gap-6 h-full p-6">
  <Numkey digit={Op.CLR} on:press>AC</Numkey>
  <Numkey digit={Op.DEL} on:press>C</Numkey>
  <Numkey digit="%" on:press>%</Numkey>
  <Numkey digit="/" on:press>/</Numkey>

  <Numkey digit="7" on:press>7</Numkey>
  <Numkey digit="8" on:press>8</Numkey>
  <Numkey digit="9" on:press>9</Numkey>
  <Numkey digit="*" on:press>*</Numkey>

  <Numkey digit="4" on:press>4</Numkey>
  <Numkey digit="5" on:press>5</Numkey>
  <Numkey digit="6" on:press>6</Numkey>
  <Numkey digit="-" on:press>-</Numkey>

  <Numkey digit="1" on:press>1</Numkey>
  <Numkey digit="2" on:press>2</Numkey>
  <Numkey digit="3" on:press>3</Numkey>
  <Numkey digit="+" on:press>+</Numkey>

  <Numkey digit="0" on:press>0</Numkey>
  <Numkey digit="." on:press>.</Numkey>
  <Numkey digit="=" bg="orange" span="2" on:press>=</Numkey>
</div>
