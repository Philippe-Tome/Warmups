# Switch up
# Write a function switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

# switchUp("Switch caSe FoR eVery letter") --> // "sWITCH CAsE fOr EvERY LETTER"

# Extension
# If words are separated by spaces or underscores, change them to dashes. For example:

# switchUp2("js_Was_created_bY BRENdan Eich") --> // "JS-wAS-CREATED-By-brenDAN-eICH"

require 'pry'

def switch_up (str)
    switched_str = ""
    str.each_char do |char|
        if char == char.upcase
            char = char.downcase
            switched_str << char
        else
            char = char.upcase
            switched_str << char
        end
    end
    switched_str = switched_str.gsub(' ', '-')
    puts switched_str
end


switch_up("Switch caSe FoR eVery letter")


binding.pry

