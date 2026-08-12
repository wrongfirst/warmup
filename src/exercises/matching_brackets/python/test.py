if 'is_paired' not in globals():
    raise Exception("is_paired function is not defined")

Tests.bool_check("paired square brackets", is_paired("[]"))
Tests.bool_check("empty string", is_paired(""))
Tests.bool_check("unpaired brackets", not is_paired("[["))
Tests.bool_check("wrong ordered brackets", not is_paired("}{"))
Tests.bool_check("wrong closing bracket", not is_paired("{]"))
Tests.bool_check("paired with whitespace", is_paired("{ }"))
Tests.bool_check("partially paired brackets", not is_paired("{[])"))
Tests.bool_check("simple nested brackets", is_paired("{[]}"))
Tests.bool_check("several paired brackets", is_paired("{}[]"))
Tests.bool_check("paired and nested brackets", is_paired("([{}({}[])])"))
Tests.bool_check("math expression", is_paired("(((185 + 223.85) * 15) - 343)"))
