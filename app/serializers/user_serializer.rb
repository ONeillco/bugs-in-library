class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :authors
  # has_many :books
end
