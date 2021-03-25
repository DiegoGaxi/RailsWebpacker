class AddAttributesToRestaurant < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :nombre, :string
    add_column :restaurants, :descripcion, :string
    add_column :restaurants, :fotografia, :bytea
  end
end
