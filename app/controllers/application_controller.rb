class ApplicationController < ActionController::Base
  protect_from_forgery
  
  after_filter  :set_csrf_cookie_for_ng
  
  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if verified_request?
  end
  
  protected
  
  def verified_request?
    super || form_authenticity_token == request.headers['X_XSRF_TOKEN']
  end
  
end
