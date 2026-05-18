# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://docedos-production.up.railway.app', 'https://docedos-production.up.railway.app/login', 'http://localhost:3000' # En producción, cambia "*" por el dominio de tu frontend
    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end