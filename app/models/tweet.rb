class Tweet < ApplicationRecord
  validates :text, presence: true
  belongs_to :user

  validates :name, presence: true, unless: :image?
end