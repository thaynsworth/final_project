# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


    crimePath = "#{Rails.root}/app/assets/javascripts/crime_json_data/crime1.json"
    crimes = JSON.parse(File.read(crimePath))
    crimes.each do |crime|
      longitude = crime['geometry']['coordinates'][0]
      latitude = crime['geometry']['coordinates'][1]
      name = crime['properties']['CR']
      year = crime['properties']['YR']
      total = crime['properties']['TOT']
      Crime.create({
        name: name,
        year: year,
        total: total,
        longitude: longitude,
        latitude: latitude
      })
    end
