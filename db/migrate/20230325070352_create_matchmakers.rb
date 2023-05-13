# frozen_string_literal: true

class CreateMatchmakers < ActiveRecord::Migration[7.0]
  def change
    create_table :matchmakers do |t|
      t.string :first_name
      t.string :last_name
      t.string :identity_number
      t.string :account
      t.string :password
      t.datetime :birthday
      t.string :gender

      t.timestamps
    end
  end
end
