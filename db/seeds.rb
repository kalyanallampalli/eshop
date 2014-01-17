# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

products = [
  {name: 'Samsung Galaxy S3', description: 'Samsung Galaxy S3 is the sequel to the extremely successful Samsung Galaxy S2. Samsung Galaxy S3 has a 4.8-inch Super AMOLED touchscreen with a resolution 720 x 1280 pixels.', price: 25000},
  {name: 'Apple iPhone 5S', description: 'The iPhone 5S has a gorgeous 4-inch LED backlit rIPS LCD touch screen display. The phone is powered by a 1.3 GHz dual-core Apple A7 processor.', price: 56500},
  {name: 'Sony Xperia C', description: 'Sony Xperia C has a gorgeous 4-inch LED backlit rIPS LCD touch screen display. The phone is powered by a 1.3 GHz dual-core Apple A7 processor.', price: 25000},
  {name: 'Nokia Lumia', description: 'Nokia Lumia has a gorgeous 4-inch LED backlit rIPS LCD touch screen display. The phone is powered by a 1.3 GHz dual-core Apple A7 processor.', price: 27000},
  {name: 'Sony Xperia Z1', description: 'Sony Xperia Z1 has a gorgeous 4-inch LED backlit rIPS LCD touch screen display. The phone is powered by a 1.3 GHz dual-core Apple A7 processor.', price: 30000}
]

products.each do |product|
  Product.create(product)
end
