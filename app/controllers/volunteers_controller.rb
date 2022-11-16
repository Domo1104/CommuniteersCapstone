class VolunteersController < ApplicationController
    skip_before_action :authorized, only: [:index, :create]

    #GET /volunteers
    def index
        volunteer = Volunteer.all
        render json: volunteer
    end

    #GET /volunteers/:id
    def show
        volunteer = Volunteer.find(params[:id])
        if volunteer
          render json: volunteer, status: :ok
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
    
    #POST /volunteers/:id
    def create
        volunteer = Volunteer.create!(volunteer_params)
        render json: volunteer, status: :created
    end

    #PATCH /volunteers/:id
    def update
        volunteer = find_volunteer
        volunteer.update(volunteer_params)
        render json: volunteer
    end

    def check_email
        return unless params[:email].present?
      
        volunteer = Volunteer.find_by_email(params[:email].downcase)
        return 'taken' if Recurly::Account.find(volunteer)
        'available'
    end
    
    private

    def find_volunteer
        Volunteer.find_by(id: params[:id])
    end
    
    def volunteer_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

    def authorized
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
