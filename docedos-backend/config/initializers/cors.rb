Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # Deja únicamente los dominios base sin rutas (/login) ni barras diagonales finales (/)
    origins 'https://docedos-production.up.railway.app', 'http://localhost:3000'

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end