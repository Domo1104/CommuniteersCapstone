class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]
  
    def create
      volunteer = Volunteer.find_by(email: params[:email].downcase)
      puts params
      if volunteer.present? && volunteer.authenticate(params[:password])
        session[:user_id] = volunteer.id
        render json: volunteer, status: :created
      else
        return render json: { error: "Wrong email or password" }, status: 401
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
end
