// @ts-nocheck
if (typeof encode !== "function" || typeof decode !== "function") {
  throw new Error("encode and decode functions must be defined");
}

// Encoding tests
Tests.equalCheck("zero", JSON.stringify([0]), JSON.stringify(encode([0])));
Tests.equalCheck("arbitrary single byte", JSON.stringify([64]), JSON.stringify(encode([64])));
Tests.equalCheck("asymmetric single byte", JSON.stringify([83]), JSON.stringify(encode([83])));
Tests.equalCheck("largest single byte", JSON.stringify([127]), JSON.stringify(encode([127])));
Tests.equalCheck("smallest double byte", JSON.stringify([129, 0]), JSON.stringify(encode([128])));
Tests.equalCheck("arbitrary double byte", JSON.stringify([192, 0]), JSON.stringify(encode([8192])));
Tests.equalCheck("largest double byte", JSON.stringify([255, 127]), JSON.stringify(encode([16383])));
Tests.equalCheck("smallest triple byte", JSON.stringify([129, 128, 0]), JSON.stringify(encode([16384])));
Tests.equalCheck("maximum 32-bit integer input", JSON.stringify([143, 255, 255, 255, 127]), JSON.stringify(encode([4294967295])));
Tests.equalCheck("two single-byte values", JSON.stringify([64, 127]), JSON.stringify(encode([64, 127])));
Tests.equalCheck("many multi-byte values", JSON.stringify([192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0]), JSON.stringify(encode([8192, 1193046, 268435455, 0, 16383, 16384])));

// Decoding tests
Tests.equalCheck("decode one byte", JSON.stringify([127]), JSON.stringify(decode([127])));
Tests.equalCheck("decode two bytes", JSON.stringify([8192]), JSON.stringify(decode([192, 0])));
Tests.equalCheck("decode three bytes", JSON.stringify([2097151]), JSON.stringify(decode([255, 255, 127])));
Tests.equalCheck("decode maximum 32-bit integer", JSON.stringify([4294967295]), JSON.stringify(decode([143, 255, 255, 255, 127])));
Tests.equalCheck("decode multiple values", JSON.stringify([8192, 1193046, 268435455, 0, 16383, 16384]), JSON.stringify(decode([192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0])));

// Incomplete sequence errors
let caught1 = false;
try {
  decode([255]);
} catch (e) {
  caught1 = true;
}
Tests.boolCheck("incomplete sequence causes error", caught1);

let caught2 = false;
try {
  decode([128]);
} catch (e) {
  caught2 = true;
}
Tests.boolCheck("incomplete sequence causes error even if zero", caught2);
