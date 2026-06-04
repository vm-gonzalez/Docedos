class AddPreferencesAndProgressToUsers < ActiveRecord::Migration[8.1]
  def change
    add_column :users, :lang, :string, default: 'es'
    add_column :users, :theme, :string, default: 'dark'
    add_column :users, :theme_color, :string, default: 'blue'
    add_column :users, :sexual_progress, :jsonb, default: {}
    add_column :users, :orgullo_progress, :jsonb, default: {}
    add_column :users, :gratitud_progress, :jsonb, default: {}
  end
end