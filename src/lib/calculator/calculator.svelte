<script lang="ts">
  import Numpad from "./numpad.svelte";
  import "../../utils.ts";

  const opRegex = /[+|\-*\\/]/g;
  const operators = ["+", "-", "*", "/"];

  let operation = "";
  $: lastComponent = operation.endsWithAnyOf(operators)
    ? operation.slice(-1)[0]
    : operation.split(opRegex).slice(-1)[0];
  $: lastComponentIsOperator = operators.includes(lastComponent);
  $: lastComponentIsNumber = !!Number(lastComponent);
  $: lastComponentIsInteger = Number.isInteger(Number(lastComponent));
  $: lastComponentIsDecimal =
    lastComponentIsNumber &&
    (!lastComponentIsInteger || lastComponent.endsWith("."));
  $: lastComponentIsPercentage = lastComponent.indexOf("%") > -1;

  function handleKeyPress(e) {
    const val = e.detail.action;

    if (val === "Escape") {
      operation = "";
    } else if (val === "Backspace") {
      operation = operation.slice(0, -1);
    } else if (val === "=") {
      operation = compute().toString();
    } else if (operators.includes(val)) {
      if (!lastComponentIsOperator) {
        operation += val;
      }
    } else {
      if (val === ".") {
        if (!operation || lastComponentIsOperator) {
          operation += "0.";
        } else if (!lastComponentIsDecimal) {
          operation += ".";
        }
      } else if (val === "%") {
        if (!lastComponentIsPercentage) {
          operation += "%";
        }
      } else operation += val;
    }
  }

  function compute() {
    if (!operation) return 0;

    const tokens = [];
  }
</script>

<div class="bg-white w-96 h-auto p-2 overflow-hidden" id="calculator">
  <!-- Screen -->
  <div class="w-full pt-24 md:pt-32 mb-4">
    <!-- Result -->
    <h1 class="text-end text-7xl font-light font-mono mb-6 text-white">0</h1>
    <!-- Operation -->
    <p class="text-end text-gray-400">{operation || "0"}</p>
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
