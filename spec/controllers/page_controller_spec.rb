require 'rails_helper'

RSpec.describe PageController, type: :controller do

  describe "GET #Home" do
    it "returns http success" do
      get :Home
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #About" do
    it "returns http success" do
      get :About
      expect(response).to have_http_status(:success)
    end
  end

end
