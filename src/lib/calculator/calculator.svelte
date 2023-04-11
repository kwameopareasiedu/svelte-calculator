<script lang="ts">
  import Numpad from "./numpad.svelte";
  import "../../utils.ts";

  const opRegex = /[+|\-*\\/]/g;
  const operators = ["/", "*", "+", "-"];
  const operatorPriority = { "/": 0, "*": 0, "+": 1, "-": 1 };
  const operatorFns = {
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  let operation = "";
  let result = 0;
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
      result = 0;
    } else if (val === "Backspace") {
      operation = operation.slice(0, -1);
    } else if (val === "=") {
      result = compute();
    } else if (operators.includes(val)) {
      if (!operation) {
        if (val === "-") operation += val;
      } else if (!lastComponentIsOperator) {
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
        if (!lastComponentIsPercentage && operation) {
          operation += "%";
        }
      } else operation += val;
    }
  }

  function compute() {
    if (!operation) return 0;

    const len = operation.length;
    const tokens = [];
    let currentToken = "";
    let currentTokenIdx = 0;
    let startsWithNegative = false;
    let orderedOperators = [];

    while (currentTokenIdx < len) {
      const char = operation[currentTokenIdx];

      if (operators.includes(char)) {
        orderedOperators = [...orderedOperators, char].sort((op1, op2) => {
          const p1 = operatorPriority[op1];
          const p2 = operatorPriority[op2];
          return p1 - p2;
        });

        if (currentTokenIdx === 0) {
          startsWithNegative = true;
        } else {
          if (startsWithNegative) {
            tokens.push("-" + currentToken);
            startsWithNegative = false;
          } else {
            tokens.push(currentToken);
          }

          tokens.push(char);
          currentToken = "";
        }
      } else currentToken += char;

      currentTokenIdx += 1;
    }

    if (currentToken) {
      tokens.push(currentToken);
    }

    while (tokens.length > 1) {
      for (const operator of orderedOperators) {
        const operatorFn = operatorFns[operator];
        const operatorIndex = tokens.indexOf(operator);

        if (operatorIndex > -1) {
          const rawOp1 = tokens[operatorIndex - 1];
          const rawOp2 = tokens[operatorIndex + 1];
          const op1 = rawOp1.includes("%")
            ? 0.01 * parseFloat(rawOp1)
            : parseFloat(rawOp1);
          const op2 = rawOp2.includes("%")
            ? 0.01 * parseFloat(rawOp2)
            : parseFloat(rawOp2);
          const res = operatorFn(op1, op2).toString();
          tokens.splice(operatorIndex - 1, 3, res);
          break;
        }
      }
    }

    return Number(tokens[0]);
  }
</script>

<div class="bg-white w-96 h-auto p-2 overflow-hidden" id="calculator">
  <!-- Screen -->
  <div class="w-full pt-24 md:pt-32 mb-4">
    <!-- Result -->
    <h1 class="text-end text-7xl font-light font-mono mb-6 text-white">
      {result || "0"}
    </h1>
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
