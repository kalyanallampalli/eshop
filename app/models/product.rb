class Product < ActiveRecord::Base
  attr_accessible :company_url, :description, :name, :price
  validates :description, :name, :price, presence: true
  validates :price, numericality: true
  has_many :reviews, dependent: :destroy
  
  def self.active_products
    joins("LEFT OUTER JOIN reviews ON (reviews.product_id = products.id)")
    .select('products.name, price, products.description, products.id, count(reviews) as review_count')
    .group('products.name, products.price, products.description, products.id')
    .order('review_count desc')
  end
   
end
