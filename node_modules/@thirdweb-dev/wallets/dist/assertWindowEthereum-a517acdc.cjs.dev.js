'use strict';

function assertWindowEthereum(w) {
  return typeof w !== "undefined" && "ethereum" in w;
}

exports.assertWindowEthereum = assertWindowEthereum;
