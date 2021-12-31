# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


verne = Author.create(name: "Jules Verne") 
steven = Author.create(name: "Steven King") 
boulle = Author.create(name: "Pierre Boulle") 
tolkien = Author.create(name: "J.R.R. Tolkien") 
rowling = Author.create(name: "J.K. Rowling")  
  

twenty_thousand_leagues_under_the_sea = Book.create(title: "Twenty Thousand Leauges Under the Sea", genre: "Adventure", rating: 4, author_id: verne.id)
it = Book.create(title: "IT", genre: "Horror", rating: 3,  author_id: steven.id)
last_stand = Book.create(title: "Last Stand", genre: "Horror", rating: 3, author_id: steven.id)
planet_of_the_apes = Book.create(title: "Planet of the Apes", genre: "Fantasy", rating: 4, author_id: boulle.id)
the_hobbit = Book.create(title: "The Hobbit", genre: "Fantasy", rating: 4, author_id: tolkien.id)
the_fellowship_of_the_ring = Book.create(title: "The Fellowship Of The Ring", genre: "Fantasy", rating: 5, author_id: tolkien.id)
sorcerors_stone = Book.create(title: "Sorceror's Stone", genre: "Fantasy", rating: 4, author_id: rowling.id)


puts "Done Seeding"