# frozen_string_literal: true

module Admin
  class HomeController < ApplicationController
    before_action :authenticate_user!

    def index; end
  end
end
