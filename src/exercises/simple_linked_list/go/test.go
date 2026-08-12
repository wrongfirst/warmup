package main

import "fmt"

func main() {
	Tests.EqualCheck("Empty list has length of zero", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{}, []map[string]interface{}{{"operation": "count", "expected": float64(0)}})))
	Tests.EqualCheck("Singleton list has length of one", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{1}, []map[string]interface{}{{"operation": "count", "expected": float64(1)}})))
	Tests.EqualCheck("Non-empty list has correct length", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{1, 2, 3}, []map[string]interface{}{{"operation": "count", "expected": float64(3)}})))
	Tests.EqualCheck("Pop from empty list is an error", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{}, []map[string]interface{}{{"operation": "pop", "expected": map[string]interface{}{"error": "list is empty"}}})))
	Tests.EqualCheck("Can pop from singleton list", fmt.Sprintf("%v", map[string]interface{}{}), fmt.Sprintf("%v", ListOps([]int{1}, []map[string]interface{}{{"operation": "pop", "expected": float64(1)}})))
}
