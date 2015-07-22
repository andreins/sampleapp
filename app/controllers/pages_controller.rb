class PagesController < ApplicationController

  def home
    @home_path = request.fullpath
  end

  def help
    @help_path = request.fullpath
  end
end
