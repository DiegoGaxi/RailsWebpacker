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
      nombre: "Be yourself; everyone else is already taken.",
      descripcion: "Oscar Wilde",
      fotografia: 'NULL'
    },
    {
      nombre: "Two things are infinite: the universe and human stupidity; " \
            "and I'm not sure about the universe.",
      descripcion: "Albert Einstein",
      fotografia: 'NULL'
    },
    {
      nombre: "So many books, so little time.",
      descripcion: "Frank Zappa",
      fotografia: 'NULL'
    },
    {
      nombre: "Be the change that you wish to see in the world",
      descripcion: "Mahatma Gandhi",
      fotografia: 'NULL'
    },
    {
      nombre: "If you tell the truth, you don't have to remember anything.",
      descripcion: "Mark Twain",
      fotografia: 'NULL'
    }
  ]
)
puts "Restaurants seeded!"