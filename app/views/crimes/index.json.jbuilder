json.array!(@crimes) do |crime|
  json.extract! crime, :id, :name, :year, :total, :latitude, :longitude
  json.url crime_url(crime, format: :json)
end
