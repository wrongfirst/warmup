class Record:
    def __init__(self, record_id: int, parent_id: int):
        self.record_id = record_id
        self.parent_id = parent_id

class RecordNode:
    def __init__(self, node_id: int):
        self.node_id = node_id
        self.children = []

def Build(records: list[Record]) -> RecordNode | None:
    # Your code here
    return None
