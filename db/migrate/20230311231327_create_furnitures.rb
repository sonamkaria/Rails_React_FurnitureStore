class CreateFurnitures < ActiveRecord::Migration[7.0]
  def change
    create_table :furnitures do |t|
      t.string :title
      t.string :body
      t.string :image
      t.integer :price
      t.string :color

      t.timestamps
    end
  end
end
