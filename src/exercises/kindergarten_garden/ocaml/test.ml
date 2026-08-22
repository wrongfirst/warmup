let full_garden = "VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV"

let () =
  Tests.equal_check "single student Alice" ["radishes"; "clover"; "grass"; "grass"] (plants "RC\nGG" "Alice");
  Tests.equal_check "two students Bob" ["clover"; "grass"; "radishes"; "clover"] (plants "VVCG\nVVRC" "Bob");
  Tests.equal_check "Bob in small garden" ["clover"; "clover"; "clover"; "clover"] (plants "VVCCGG\nVVCCGG" "Bob");
  Tests.equal_check "Charlie in small garden" ["grass"; "grass"; "grass"; "grass"] (plants "VVCCGG\nVVCCGG" "Charlie");
  Tests.equal_check "full garden - Alice" ["violets"; "radishes"; "violets"; "radishes"] (plants full_garden "Alice");
  Tests.equal_check "full garden - Bob" ["clover"; "grass"; "clover"; "clover"] (plants full_garden "Bob");
  Tests.equal_check "full garden - Kincaid" ["grass"; "clover"; "clover"; "grass"] (plants full_garden "Kincaid");
  Tests.equal_check "full garden - Larry" ["grass"; "violets"; "clover"; "violets"] (plants full_garden "Larry")
