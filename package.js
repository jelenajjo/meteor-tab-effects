Package.describe({
  summary: "A couple of modern and subtle tab styles and effects for your inspiration.",
  version: "2.0.0",
  name: "jelena:meteor-tab-effects",
  git: "https://github.com/jelenajjo/meteor-tab-effects.git"
});


Package.onUse(function (api) {
  api.use('jquery@1.0.0', 'client');

  api.addFiles('fonts/stroke7pixeden/stroke7pixeden.eot', 'client');
  api.addFiles('fonts/stroke7pixeden/stroke7pixeden.svg', 'client');
  api.addFiles('fonts/stroke7pixeden/stroke7pixeden.ttf', 'client');
  api.addFiles('fonts/stroke7pixeden/stroke7pixeden.woff', 'client');
  api.addFiles('demo.css', 'client');
  api.addFiles('tabs.css', 'client');
  api.addFiles('tabstyles.css', 'client');
  api.addFiles('modernizr.custom.js', 'client');
  api.addFiles('tabs.js', 'client'); 
});
