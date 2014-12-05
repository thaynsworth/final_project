json.array!(@crimes) do |crime|
  json.extract! crime, :id, :type, :coordinates, :year, :total
  json.url crime_url(crime, format: :json)
end
