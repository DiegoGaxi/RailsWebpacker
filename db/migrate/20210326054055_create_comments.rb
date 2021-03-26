class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :restaurant, null: false, foreign_key: true
      t.string :message
      t.date :fecha
      t.string :usuario

      t.timestamps
    end
  end
end
