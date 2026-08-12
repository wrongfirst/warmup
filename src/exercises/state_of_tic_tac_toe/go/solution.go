package main

import "errors"

func Gamestate(board []string) (string, error) {
	countX := 0
	countO := 0

	for _, row := range board {
		for _, ch := range row {
			if ch == 'X' {
				countX++
			} else if ch == 'O' {
				countO++
			}
		}
	}

	if countO > countX || countX > countO+1 {
		return "", errors.New("wrong turn order")
	}

	lines := [][3]byte{
		{board[0][0], board[0][1], board[0][2]},
		{board[1][0], board[1][1], board[1][2]},
		{board[2][0], board[2][1], board[2][2]},
		{board[0][0], board[1][0], board[2][0]},
		{board[0][1], board[1][1], board[2][1]},
		{board[0][2], board[1][2], board[2][2]},
		{board[0][0], board[1][1], board[2][2]},
		{board[0][2], board[1][1], board[2][0]},
	}

	xWins := false
	oWins := false

	for _, l := range lines {
		if l[0] == 'X' && l[1] == 'X' && l[2] == 'X' {
			xWins = true
		}
		if l[0] == 'O' && l[1] == 'O' && l[2] == 'O' {
			oWins = true
		}
	}

	if xWins && oWins {
		return "", errors.New("impossible board: both won")
	}
	if xWins && countX == countO {
		return "", errors.New("impossible board: X won on X's turn")
	}
	if oWins && countX > countO {
		return "", errors.New("impossible board: O won on O's turn")
	}

	if xWins || oWins {
		return "win", nil
	}

	if countX+countO == 9 {
		return "draw", nil
	}

	return "ongoing", nil
}
