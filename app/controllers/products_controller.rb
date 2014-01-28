class ProductsController < ApplicationController
  
  respond_to :json, :html
  
  def index
    products = Product.select('name, price, description, id').order('created_at desc')
    respond_with products
  end
  
  def show
    product = Product.find(params[:id])
    respond_with product
  end
  
  def create
    product = Product.new(params[:product])
    product.save
    respond_with product
  end
  
end
