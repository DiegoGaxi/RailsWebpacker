# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.delete_all

Restaurant.create! (
  [
    {
      descripcion: "Be yourself; as a Dogo",
      nombre: "Hot Dogs",
      fotografia: 'NULL'
    },
    {
      descripcion: "Para Los Genios de Comida",
      nombre: "Albert Einstein",
      fotografia: 'NULL'
    },
    {
      descripcion: "Sushi de Culiacan",
      nombre: "Culichi Roll",
      fotografia: 'NULL'
    },
    {
      descripcion: "Comida China al mejor precio",
      nombre: "Mahatma onichan",
      fotografia: 'NULL'
    },
    {
      descripcion: "Nuestro Pozole De Casa",
      nombre: "Pozole",
      fotografia: 'NULL'
    },
    {
      descripcion: "El mejor en Carnes",
      nombre: "Carnitas",
      fotografia: 'NULL'
    }
  ]
)
puts "Restaurants seeded!"

Comment.delete_all

# Comment.create! (
  [
    {
      restaurant_id: 54,
      message: "Quiero mas!!",
      fecha:"2021-03-24",
      usuario:"Anonimo"
    },
    {
      restaurant_id: 55,
      message: "Albert Einstein Comeria aqui",
      fecha:"2021-03-24",
      usuario:"Anonimo"
    },
    {
      restaurant_id: 56,
      message: "Delicioso, Si vuelvo.",
      fecha:"2021-03-24",
      usuario:"Anonimo"
    },
    {
      restaurant_id: 57,
      message: "Me encantó",
      fecha:"2021-03-24",
      usuario:"Anonimo"
    },
    {
      restaurant_id: 58,
      message: "Muy Rico",
      fecha:"2021-03-24",
      usuario:"Anonimo"
    },
    {
      restaurant_id: 59,
      message: "Buen Restaurante",
      fecha:"2021-03-24",
      usuario:"Anonimo"
    }
  ].each do |prueba|
    a = Comment.new(prueba)
    a.save()
  end
# )


puts "Comments seeded!"

# ActiveRecord::Base.connection.reset_pk_sequence!(:restaurants)
# ActiveRecord::Base.connection.reset_pk_sequence!(:comments)