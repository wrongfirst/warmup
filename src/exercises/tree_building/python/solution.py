class Record:
    def __init__(self, record_id: int, parent_id: int):
        self.record_id = record_id
        self.parent_id = parent_id

class RecordNode:
    def __init__(self, node_id: int):
        self.node_id = node_id
        self.children = []

def Build(records: list[Record]) -> RecordNode | None:
    if not records:
        return None

    sorted_records = sorted(records, key=lambda r: r.record_id)

    if sorted_records[0].record_id != 0 or sorted_records[0].parent_id != 0:
        raise ValueError("Root node is invalid")

    nodes = []
    for i, rec in enumerate(sorted_records):
        if rec.record_id != i:
            raise ValueError("Record id mismatch or non-contiguous")
        if i > 0 and rec.parent_id >= rec.record_id:
            raise ValueError("Parent id must be less than id")
        nodes.append(RecordNode(rec.record_id))

    for i in range(1, len(sorted_records)):
        rec = sorted_records[i]
        nodes[rec.parent_id].children.append(nodes[i])

    return nodes[0]
