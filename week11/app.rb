secret_content_array = []
secret_content_hash = {}

File.open("secret.txt").each do |line|
    secret_content_array << line.chomp().split(',')
end
secret_content_array.shift()

secret_content_array.each do |array|
    # p array
    secret_content_hash[(:array[0])] = array
    # puts (array[0].split(',')) 
end


require 'pry'
binding.pry


# {'Alica Brereton':[{product:'Marijuana', unitPrice:'9.18', units:'50', totalPrice:'459.00'}],
#  'William Kotai':[{product:'ecstasy', unitPrice:'19.12', units:'20', totalPrice:'382.40'}],
#  'Joel Forro':[{product:'heroin', unitPrice:'91.16', units:'5', totalPrice:'455.80'},{product:'ecstasy', unitPrice:'19.12', units:'10', totalPrice:'191.20'}],
