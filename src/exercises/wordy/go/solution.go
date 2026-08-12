package main

import (
	"errors"
	"strconv"
	"strings"
)

func Answer(question string) (int, error) {
	if !strings.HasPrefix(question, "What is ") || !strings.HasSuffix(question, "?") {
		return 0, errors.New("syntax error")
	}

	expr := strings.TrimSpace(question[8 : len(question)-1])
	if len(expr) == 0 {
		return 0, errors.New("syntax error")
	}

	expr = strings.ReplaceAll(expr, "multiplied by", "multiplied_by")
	expr = strings.ReplaceAll(expr, "divided by", "divided_by")

	tokens := strings.Fields(expr)
	if len(tokens) == 0 {
		return 0, errors.New("syntax error")
	}

	var acc *int
	var currentOp string

	for _, token := range tokens {
		num, err := strconv.Atoi(token)
		if err == nil {
			if acc == nil {
				if currentOp != "" {
					return 0, errors.New("syntax error")
				}
				acc = &num
			} else {
				if currentOp == "" {
					return 0, errors.New("syntax error")
				}
				switch currentOp {
				case "plus":
					*acc += num
				case "minus":
					*acc -= num
				case "multiplied_by":
					*acc *= num
				case "divided_by":
					*acc /= num
				default:
					return 0, errors.New("unknown operation")
				}
				currentOp = ""
			}
		} else if token == "plus" || token == "minus" || token == "multiplied_by" || token == "divided_by" {
			if acc == nil || currentOp != "" {
				return 0, errors.New("syntax error")
			}
			currentOp = token
		} else {
			return 0, errors.New("unknown operation")
		}
	}

	if acc == nil || currentOp != "" {
		return 0, errors.New("syntax error")
	}

	return *acc, nil
}
