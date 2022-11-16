class VolunteerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password

  has_many :events
end
