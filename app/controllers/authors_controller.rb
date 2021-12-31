class AuthorsController < ApplicationController
  before_action :authorize

  def index
    authors = current_user.authors
    render json: authors
  end

  def show
    author = current_user.authors.find_by(id:params[:id])
    if author
      render json: author
    else
      render json: {error: "book Not Found"}, status: :not_found
end
end

  def create 
    author = current_user.authors.create(author_params)
    if author.valid?
      render json: author
    else
      render json: { errors: author.errors.full_messages }, status: :unprocessable_entity
    end
  end


def update
  author = current_user.authors.find_by(id:params[:id])
  if author
    author.update(author_params)
    render json: author
  else
    render json: { error: "Author not found" }, status: :not_found
  end
end

def destroy
  author = current_user.authors.find_by(id:params[:id])
  if author
    author.destroy
    head :no_content
  else
    render json: { error: "Author Not Found"}, status: :not_found
  end
end

private

def current_user
   User.find_by( id:session[:user_id])
end

def author_params
  params.permit( :id, :name )
end

def authorize
  return render json: { errors: "Access Denied" }, status: :unauthorized unless session.include? :user_id
end
end
