class Dice
    def self.roll(roll_num = 1)
        if roll_num == 1
            (1..6).to_a.sample
        else 
            rolled_dice_array = []
            roll_num.times do
            rolled_dice_array << (1..6).to_a.sample
            end
            rolled_dice_array
        end
    end
end

require 'pry'
binding.pry
