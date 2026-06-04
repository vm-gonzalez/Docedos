class UsersController < ApplicationController
  # PUT /user/sync
  def sync
    user = User.find_by(id: params[:user_id])

    if user
      if user.update(user_params)
        render json: { message: "Sincronizado correctamente", user: user.as_json(except: [:password_digest]) }, status: :ok
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Usuario no encontrado" }, status: :not_found
    end
  end

  private

  def user_params
    params.permit(:lang, :theme, :theme_color, sexual_progress: {}, orgullo_progress: {}, gratitud_progress: {})
  end
end