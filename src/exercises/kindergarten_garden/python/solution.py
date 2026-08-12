PLANTS = {'G': 'grass', 'C': 'clover', 'R': 'radishes', 'V': 'violets'}
STUDENTS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred',
            'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry']

def plants(diagram, student):
    rows = diagram.split('\n')
    idx = STUDENTS.index(student) * 2
    return [
        PLANTS[rows[0][idx]],
        PLANTS[rows[0][idx + 1]],
        PLANTS[rows[1][idx]],
        PLANTS[rows[1][idx + 1]]
    ]
