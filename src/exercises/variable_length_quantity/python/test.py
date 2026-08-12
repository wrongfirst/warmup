if 'encode' not in globals() or 'decode' not in globals():
    raise Exception("encode and decode functions must be defined")

# Encoding tests
Tests.equal_check("zero", [0], encode([0]))
Tests.equal_check("arbitrary single byte", [64], encode([64]))
Tests.equal_check("asymmetric single byte", [83], encode([83]))
Tests.equal_check("largest single byte", [127], encode([127]))
Tests.equal_check("smallest double byte", [129, 0], encode([128]))
Tests.equal_check("arbitrary double byte", [192, 0], encode([8192]))
Tests.equal_check("largest double byte", [255, 127], encode([16383]))
Tests.equal_check("smallest triple byte", [129, 128, 0], encode([16384]))
Tests.equal_check("maximum 32-bit integer input", [143, 255, 255, 255, 127], encode([4294967295]))
Tests.equal_check("two single-byte values", [64, 127], encode([64, 127]))
Tests.equal_check("many multi-byte values", [192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0], encode([8192, 1193046, 268435455, 0, 16383, 16384]))

# Decoding tests
Tests.equal_check("decode one byte", [127], decode([127]))
Tests.equal_check("decode two bytes", [8192], decode([192, 0]))
Tests.equal_check("decode three bytes", [2097151], decode([255, 255, 127]))
Tests.equal_check("decode maximum 32-bit integer", [4294967295], decode([143, 255, 255, 255, 127]))
Tests.equal_check("decode multiple values", [8192, 1193046, 268435455, 0, 16383, 16384], decode([192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0]))

# Incomplete sequence errors
caught1 = False
try:
    decode([255])
except Exception:
    caught1 = True
Tests.bool_check("incomplete sequence causes error", caught1)

caught2 = False
try:
    decode([128])
except Exception:
    caught2 = True
Tests.bool_check("incomplete sequence causes error even if zero", caught2)
