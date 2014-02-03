class Cart < ActiveRecord::Base
  acts_as_shopping_cart_using :line_item
  
  def tax_pct
    1
  end
  
  def discount
    0
  end

end
