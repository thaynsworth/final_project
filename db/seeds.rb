# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


crimePath = "#{Rails.root}/app/assets/javascripts/test_crimes.json"
crimes = JSON.parse(File.read(crimePath))
crimes.each do |crime|
  Crime.create!(crime.except(:type, ))
end