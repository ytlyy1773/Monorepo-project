function inputNumber(val, option = {}) {
  const options = {
    limitZero: false,
    typeof: typeof val,
    ...option
  };
  if (val == null || !["number", "string"].includes(typeof val)) {
    return val;
  }
  let value = String(val).replace(/[^\d]/gi, "");
  if (value.startsWith("00") || value.startsWith("0") && value.length >= 2) {
    value = Number(value).toString();
  }
  if (options.limitZero && value.startsWith("0")) {
    value = options.typeof === "number" ? null : "";
  }
  return options.typeof === "number" ? Number(value) : value;
}
function decimal(val, option = {}) {
  if (val == null || !["number", "string"].includes(typeof val)) {
    return val;
  }
  const options = {
    digit: 2,
    maxValue: null,
    typeof: typeof val,
    ...option
  };
  let value = String(val).replace(/[^\d.]/gi, "").replace(/(\.\d*)\./g, "$1");
  if (value.startsWith(".")) {
    value = "";
  }
  if (value.startsWith("00") || value.startsWith("0") && value.length >= 2 && !value.endsWith(".")) {
    value = Number(value).toString();
  }
  if (value.includes(".")) {
    const list = value.split(".");
    const filterText = list[1].substring(0, options.digit);
    value = `${list[0]}.${filterText}`;
  }
  if (options.maxValue !== null) {
    if (!Number(options.maxValue).isNaN() && value > options.maxValue) {
      value = Number(options.maxValue).toString();
    }
    if (value.endsWith(".") && Number(removeEndSymbol(value)) === Number(options.maxValue)) {
      value = Number(options.maxValue).toString();
    }
  }
  return options.typeof === "number" ? Number(value) : value;
}
function removeEndSymbol(val) {
  if (val == null) {
    return val;
  }
  let value = String(val);
  if (value.endsWith(".")) {
    value = value.substring(0, value.length - 1);
  }
  return typeof val === "number" ? Number(value) : value;
}
function objectIsEmptyKey(obj) {
  if (String(obj) !== "[object Object]") {
    return false;
  }
  return Reflect.ownKeys(obj).length ? true : false;
}
function arrayEmptyLength(list) {
  if (Array.isArray(list) && list.length) {
    return true;
  }
  return false;
}
export {
  arrayEmptyLength,
  decimal,
  inputNumber,
  objectIsEmptyKey,
  removeEndSymbol
};
