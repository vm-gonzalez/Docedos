# config/routes.rb
Rails.application.routes.draw do
  # Endpoint para verificar la salud de la app (vuelve a activar la URL /up)
  get "up" => "rails/health#show", as: :rails_health_check

  post '/register', to: 'auth#register'
  post '/login', to: 'auth#login'
end