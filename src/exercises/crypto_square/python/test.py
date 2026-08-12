if 'cipher_text' not in globals():
    raise Exception("cipher_text function is not defined")

Tests.equal_check("empty plain text results in an empty cipher text", "", cipher_text(""))
Tests.equal_check("normalization results in empty text", "", cipher_text("..."))
Tests.equal_check("Lowercase", "a", cipher_text("A"))
Tests.equal_check("Remove spaces", "b", cipher_text("  b "))
Tests.equal_check("Remove punctuation", "1", cipher_text("@1,%!"))
Tests.equal_check("9 character plaintext forms 3x3 square", "tsf hiu isn", cipher_text("This is fun!"))
Tests.equal_check("8 character plaintext forms 3x3 square with trailing space", "clu hlt io ", cipher_text("Chill out."))
Tests.equal_check("54 character plaintext forms 8x7 rectangle", "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau ", cipher_text("If man was meant to stay on the ground, god would have given us roots."))
