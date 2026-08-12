package main

import "fmt"

func main() {
	// Encoding tests
	Tests.EqualCheck("zero", fmt.Sprintf("%v", []byte{0}), fmt.Sprintf("%v", Encode([]uint32{0})))
	Tests.EqualCheck("arbitrary single byte", fmt.Sprintf("%v", []byte{64}), fmt.Sprintf("%v", Encode([]uint32{64})))
	Tests.EqualCheck("asymmetric single byte", fmt.Sprintf("%v", []byte{83}), fmt.Sprintf("%v", Encode([]uint32{83})))
	Tests.EqualCheck("largest single byte", fmt.Sprintf("%v", []byte{127}), fmt.Sprintf("%v", Encode([]uint32{127})))
	Tests.EqualCheck("smallest double byte", fmt.Sprintf("%v", []byte{129, 0}), fmt.Sprintf("%v", Encode([]uint32{128})))
	Tests.EqualCheck("arbitrary double byte", fmt.Sprintf("%v", []byte{192, 0}), fmt.Sprintf("%v", Encode([]uint32{8192})))
	Tests.EqualCheck("largest double byte", fmt.Sprintf("%v", []byte{255, 127}), fmt.Sprintf("%v", Encode([]uint32{16383})))
	Tests.EqualCheck("smallest triple byte", fmt.Sprintf("%v", []byte{129, 128, 0}), fmt.Sprintf("%v", Encode([]uint32{16384})))
	Tests.EqualCheck("maximum 32-bit integer input", fmt.Sprintf("%v", []byte{143, 255, 255, 255, 127}), fmt.Sprintf("%v", Encode([]uint32{4294967295})))
	Tests.EqualCheck("two single-byte values", fmt.Sprintf("%v", []byte{64, 127}), fmt.Sprintf("%v", Encode([]uint32{64, 127})))
	Tests.EqualCheck("many multi-byte values", fmt.Sprintf("%v", []byte{192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0}), fmt.Sprintf("%v", Encode([]uint32{8192, 1193046, 268435455, 0, 16383, 16384})))

	// Decoding tests
	dec1, err1 := Decode([]byte{127})
	Tests.BoolCheck("decode one byte err", err1 == nil)
	Tests.EqualCheck("decode one byte", fmt.Sprintf("%v", []uint32{127}), fmt.Sprintf("%v", dec1))

	dec2, err2 := Decode([]byte{192, 0})
	Tests.BoolCheck("decode two bytes err", err2 == nil)
	Tests.EqualCheck("decode two bytes", fmt.Sprintf("%v", []uint32{8192}), fmt.Sprintf("%v", dec2))

	dec3, err3 := Decode([]byte{255, 255, 127})
	Tests.BoolCheck("decode three bytes err", err3 == nil)
	Tests.EqualCheck("decode three bytes", fmt.Sprintf("%v", []uint32{2097151}), fmt.Sprintf("%v", dec3))

	dec4, err4 := Decode([]byte{143, 255, 255, 255, 127})
	Tests.BoolCheck("decode max 32-bit int err", err4 == nil)
	Tests.EqualCheck("decode max 32-bit int", fmt.Sprintf("%v", []uint32{4294967295}), fmt.Sprintf("%v", dec4))

	dec5, err5 := Decode([]byte{192, 0, 200, 232, 86, 255, 255, 255, 127, 0, 255, 127, 129, 128, 0})
	Tests.BoolCheck("decode multiple values err", err5 == nil)
	Tests.EqualCheck("decode multiple values", fmt.Sprintf("%v", []uint32{8192, 1193046, 268435455, 0, 16383, 16384}), fmt.Sprintf("%v", dec5))

	// Incomplete sequence errors
	_, err6 := Decode([]byte{255})
	Tests.BoolCheck("incomplete sequence error", err6 != nil)

	_, err7 := Decode([]byte{128})
	Tests.BoolCheck("incomplete sequence error zero", err7 != nil)
}
