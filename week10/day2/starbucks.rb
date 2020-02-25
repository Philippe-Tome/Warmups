
class Coffee

    def initialize(name, order, size, sugar_qty)
        def random_int(min, max)
            rand(max - min) + min
        end
        random_number = random_int(0, (name.length - 1))
        random_letter = ('a'..'z').to_a.sample
        @name = name[1..-1]
        @name = @name.insert(random_number, random_letter).capitalize
        @order = order
        @size = size
        @sugar_qty = sugar_qty
    end
    def to_s
        "#{ @name }'s #{ @order }, #{ @size }, #{ @sugar_qty } sugars"
    end
end

c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
puts c1

require 'pry'
binding.pry