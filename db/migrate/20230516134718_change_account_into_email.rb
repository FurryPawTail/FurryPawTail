# frozen_string_literal: true

class ChangeAccountIntoEmail < ActiveRecord::Migration[7.0]
  def change
    rename_column :adopters, :account, :email
    rename_column :advanced_users, :account, :email
    rename_column :matchmakers, :account, :email
    rename_column :members, :account, :email
    rename_column :super_users, :account, :email

    remove_column :users, :account
  end
end
