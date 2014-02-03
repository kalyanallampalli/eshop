class ApplicationController < ActionController::Base
  protect_from_forgery

  after_filter  :set_csrf_cookie_for_ng
  before_filter :set_shopping_cart
  
  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if verified_request?
  end
  
  

  protected

  def verified_request?
    super || form_authenticity_token == request.headers['X_XSRF_TOKEN']
  end

  def set_shopping_cart
    @cart = Cart.find(session[:cart]) rescue Cart.create
    session[:cart] = @cart.id
  end

end
