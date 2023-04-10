<script>
  import Numkey from "./numkey.svelte";
  import { Key, Op } from "./cacluator.const.ts";
</script>

<div class="grid grid-cols-4 grid-rows-5 gap-6 h-full p-6">
  <Numkey action={Op.CLR} on:press>AC</Numkey>
  <Numkey action={Op.DEL} on:press>&lt;</Numkey>
  <Numkey action={Key.PERCENT} on:press>%</Numkey>
  <Numkey action={Op.DIV} on:press>/</Numkey>

  <Numkey action={Key.SEVEN} on:press>7</Numkey>
  <Numkey action={Key.EIGHT} on:press>8</Numkey>
  <Numkey action={Key.NINE} on:press>9</Numkey>
  <Numkey action={Op.MUL} on:press>*</Numkey>

  <Numkey action={Key.FOUR} on:press>4</Numkey>
  <Numkey action={Key.FIVE} on:press>5</Numkey>
  <Numkey action={Key.SIX} on:press>6</Numkey>
  <Numkey action={Op.MIN} on:press>-</Numkey>

  <Numkey action={Key.ONE} on:press>1</Numkey>
  <Numkey action={Key.TWO} on:press>2</Numkey>
  <Numkey action={Key.THREE} on:press>3</Numkey>
  <Numkey action={Op.ADD} on:press>+</Numkey>

  <Numkey action={Key.ZERO} on:press>0</Numkey>
  <Numkey action={Key.DECIMAL} on:press>.</Numkey>
  <Numkey bg="orange" span="2" action={Op.CALC} on:press>=</Numkey>
</div>
