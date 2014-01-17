class Product < ActiveRecord::Base
  attr_accessible :company_url, :description, :name, :price
end
