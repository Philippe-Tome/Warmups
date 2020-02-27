class MakeWord
    def initialize(word)
        @word = word
    end
    def can_make_word
        blocks = [
            ['B','O'],
            ['X','K'],
            ['D','Q'],
            ['C','P'],
            ['N','A'],
            ['G','T'],
            ['R','E'],
            ['T','G'],
            ['Q','D'],
            ['F','S'],
            ['J','W'],
            ['H','U'],
            ['V','I'],
            ['A','N'],
            ['E','R'],
            ['F','S'],
            ['L','Y'],
            ['P','C'],
            ['Z','M']
          ]
        @word.split('').each do |letter|
            blocks.each do |block|
                if block.include? (letter)
                    blocks.delete_at(blocks.index(block))
                    break
                else
                    puts "false inside the block loop"
                end
            end
            p blocks.length
            return true
        end
        puts "all unique"
        puts "false outside the block loop"
        return false
    end
end

require 'pry'
binding.pry


