require 'pry'

# Series Sum
# Your task is to write a function which returns the sum of following series upto nth term(parameter).

# Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
# Rules:
# You need to round the answer to 2 decimal places and return it as String.
# If the given value is 0 then it should return 0.00
# You will only be given Natural Numbers as arguments.
# Examples:
# seriesSum(1) => 1 = "1.00"
# seriesSum(2) => 1 + 1/4 = "1.25"
# seriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"


def seriesSum(num)
    total =  0
    denominator = 1
    if num == 0
        total = 0.0
    elsif num == 1
        total = 1.0
    else
        cycle = num - 1
        cycle.times do 
            denominator +=3
            total += (1.0/(denominator))
        end
        total += 1
    end
    total = sprintf('%.2f', total)
    puts ("Result is #{total}")
end


seriesSum(0)
seriesSum(1)
seriesSum(2)
seriesSum(5)

binding.pry

# [11] pry(main)> 1/4r
# => (1/4)
# [12] pry(main)> num = 3
# => 3
# [13] pry(main)> 1/4r + 2/4r
# => (3/4)
# [14] pry(main)> "1/#{num}"
# => "1/3"
# [15] pry(main)> "1/#{num}".to_r
# => (1/3)

