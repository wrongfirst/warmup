if 'tally' not in globals():
    raise Exception("tally function is not defined")

Tests.equal_check("just the header if no input", ["Team                           | MP |  W |  D |  L |  P"], tally([]))

win_loss_exp = [
  "Team                           | MP |  W |  D |  L |  P",
  "Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3",
  "Blithering Badgers             |  1 |  0 |  0 |  1 |  0"
]
Tests.equal_check("a win is three points, a loss is zero points", win_loss_exp, tally(["Allegoric Alaskans;Blithering Badgers;win"]))

draw_exp = [
  "Team                           | MP |  W |  D |  L |  P",
  "Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1",
  "Blithering Badgers             |  1 |  0 |  1 |  0 |  1"
]
Tests.equal_check("a draw is one point each", draw_exp, tally(["Allegoric Alaskans;Blithering Badgers;draw"]))
