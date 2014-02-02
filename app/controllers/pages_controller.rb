class PagesController < ApplicationController
  
  respond_to :json, :html
  
  def contact
    Notifier.contact(params[:page]).deliver
    render json: {message: 'Thank you for contacting us! We will do our best to reply you as soon as possible.'}
  end
end
