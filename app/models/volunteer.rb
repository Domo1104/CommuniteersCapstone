class Volunteer < ApplicationRecord
    has_many :signups
    has_many :events, through: :signups
    accepts_nested_attributes_for :signups

    validates :email, uniqueness: true
    validates :first_name, :last_name, :password, presence: true
    validates :password, confirmation: true

    has_secure_password
end
