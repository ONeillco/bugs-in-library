class BooksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # before_action :authorized
  # def index
  #   books = current_user.books
  #   render json: books
  # end

  def index
    if params[:author_id]
      author = Author.find(params[:author_id])
      books = author.books
    else
      books = Book.all
    end
    render json: books, include: :author
  end

#   def show
#     book = current_user.books.find_by(id:params[:id])
#     if book
#       render json: book
#     else
#       render json: {error: "book Not Found"}, status: :not_found
# end
# end

def show
  author = Author.find(params[:id])
  render json: author
end

def create
  book = current_user.books.create(book_params)
  render json: book, status: :created
end

def destroy
  book = current_user.books.find_by(id:params[:id])
  if book
    book.destroy
    head :no_content
  else
    render json: {error:"book Not Found"}, status: :not_found
end
end

def update
  book = Book.find_by(id:params[:id])
  if book
    book.update(book_params)
    render json: book, status: :accepted
  else
    render json: {error:"book Not Found"}, status: :not_found
end
end

private

# def book_params
#   params.permit[ :rating]

# end

def book_params 
  params.permit( :id, :title, :genre, :author_id )
end

def current_user
  User.find_by(id: session[:user_id])
end

def render_not_found_response
  render json: { error: "Book not found" }, status: :not_found
end

# def book_params
#   params.require(:book).permit(:title, :image, :description, :genre, :rating)
# end
end
