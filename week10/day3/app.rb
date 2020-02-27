class Say
    def initialize(number)
        @numbers_to_name = {
            90 => "ninety",
            80 => "eighty",
            70 => "seventy",
            60 => "sixty",
            50 => "fifty",
            40 => "forty",
            30 => "thirty",
            20 => "twenty",
            19=>"nineteen",
            18=>"eighteen",
            17=>"seventeen", 
            16=>"sixteen",
            15=>"fifteen",
            14=>"fourteen",
            13=>"thirteen",              
            12=>"twelve",
            11 => "eleven",
            10 => "ten",
            9 => "nine",
            8 => "eight",
            7 => "seven",
            6 => "six",
            5 => "five",
            4 => "four",
            3 => "three",
            2 => "two",
            1 => "one"
          }
        @number = number
    end
    def in_english
        str = ""
        if @number > 0 && @number < 21
            return str = @numbers_to_name[@number]
        else
            num_str = @number.to_s
            return str = "#{@numbers_to_name[num_str[0].to_i * 10]} #{@numbers_to_name[num_str[1].to_i]}"
        end
    end
end
require 'pry'
binding.pry







































# def in_words(int)
#     numbers_to_name = {
#         1000000 => "million",
#         1000 => "thousand",
#         100 => "hundred",
#         90 => "ninety",
#         80 => "eighty",
#         70 => "seventy",
#         60 => "sixty",
#         50 => "fifty",
#         40 => "forty",
#         30 => "thirty",
#         20 => "twenty",
#         19=>"nineteen",
#         18=>"eighteen",
#         17=>"seventeen", 
#         16=>"sixteen",
#         15=>"fifteen",
#         14=>"fourteen",
#         13=>"thirteen",              
#         12=>"twelve",
#         11 => "eleven",
#         10 => "ten",
#         9 => "nine",
#         8 => "eight",
#         7 => "seven",
#         6 => "six",
#         5 => "five",
#         4 => "four",
#         3 => "three",
#         2 => "two",
#         1 => "one"
#       }
#     str = ""
#     numbers_to_name.each do |num, name|
#       if int == 0
#         return str
#       elsif int.to_s.length == 1 && int/num > 0
#         return str + "#{name}"      
#       elsif int < 100 && int/num > 0
#         return str + "#{name}" 
#         if int%num == 0
#             return str + "#{name} " + in_words(int%num)
#       elsif int/num > 0
#         return str + in_words(int/num) + " #{name} " + in_words(int%num)
#       end
#     end
#   end
  
#   puts in_words(4)
#   puts in_words(27)
#   puts in_words(102)
#   puts in_words(38079)
#   puts in_words(82102713)


#   puts in_words(4) == "four"
#   puts in_words(27) == "twenty seven"
#   puts in_words(102) == "one hundred two"
#   puts in_words(38_079) == "thirty eight thousand seventy nine"
#   puts in_words(82102713) == "eighty two million one hundred two thousand seven hundred thirteen"