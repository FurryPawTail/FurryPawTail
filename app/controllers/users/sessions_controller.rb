# frozen_string_literal: true

module Users
  class SessionsController < Devise::SessionsController
    # before_action :configure_sign_in_params, only: [:create]

    # GET /resource/sign_in
    # def new
    #   super
    # end

    # POST /resource/sign_in
    # def create
    #   super
    # end

    # DELETE /resource/sign_out
    # def destroy
    #   super
    # end

    # protected

    # If you have extra params to permit, append them to the sanitizer.
    # def configure_sign_in_params
    #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
    # end
    private

    def respond_with(resource, _opts = {})
      render json: { status: { code: 200, message: 'Signed in sucessfully.' },
                      data: UserSerializer.new(resource).serializable_hash[:data][:attributes] 
                    }, status: :ok
    end

    def respond_to_on_destroy
      if current_user
        render json: { status: { code: 200, message: 'Logged out sucessfully.' } }, status: :ok
      else
        render json: { status: { code: 401, message: 'Unauthorized.' } }, status: :unauthorized
      end
    end
  end
end
