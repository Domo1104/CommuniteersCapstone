class EventsController < ApplicationController
    skip_before_action :authorized, only: [:index]

    #GET /events
    def index
        event = Event.all
        render json: event
    end

    #GET /events/:id
    def show
        event = find_event
        render json: event
    end

    #POST /events/:id
    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    #PATCH /events/:id
    def update
        event = find_event
        event.update(event_params)
        render json: event
    end

    #DELETE /events/:id
    def destroy
        event = find_event
        event.destroy
        head :no_content
    end

    private

    def find_event
        Event.find_by(id: params[:id])
    end

    def event_params
        params.permit(:title, :start_date_time, :end_date_time, :location, :category, :description)
    end


    def authorized
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
