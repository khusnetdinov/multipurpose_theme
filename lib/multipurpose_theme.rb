require 'rails'
require 'rails/generators'
require 'bundler'
require 'multipurpose_theme/version'

require 'generators/multipurpose_theme/install_generator'



module MultipurposeTheme
  class Engine < ::Rails::Engine
  end
end
