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

  def update_preferences
    user = current_user # o la forma en que identifiques la sesión activa
    if user.update(preferences_params)
      render json: { message: 'Preferencias actualizadas correctamente' }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def preferences_params
    # Permite los campos exactos que creaste en tu migración
    params.require(:user).permit(:theme, :color, :language)
  end
end