json.array!(@crimes) do |crime|
  json.extract! crime, :id, :name, :coordinates, :year, :total
  json.url crime_url(crime, format: :json)
end
