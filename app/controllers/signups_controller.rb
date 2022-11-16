class SignupsController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:show]

    def show
        signup = Signup.where(volunteer_id: params[:id])
        render json: signup
    end
    
    #POST /signups/:id
    def create
        signup = Signup.create(signup_params)
        render json: signup, status: :created
    end


    #PATCH /signups/:id
    def update
        signup = find_signup
        signup.update(params.permit(:task))
        render json: signup
    end

    #DELETE /signups/:id
    def destroy
        signup = find_signup
        find_signup.destroy
        head :no_content
    end

    private

    def find_signup
        Signup.find_by(id: params[:id])
    end

    def signup_params
        params.permit(:event_id, :task, :volunteer_id)
    end

    def authorized
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
