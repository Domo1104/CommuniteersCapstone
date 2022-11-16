class SignupSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :volunteer_id, :task

  belongs_to :event
end
