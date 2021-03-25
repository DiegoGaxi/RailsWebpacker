class RestaurantController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def show
    @restaurante = Restaurant.find(params[:id])
    render json: @restaurante
  end

  def create
    @restaurante = Restaurant.new(restaurante_params)
    if @restaurante.save
      render json: @restaurante, status: :created
    else
      render json: @restaurante.errors, status: :unprocessable_entity
    end
  end

  def update
    @restaurante = Restaurant.find(params[:id])
    if @restaurante.update(restaurante_params)
      render json: @restaurante, status: :ok
    else
      render json: @restaurante.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @restaurante = Restaurant.find(params[:id])
    @restaurante.destroy
    head :no_content
  end
  
  private
    def restaurante_params
      params.require(:restaurante).permit(:title, :content)
    end
end
