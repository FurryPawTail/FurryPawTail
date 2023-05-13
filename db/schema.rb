# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 20_230_325_070_352) do
  create_table 'adoptees', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.string 'name', null: false
    t.string 'species'
    t.string 'breed', null: false
    t.string 'gender'
    t.integer 'age'
    t.string 'kind'
    t.boolean 'ligation'
    t.integer 'donation'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'adopters', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.string 'identity_number'
    t.string 'account'
    t.string 'password'
    t.datetime 'birthday'
    t.string 'gender'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'advanced_users', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.string 'identity_number'
    t.string 'account'
    t.string 'password'
    t.date 'birthday'
    t.string 'gender'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'matchmakers', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.string 'identity_number'
    t.string 'account'
    t.string 'password'
    t.datetime 'birthday'
    t.string 'gender'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'members', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.string 'identity_number'
    t.string 'account'
    t.string 'password'
    t.datetime 'birthday'
    t.string 'gender'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'super_users', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.string 'identity_number'
    t.string 'account'
    t.string 'password'
    t.date 'birthday'
    t.string 'gender'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'users', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.string 'identity_number'
    t.string 'account'
    t.string 'password'
    t.datetime 'birthday'
    t.string 'gender'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end
end
