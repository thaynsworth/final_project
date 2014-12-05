class RemoveCoordinatesColumn < ActiveRecord::Migration
  def change
    remove_column :crimes, :coordinates
  end
end
