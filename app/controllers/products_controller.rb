class ProductsController < ApplicationController
  
  respond_to :json, :html
  
  def index
    products = Product.active_products                
    respond_with products.as_json
  end
  
  def show
    product = Product.includes(:reviews).find(params[:id])
    respond_with product.as_json(include: :reviews)
  end
  
  def create
    product = Product.new(params[:product])
    product.save
    respond_with product
  end
  
  def update
    product = Product.find(params[:id])
    product.update_attributes!(params[:product])
    respond_with product
  end 
    
end
