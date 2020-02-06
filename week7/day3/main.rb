# // Filter Out the Geese
# // Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

# // The geese are any strings in the following array, which is pre-populated in your solution:

# // For example, if this array were passed as an argument:
# // ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

# // Your function would return the following array:
# // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

# // The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.

require 'pry'



def goose_filter(array)
    remove_geese_word_index = []
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    array.each do |elem|
        geese.each do |geese_elem|
            if geese_elem == elem
                remove_geese_word_index << array.index(geese_elem)
            end
        end
    end
    p remove_geese_word_index
end

goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])

def goose_remove(array)
    remove_geese_word_index.each do |elem|

    end

end


binding.pry



# filter
# includes

