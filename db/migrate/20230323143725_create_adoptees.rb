# frozen_string_literal: true

class CreateAdoptees < ActiveRecord::Migration[7.0]
  def change
    create_table :adoptees do |t|
      t.string :name
      t.string :species
      t.string :breed
      t.string :gender
      t.integer :age
      t.string :kind
      t.boolean :ligation
      t.integer :donation

      t.timestamps
    end
  end
end
