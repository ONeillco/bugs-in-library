class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :genre
      t.float :rating
      t.integer :author_id

      t.timestamps
    end
  end
end
