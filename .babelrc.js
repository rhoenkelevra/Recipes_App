{
  "presets": [ // collection of code transform plugins
      [
        "@babel/env", 
        {
          "targets": 
          {
            "browsers": 
            [
                "last 5 versions",
                "ie >= 8"
            ]
          }
        }
     ]
  ]
}
