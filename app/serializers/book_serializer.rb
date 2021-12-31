class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :author_id

  belongs_to :author
end
