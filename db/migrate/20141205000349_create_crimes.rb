class CreateCrimes < ActiveRecord::Migration
  def change
    create_table :crimes do |t|
      t.string :name
      t.string :coordinates
      t.string :year
      t.string :total

      t.timestamps
    end
  end
end
