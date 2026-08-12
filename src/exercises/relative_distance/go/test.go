package main

func main() {
	Tests.EqualCheck("Direct parent-child relation", 1, DegreeOfSeparation(map[string][]string{ "Vera": {"Tomoko"}, "Tomoko": {"Aditi"} }, "Vera", "Tomoko"))
	Tests.EqualCheck("Sibling relationship", 1, DegreeOfSeparation(map[string][]string{ "Dalia": {"Olga", "Yassin"} }, "Olga", "Yassin"))
	Tests.EqualCheck("Two degrees of separation, grandchild", 2, DegreeOfSeparation(map[string][]string{ "Khadija": {"Mateo"}, "Mateo": {"Rami"} }, "Khadija", "Rami"))
	Tests.EqualCheck("Unrelated individuals", -1, DegreeOfSeparation(map[string][]string{ "Priya": {"Rami"}, "Kaito": {"Elif"} }, "Priya", "Kaito"))

	complexTree := map[string][]string{
		"Aiko": {"Bao", "Carlos"},
		"Bao": {"Dalia", "Elias"},
		"Carlos": {"Fatima", "Gustavo"},
		"Dalia": {"Hassan", "Isla"},
		"Elias": {"Javier"},
		"Fatima": {"Khadija", "Liam"},
		"Gustavo": {"Mina"},
		"Hassan": {"Noah", "Olga"},
		"Isla": {"Pedro"},
		"Javier": {"Quynh", "Ravi"},
		"Khadija": {"Sofia"},
		"Liam": {"Tariq", "Uma"},
		"Mina": {"Viktor", "Wang"},
		"Noah": {"Xiomara"},
		"Olga": {"Yuki"},
		"Pedro": {"Zane", "Aditi"},
		"Quynh": {"Boris"},
		"Ravi": {"Celine"},
		"Sofia": {"Diego", "Elif"},
		"Tariq": {"Farah"},
		"Uma": {"Giorgio"},
		"Viktor": {"Hana", "Ian"},
		"Wang": {"Jing"},
		"Xiomara": {"Kaito"},
		"Yuki": {"Leila"},
		"Zane": {"Mateo"},
		"Aditi": {"Nia"},
		"Boris": {"Oscar"},
		"Celine": {"Priya"},
		"Diego": {"Qi"},
		"Elif": {"Rami"},
		"Farah": {"Sven"},
		"Giorgio": {"Tomoko"},
		"Hana": {"Umar"},
		"Ian": {"Vera"},
		"Jing": {"Wyatt"},
		"Kaito": {"Xia"},
		"Leila": {"Yassin"},
		"Mateo": {"Zara"},
		"Nia": {"Antonio"},
		"Oscar": {"Bianca"},
		"Priya": {"Cai"},
		"Qi": {"Dimitri"},
		"Rami": {"Ewa"},
		"Sven": {"Fabio"},
		"Tomoko": {"Gabriela"},
		"Umar": {"Helena"},
		"Vera": {"Igor"},
		"Wyatt": {"Jun"},
		"Xia": {"Kim"},
		"Yassin": {"Lucia"},
		"Zara": {"Mohammed"},
	}

	Tests.EqualCheck("Complex graph cousins", 9, DegreeOfSeparation(complexTree, "Dimitri", "Fabio"))
	Tests.EqualCheck("Complex graph far removed nephew", 14, DegreeOfSeparation(complexTree, "Lucia", "Jun"))
	Tests.EqualCheck("Complex graph shortcuts", 12, DegreeOfSeparation(complexTree, "Wyatt", "Xia"))
}
