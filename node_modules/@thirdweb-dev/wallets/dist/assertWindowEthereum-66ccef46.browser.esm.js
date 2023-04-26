function assertWindowEthereum(w) {
  return typeof w !== "undefined" && "ethereum" in w;
}

export { assertWindowEthereum as a };
