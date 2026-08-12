package main

type Element struct {
	Value int
	Next  *Element
}

type List struct {
	head *Element
	size int
}

func (l *List) Size() int {
	return l.size
}

func (l *List) Push(element int) {
	// Your code here
}

func (l *List) Pop() (int, error) {
	// Your code here
	return 0, nil
}

func (l *List) Reverse() *List {
	// Your code here
	return l
}

func ListOps(initialValues []int, operations []map[string]interface{}) map[string]interface{} {
	// Your code here
	return map[string]interface{}{}
}
