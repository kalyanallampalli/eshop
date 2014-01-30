class Review < ActiveRecord::Base
  attr_accessible :description, :product_id, :name
  validates :description, presence: true
  belongs_to :product  
  
end
