# // Write a program that creates a string that represents an 8×4 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

# // # # # # # # # #
# //  # # # # # # # #
# // # # # # # # # #
# //  # # # # # # # #
# // Extension
# // When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable symbol that generates the board using the specified character instead.

require 'pry'



def print_pattern(x,y)
    str = '#'
    str2 = ' #'
    # X print
    if x > 1
        i = 1
        loop do
            str = str + (' #')
            str2 = str2 + (' #')
            i += 1
            break if i == x
        end
    end
    # Y print
    if y == 1
        puts str
    else 
        j = 0
        loop do
            if j.even?
                puts str
                j += 1
            else
                puts str2
                j += 1
            end
            break if j == y
        end
    end
end
    
print("Type in how many # you want per lines: ")
x = gets().chomp().to_i
if x < 1
    x = 1
end
print("Type in how many lines you want: ")
y = gets().chomp().to_i
if y < 1
    y = 1
end
print_pattern(x, y)

binding.pry