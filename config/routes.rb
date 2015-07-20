Rails.application.routes.draw do
  root 'welcome#index'
  get 'pages/home'
  get 'pages/help'
  get 'welcome/index'
end
