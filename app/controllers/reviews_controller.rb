class ReviewsController < ApplicationController
  
  respond_to :json
  
  def create
    product = Product.find(params[:product_id])
    review = product.reviews.create!(params[:review])
    render json: review 
  end
  
end
