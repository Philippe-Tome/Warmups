# // Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# // He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.

# // Write code in ruby so that you can have an interactive conversation with Daniel. Make sure you include some testing in order to verify your code.

# // Hints
# // gets, get string is the opposite of puts put string.

# // Notice that when you type "Something" and then hit enter, you get the string "Something\n"

# // loop do
# //   # talk to Daniel here
# // end

loop do 
    print("Speak to Dan: ")
    me_speak = gets().chomp()
    break if me_speak == "quit"
        if me_speak[-1, 1] == "?"
            puts("Sure")
        elsif me_speak == ""
            puts ("Fine. Be that way!")
        elsif me_speak == me_speak.upcase
            puts ("Woah, chill out!")
        else
            puts("Whatever")
        end
end

   