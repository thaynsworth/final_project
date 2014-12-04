Rails.application.routes.draw do
  resources :users
  resources :sessions

  root 'users#index'

  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  get 'signup' => 'users#new'

end
