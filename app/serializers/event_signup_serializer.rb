class EventSignupSerializer < ActiveModel::Serializer
  attributes :id, :title, :start_date_time, :end_date_time, :location

  has_many :events
end
