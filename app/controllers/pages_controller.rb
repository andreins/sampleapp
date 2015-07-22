class PagesController < ApplicationController
  def home

  end

  def help
    @path = request.fullpath
  end
end
