# It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

# Create a program that collects lunch orders. Prompt:
# Name for order: (enter name)
# {name} wants to order: (enter item)
# Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
# Example: Greg can order a Burger, and then add Fries to his order later.
# After storing data, prompt the user with:
# Add another item to the order? (y/n)
# Repeat steps 1 & 2 if the answer is "y"
# After the user completes adding orders, print out:
# "All orders: {order data}"
# Keep going...
# Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

# "Greg ordered a sandwich"
# "Peter ordered a burger & fries"
# "Travis ordered a salad, apple & water"
# You may have to do some hunting in Ruby docs!

require 'pry'

name_input = ""
order_input = ""
orders = {
    names: {
    }
}
print("Name for order: ")
name_input = gets.chomp
orders[:names][name_input] = []

loop do 
    print("#{name_input} wants to order: ")
    order_input = gets.chomp
    orders[:names][name_input] << order_input
    print("Add another item to the order? (y/n): ")
    xtra_input = gets.chomp
    break if xtra_input == "n"
end

orders[:names][name_input].each do |arr|

    puts ("#{name_input} ordered  #{orders[:names][name_input]}")
end

# converts the name_input from string to a symbol.


binding.pry