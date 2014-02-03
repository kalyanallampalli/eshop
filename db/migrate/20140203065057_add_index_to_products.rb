class AddIndexToProducts < ActiveRecord::Migration
  def change
    add_index :reviews, [:product_id, :id]
    add_index :products, :id
    add_index :products, :name 
  end
end
