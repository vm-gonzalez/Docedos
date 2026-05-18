# app/controllers/auth_controller.rb
class AuthController < ApplicationController
  # POST /register
  def register
    user = User.new(user_params)
    
    if user.save
      # Retornamos el usuario (sin la contraseña)
      render json: { user: user.as_json(except: [:password_digest]) }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # POST /login
  def login
    user = User.find_by(email: params[:email])

    # Verificamos si el usuario existe y si la contraseña coincide
    if user&.authenticate(params[:password])
      render json: { user: user.as_json(except: [:password_digest]) }, status: :ok
    else
      render json: { error: "Credenciales inválidas" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password)
  end
end