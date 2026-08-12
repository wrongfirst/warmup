package main

import "errors"

func Encode(numbers []uint32) []byte {
	var result []byte
	for _, n := range numbers {
		var buf []byte
		buf = append(buf, byte(n&0x7f))
		n >>= 7
		for n > 0 {
			buf = append(buf, byte((n&0x7f)|0x80))
			n >>= 7
		}
		for i, j := 0, len(buf)-1; i < j; i, j = i+1, j-1 {
			buf[i], buf[j] = buf[j], buf[i]
		}
		result = append(result, buf...)
	}
	return result
}

func Decode(bytes []byte) ([]uint32, error) {
	var result []uint32
	var current uint32
	inSeq := false

	for _, b := range bytes {
		current = (current << 7) | uint32(b&0x7f)
		inSeq = true
		if (b & 0x80) == 0 {
			result = append(result, current)
			current = 0
			inSeq = false
		}
	}

	if inSeq {
		return nil, errors.New("incomplete sequence")
	}

	return result, nil
}
