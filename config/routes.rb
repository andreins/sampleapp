Rails.application.routes.draw do
  get 'home'   =>  'pages#home'
  root             'pages#home'
  get 'help'    => 'pages#help'
  get 'signup'  => 'users#new'
end
