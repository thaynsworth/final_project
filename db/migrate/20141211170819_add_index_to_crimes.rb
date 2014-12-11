class AddIndexToCrimes < ActiveRecord::Migration
  def change
    add_index :crimes, :name
  end
end
