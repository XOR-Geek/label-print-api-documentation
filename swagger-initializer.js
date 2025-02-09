window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "api_documentation.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    // Add the requestInterceptor
    requestInterceptor: function(req) {
      if (req.url.includes("/api/")) {
        req.url = req.url.replace("/api/", "/label-print-api/");
      }
      return req;
    }
  });

  //</editor-fold>
};
