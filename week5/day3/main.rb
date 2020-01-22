require 'pry'

# Card Traders
# Alfred and Peter are best friends and Pokemon card traders. Each week they get together and decide to buy a new pack of Pokemon trading cards. Each pack has a total of 10 cards. Each card has the Pokemon's name and attack power.

# Alfred and Peter have not opened the pack yet, but it contains the following cards:

# Name	        Attack
# Pikachu	    40
# Rattata	    20
# Pidgeot	    60
# Alakazam	    80
# Butterfree	30
# Gengar	    70
# Moltres	    100
# Vulpix	    40
# Blastoise	    80
# Hitmonchan	50


card_pack = [
    ['Pikachu', 40],
    ['Rattata', 20],
    ['Pidgeot', 60],
    ['Alakazam', 80],
    ['Butterfree', 30],
    ['Gengar', 70],
    ['Moltres', 100],
    ['Vulpix', 40],
    ['Blastoise', 80],
    ['Hitmonchan', 50]
]

# 1. Put the above cards into an appropriate data structure (so that you can easily remove or change the order of cards if you needed to)

# 2. They are about to open the pack of cards, and they have a ritual for deciding who gets to keep each card in the pack.

# Do each of the following with your data structure:

# 2a) Firstly, keeping the cards faced down (so they cannot see), they reverse the order of the cards.
card_pack_reversed = card_pack.reverse

# 2b) They then split the cards into groups of 3, so they end up with 4 piles of cards (the first three with 3, and the last pile with just 1)

card_pack_sliced = card_pack_reversed.each_slice(3).to_a

puts "Card pack reversed: "
p card_pack_reversed
puts " "
puts "Card pack sliced: "
p card_pack_sliced


# 2c) Alfred takes the first and third piles of cards, and Peter takes the second and fourth piles. Create a new data structure for Alfred and Peter and pass them the cards.

alfred_cards = []
peter_cards = []
alfred_cards << card_pack_sliced[0]
alfred_cards << card_pack_sliced[2]
peter_cards << card_pack_sliced[1]
peter_cards << card_pack_sliced[3]
alfred_cards = alfred_cards.flatten(1)
peter_cards = peter_cards.flatten(1)

puts " "
print "Alfred cards are: "
p alfred_cards
puts " "
print "Peter cards are: "
p peter_cards


binding. pry


# Notes:
# # to slice an array into groups with 3 elements in there.
# str = ["a", "b", "c", "d", "e", "f"]
# p str.each_slice(3).to_a



