class CartsController < ApplicationController

  before_filter :set_shopping_cart
  respond_to :json
  
  def create
    @product = Product.select("id, price").find(params[:id])
    @cart.add(@product, @product.price)
    respond_with @cart
  end
  
  def show
    respond_with cart_as_json
  end

  def update
    product = Product.find(params[:product])
    @item = @cart.shopping_cart_items.select{|item| item.id == params[:item_id].to_i }.first
    @item.update_attribute(:quantity, params[:quantity])
  end

  def destroy
    product = Product.find(params[:id])
    item = @cart.shopping_cart_items.select{|item| item.item_id == product.id }
    @cart.remove(product, item.first.quantity)
    respond_with cart_as_json
  end
  
  private
  
  def cart_as_json
    @cart.as_json(only: [:id],
                 methods: [:subtotal, :total, :taxes, :discount], 
                 include: {
                   shopping_cart_items: {
                     only: [:id, :item_id, :item_type, :price, :quantity], 
                     include: {item: {only: [:name]}}}
                 })
  end

end
