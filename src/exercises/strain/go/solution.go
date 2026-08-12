package main

func Keep[T any](list []T, predicate func(T) bool) []T {
	var result []T
	for _, v := range list {
		if predicate(v) {
			result = append(result, v)
		}
	}
	return result
}

func Discard[T any](list []T, predicate func(T) bool) []T {
	var result []T
	for _, v := range list {
		if !predicate(v) {
			result = append(result, v)
		}
	}
	return result
}
