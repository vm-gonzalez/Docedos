# app/models/user.rb
class User < ApplicationRecord
  has_secure_password # Esto usa bcrypt para encriptar el password_digest

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end