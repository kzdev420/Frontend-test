class GameController < ApplicationController
  def all
    @teams = Soccer.all
  end
end
