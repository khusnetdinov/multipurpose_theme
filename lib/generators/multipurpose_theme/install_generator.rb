module MultipurposeTheme
  class InstallGenerator < Rails::Generators::NamedBase
    source_root File.expand_path('../templates', __FILE__)
    
    def assets
      gem 'sass-rails', '~> 5.0'
      gem 'bourbon'
      gem 'jquery-rails'

      Bundler.with_clean_env { run 'bundle install' }

      copy_file 'theme.css.scss', 'app/assets/stylesheets/theme.css.scss'
      copy_file 'ie8.css.scss', 'app/assets/stylesheets/ie8.css.scss'
      copy_file 'theme.js', 'app/assets/javascripts/theme.js'
    end
  end
end
