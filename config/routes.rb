Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :tweets, only: [:index, :new, :create, :destroy, :edit, :update, :show]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
    # pictweet
    resources :tweets do
      resources :comments, only: :create
    end
#追加
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end