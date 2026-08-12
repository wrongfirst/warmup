package main

import "errors"

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
	node := &Element{Value: element, Next: l.head}
	l.head = node
	l.size++
}

func (l *List) Pop() (int, error) {
	if l.head == nil {
		return 0, errors.New("list is empty")
	}
	val := l.head.Value
	l.head = l.head.Next
	l.size--
	return val, nil
}

func (l *List) Reverse() *List {
	rev := &List{}
	curr := l.head
	for curr != nil {
		rev.Push(curr.Value)
		curr = curr.Next
	}
	return rev
}

func ListOps(initialValues []int, operations []map[string]interface{}) map[string]interface{} {
	l := &List{}
	for _, v := range initialValues {
		l.Push(v)
	}

	for _, op := range operations {
		opName, _ := op["operation"].(string)
		expected := op["expected"]

		switch opName {
		case "count":
			expCount, _ := expected.(float64)
			if float64(l.Size()) != expCount {
				return map[string]interface{}{"error": "count mismatch"}
			}
		case "push":
			if val, ok := op["value"].(float64); ok {
				l.Push(int(val))
			}
		case "pop":
			val, err := l.Pop()
			if err != nil {
				if expMap, ok := expected.(map[string]interface{}); !ok || expMap["error"] != "list is empty" {
					return map[string]interface{}{"error": "unexpected empty list error"}
				}
			} else {
				if expVal, ok := expected.(float64); !ok || float64(val) != expVal {
					return map[string]interface{}{"error": "pop value mismatch"}
				}
			}
		case "reverse":
			l = l.Reverse()
		}
	}

	return map[string]interface{}{}
}
