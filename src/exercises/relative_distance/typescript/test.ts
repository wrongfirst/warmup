// @ts-nocheck
if (typeof degreeOfSeparation !== "function") {
  throw new Error("degreeOfSeparation function is not defined");
}

Tests.equalCheck("Direct parent-child relation", 1, degreeOfSeparation({ "Vera": ["Tomoko"], "Tomoko": ["Aditi"] }, "Vera", "Tomoko"));
Tests.equalCheck("Sibling relationship", 1, degreeOfSeparation({ "Dalia": ["Olga", "Yassin"] }, "Olga", "Yassin"));
Tests.equalCheck("Two degrees of separation, grandchild", 2, degreeOfSeparation({ "Khadija": ["Mateo"], "Mateo": ["Rami"] }, "Khadija", "Rami"));
Tests.equalCheck("Unrelated individuals", null, degreeOfSeparation({ "Priya": ["Rami"], "Kaito": ["Elif"] }, "Priya", "Kaito"));

const complexTree = {
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
};

Tests.equalCheck("Complex graph cousins", 9, degreeOfSeparation(complexTree, "Dimitri", "Fabio"));
Tests.equalCheck("Complex graph far removed nephew", 14, degreeOfSeparation(complexTree, "Lucia", "Jun"));
Tests.equalCheck("Complex graph shortcuts", 12, degreeOfSeparation(complexTree, "Wyatt", "Xia"));
