class CreateSuperUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :super_users do |t|
      t.string :first_name
      t.string :last_name
      t.string :identity_number
      t.string :account
      t.string :password
      t.date :birthday
      t.string :gender

      t.timestamps
    end
  end
end
