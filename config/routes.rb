Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'restaurant#index'
  
  get '/restaurants/:id', to: 'restaurant#show'
  get '/restaurants', to: 'restaurant#show_all'
  # namespace :api do
  #   resources :restaurants
  # end

  match '*path', to: 'restaurant#index', via: :all
end
