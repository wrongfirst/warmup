// @ts-nocheck
if (typeof allergicTo !== "function" || typeof list !== "function") {
  throw new Error("allergicTo and list functions must be defined");
}

Tests.equalCheck("not allergic to anything", false, allergicTo("eggs", 0));
Tests.equalCheck("allergic only to eggs", true, allergicTo("eggs", 1));
Tests.equalCheck("allergic to eggs and something else", true, allergicTo("eggs", 3));
Tests.equalCheck("allergic to something, but not eggs", false, allergicTo("eggs", 2));
Tests.equalCheck("allergic to everything", true, allergicTo("eggs", 255));
Tests.equalCheck("allergic to peanuts", true, allergicTo("peanuts", 7));
Tests.equalCheck("ignores non-allergen bits for allergicTo", true, allergicTo("eggs", 257));

Tests.equalCheck("no allergies", JSON.stringify([]), JSON.stringify(list(0)));
Tests.equalCheck("just eggs", JSON.stringify(["eggs"]), JSON.stringify(list(1)));
Tests.equalCheck("just peanuts", JSON.stringify(["peanuts"]), JSON.stringify(list(2)));
Tests.equalCheck("just strawberries", JSON.stringify(["strawberries"]), JSON.stringify(list(8)));
Tests.equalCheck("eggs and peanuts", JSON.stringify(["eggs", "peanuts"]), JSON.stringify(list(3)));
Tests.equalCheck("more than eggs but not peanuts", JSON.stringify(["eggs", "shellfish"]), JSON.stringify(list(5)));
Tests.equalCheck("everything", JSON.stringify(["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"]), JSON.stringify(list(255)));
Tests.equalCheck("ignores non-allergen score parts", JSON.stringify(["eggs", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"]), JSON.stringify(list(509)));
Tests.equalCheck("ignores non-allergen score parts without highest valid score", JSON.stringify(["eggs"]), JSON.stringify(list(257)));
