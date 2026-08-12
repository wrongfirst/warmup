if 'degree_of_separation' not in globals():
    raise Exception("degree_of_separation function is not defined")

Tests.equal_check("Direct parent-child relation", 1, degree_of_separation({ "Vera": ["Tomoko"], "Tomoko": ["Aditi"] }, "Vera", "Tomoko"))
Tests.equal_check("Sibling relationship", 1, degree_of_separation({ "Dalia": ["Olga", "Yassin"] }, "Olga", "Yassin"))
Tests.equal_check("Two degrees of separation, grandchild", 2, degree_of_separation({ "Khadija": ["Mateo"], "Mateo": ["Rami"] }, "Khadija", "Rami"))
Tests.equal_check("Unrelated individuals", None, degree_of_separation({ "Priya": ["Rami"], "Kaito": ["Elif"] }, "Priya", "Kaito"))

complex_tree = {
  "Aiko": ["Bao", "Carlos"],
  "Bao": ["Dalia", "Elias"],
  "Carlos": ["Fatima", "Gustavo"],
  "Dalia": ["Hassan", "Isla"],
  "Elias": ["Javier"],
  "Fatima": ["Khadija", "Liam"],
  "Gustavo": ["Mina"],
  "Hassan": ["Noah", "Olga"],
  "Isla": ["Pedro"],
  "Javier": ["Quynh", "Ravi"],
  "Khadija": ["Sofia"],
  "Liam": ["Tariq", "Uma"],
  "Mina": ["Viktor", "Wang"],
  "Noah": ["Xiomara"],
  "Olga": ["Yuki"],
  "Pedro": ["Zane", "Aditi"],
  "Quynh": ["Boris"],
  "Ravi": ["Celine"],
  "Sofia": ["Diego", "Elif"],
  "Tariq": ["Farah"],
  "Uma": ["Giorgio"],
  "Viktor": ["Hana", "Ian"],
  "Wang": ["Jing"],
  "Xiomara": ["Kaito"],
  "Yuki": ["Leila"],
  "Zane": ["Mateo"],
  "Aditi": ["Nia"],
  "Boris": ["Oscar"],
  "Celine": ["Priya"],
  "Diego": ["Qi"],
  "Elif": ["Rami"],
  "Farah": ["Sven"],
  "Giorgio": ["Tomoko"],
  "Hana": ["Umar"],
  "Ian": ["Vera"],
  "Jing": ["Wyatt"],
  "Kaito": ["Xia"],
  "Leila": ["Yassin"],
  "Mateo": ["Zara"],
  "Nia": ["Antonio"],
  "Oscar": ["Bianca"],
  "Priya": ["Cai"],
  "Qi": ["Dimitri"],
  "Rami": ["Ewa"],
  "Sven": ["Fabio"],
  "Tomoko": ["Gabriela"],
  "Umar": ["Helena"],
  "Vera": ["Igor"],
  "Wyatt": ["Jun"],
  "Xia": ["Kim"],
  "Yassin": ["Lucia"],
  "Zara": ["Mohammed"]
}

Tests.equal_check("Complex graph cousins", 9, degree_of_separation(complex_tree, "Dimitri", "Fabio"))
Tests.equal_check("Complex graph far removed nephew", 14, degree_of_separation(complex_tree, "Lucia", "Jun"))
Tests.equal_check("Complex graph shortcuts", 12, degree_of_separation(complex_tree, "Wyatt", "Xia"))
