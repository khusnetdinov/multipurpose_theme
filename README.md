# Multipurpose rails theme

## Description
Multipurpose HTML5 Template built with the help of Bootstrap 3.3 framework. It is fully customizable, it has uncountable features and shortcodes, but at the same time, even a begginer can make the most of it. With this template you could easily built a business, e-commerce, corporate, agency, blog, portfolio website, or even more if you are a little creative.

## Full features list

	Responsive Design
	Top Notch Support
	Free updates
	Online Documentation
	Retina Ready
	HTML5 and CSS3
	Multiple Home Pages
	Multiple Headers (15+)
	Multiple Footers
	Multiple Sliders (8+)
	Clean Code
	Fully Customizable
	Easy to work with
	Cross Browser (Tested on IE9, IE10, IE11, Chrome, Firefox, Safari, Opera)
	Mobile Friendly (Tested on Android, iOS)
	Built with Bootstrap 3.3
	Optimized for speed
	SEO Friendly
	Boxed | Wide Layout
	Dark | Light version
	Revolution slider included
	Isotope Filtering
	Megamenu and Dropdown menus
	Unlimited color schemes
	Ecommerce Templates
	Portfolio Templates
	Blog Templates
	Sidebars (Left | Right | Both sides)
	Uncountable shortcodes
	Unlimited Web Fonts
	Hundreds of Icons
	Working share buttons (Facebook, Google+, Twiiter)
	Working ajax contact form
	Google ReCAPTCHA integration
	Mailchimp working subscribe form
	Working flickr widget
	Working twiter feed widget
	Social Icons
	Social Buttons
	Do it yourself
	So much more…

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'multipurpose_theme', github: 'khusnetdinov/multipurpose_theme'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install multipurpose_theme

Add theme assets file to rails app

    $ rails g multipurpose_theme:install assets

Add theme to your manifests files

Note: theme must be first, it allow to you reload styles `application.[css, scss]`

	//= require theme

Note: theme must be after jquery and before other components in `application.[js, coffee]`

	#= require jquery
	#= require jquery_ujs
	#= require theme

In `theme.[scss, js]` files select plugins what you need.

	//= require theme/bootstrap.min.css 
	//= require theme/font-awesome.min
	//= require theme/eleganticons
	//= require theme/rs-plugin/settings
	// require theme/owl.carousel
	// require theme/ion.rangeSlider
	// require theme/magnific-popup
	// require theme/boxed
	// require theme/colors/blue_grey
	// require theme/dark
	//= require theme/style


	# require theme/jquery-2.1.0.min
	#= require theme/bootstrap.min.js
	#= require theme/rs-plugin/initialize
	# require theme/owl.carousel.min
	# require theme/isotope/initialize
	# require theme/jquery.raty.min
	# require theme/jquery.appear
	# require theme/jquery.simple-text-rotator.min
	# require theme/jquery.magnific-popup.min
	# require theme/ion.rangeSlider.min
	# require theme/stellar.min
	# require theme/retina.min
	# require theme/sticky.min
	#= require theme/script

Note: with `=` required

If you not going to use `jquer-rails` gem you can use theme integraited jquery 2.1.0

Add ie8.css to `lauouts/application.html` if you want to use styles for ie 8 
