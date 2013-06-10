class AddCardIdsToRounds < ActiveRecord::Migration
  def change
    change_table :rounds do |t|
      t.text :card_ids
    end
  end
end
