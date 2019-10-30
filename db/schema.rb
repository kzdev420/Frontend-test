# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_29_190437) do

  create_table "soccers", force: :cascade do |t|
    t.string "title"
    t.datetime "game_time"
    t.string "home_team_logo"
    t.string "away_team_logo"
    t.integer "reach"
    t.string "league"
    t.string "channel"
    t.integer "price_per_minute"
    t.integer "minutes_booked"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
