class AddLongLatColumnToCrimes < ActiveRecord::Migration
  def change
    add_column :crimes, :longitude, :Decimal
    add_column :crimes, :latitude, :Decimal
  end
end
