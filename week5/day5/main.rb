require 'pry'


# Params
# Do NOT setup a web server for this problem. Just create a .rb file and write your answers there.

# You receive the data:

params = {
  username: 'chocolate',
  password: 'pudding',
  friends: ['vanilla', 'strawberry', 'caramel'],
  image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
}

# Write the code to:

# print the username to the console.
puts params[:username]

# print the last friend from friends.
puts params[:friends].last

# check if the password meets the requirements of at least 8 characters.
min_password = 8
pass_valid = params[:password].size > min_password
puts pass_valid
puts params[:password].size > min_password
puts "Is the password valid? #{ params[:password].size > min_password }" 

# add a key-value pair to params where key is the data_sent_time and the value is the current time.
params[:data_sent_time] = Time.now.strftime("%H:%M:%S")
puts params[:data_sent_time]

# Difference between Time.new & Time.now is that Time.new can also work as a function as well as retireve the time right now like Time.now. If passing data as a string to Time.new it will create a hash with the date/time you pass in.


# Extension
# Write code to check that the image is from the unsplash website.
puts params[:image_url].include? "unsplash"





binding.pry