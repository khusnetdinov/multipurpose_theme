# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'multipurpose_theme/version'

Gem::Specification.new do |spec|
  spec.name          = "multipurpose_theme"
  spec.version       = MultipurposeTheme::VERSION
  spec.authors       = ["Marat Khusnetdinov"]
  spec.email         = ["marat@khusnetdinov.ru"]

  spec.summary       = %q{Multipurpose bootstrap theme}
  spec.description   = %q{Multipurpose bootstrap theme for rails usage}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.9"
  spec.add_development_dependency "rake", "~> 10.0"
end
