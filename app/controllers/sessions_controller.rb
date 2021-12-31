class SessionsController < ApplicationController
  # skip_before_action :authorized, only: :create

  def create 
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else 
      render json: {error: "Access Denied"}, status: :unauthorized
  end
end

  #logout
  def destroy
    session.clear
  end
end
