require 'pry'

# // can you break the secret code?
# // Write a program to decode this message:

# // NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.

# // This is a form of cryptography known as the Caesar Ciper. It has a shift parameter of 3.

# // The alphabet is normally:

# // ABCDEFGHIJKLMNOPQRSTUVWXYZ
# // The alphabet with the shift parameter of 3 is now as follows:

# // DEFGHIJKLMNOPQRSTUVWXYZABC
# // which means if the original message is HELLO. The encrypted message will be KHOOR

# // H -> K
# // E -> H
# // L -> O
# // L -> O
# // O -> R
# // decode the second secret message:
# // ERQXV ILIWHHQ PLQXWHV EUHDN


def decode(secret, offset)
    secret_array = []
    secret_array2 = []
    secret.each_byte do |c|
        secret_array2 << c
        if (c - offset) <= 64 && (c > 67)
            secret_array << (c + 26)
        elsif (c - offset) <= 90 
            secret_array << (c - offset)
        elsif (c - offset) <= 96
            secret_array << (c - offset + 26)
        else 
            secret_array << (c - offset)
        end
    end
    return secret_array.pack('C*')
end

p decode("ERQXV ILIWHHQ PLQXWHV EUHDN", 3)


binding.pry