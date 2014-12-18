class CrimesController < ApplicationController
  before_action :set_crime, only: [:show, :edit, :update, :destroy]

  # GET /crimes
  # GET /crimes.json
  def index
    puts 'about to get all crimes'
    @crimes = Crime.all
    puts 'finished with crimes'
    @crimes.to_json
  end

  def search_by_name
    if params["name"] == "ALL CRIMES"
      crimes = Crime.all
    else
      crimes = Crime.where(name: params["name"])
    end
    render json: crimes.to_json, status: 200
  end

  # GET /crimes/1
  # GET /crimes/1.json
  def show
  end

  # GET /crimes/new
  def new
    @crime = Crime.new
  end

  # GET /crimes/1/edit
  def edit
  end

  # POST /crimes
  # POST /crimes.json
  def create
    @crime = Crime.new(crime_params)

    respond_to do |format|
      if @crime.save
        format.html { redirect_to @crime, notice: 'Crime was successfully created.' }
        format.json { render :show, status: :created, location: @crime }
      else
        format.html { render :new }
        format.json { render json: @crime.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /crimes/1
  # PATCH/PUT /crimes/1.json
  def update
    respond_to do |format|
      if @crime.update(crime_params)
        format.html { redirect_to @crime, notice: 'Crime was successfully updated.' }
        format.json { render :show, status: :ok, location: @crime }
      else
        format.html { render :edit }
        format.json { render json: @crime.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /crimes/1
  # DELETE /crimes/1.json
  def destroy
    @crime.destroy
    respond_to do |format|
      format.html { redirect_to crimes_url, notice: 'Crime was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_crime
      @crime = Crime.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def crime_params
      params.require(:crime).permit(:name, :coordinates, :year, :total)
    end
end
