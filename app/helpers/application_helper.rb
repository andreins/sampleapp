module ApplicationHelper
  def full_title(page_title=' ')
    base_tile = "Ruby on Rails App"
    if page_title.empty?
      base_title
    else
      page_title = page_title + " | " + base_tile
    end
  end
end
