class ProductsController < ApplicationController
  
  respond_to :json
  
  def index
    products = Product.select('name, price, description, id')
    respond_with products
  end
  
end
