export enum Op {
  CLR = "Escape",
  DEL = "Backspace",
}

/** Represents the current token being typed */
export class Token {
  value: string;
  operator?: string;
  isDecimal?: boolean;
  isPercentage?: boolean;

  constructor() {
    this.value = "";
  }

  append(val: string) {
    if (["+", "-", "*", "/"].includes(val)) {
      this.operator = val;
    } else if (val === "%" && !this.isPercentage) {
      this.isPercentage = true;
    } else if (val === "." && !this.isDecimal) {
      this.isDecimal = true;
    } else if (!Number.isNaN(val)) {
      this.value += val;
    }
  }

  pop() {
    if (this.operator) {
      this.operator = undefined;
      return false;
    } else if (this.isPercentage) {
      this.isPercentage = false;
      return false;
    } else {
      const len = this.value.length;

      if (len > 1) {
        this.value = this.value.slice(0, len - 1);
        this.isPercentage = this.value.includes(".");
        return true;
      }

      return false;
    }
  }

  nextPossibilities() {
    if (this.operator) return [];
    if (this.isPercentage) return ["+", "-", "*", "/"];
    if (this.isDecimal)
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (!this.value)
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    return [];
  }
}
