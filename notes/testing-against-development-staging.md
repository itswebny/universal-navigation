# Testing Against Development and Staging

Use this embed code to test against the Universal Navigation in development:

### Header
```html
<div id="nygov-universal-navigation" data-iframe="true">
    <noscript>
        <iframe width="100%" height="86px"
                src="//nygovdev.prod.acquia-sites.com/load_global_menu/ajax?iframe=true" frameborder="0"
                style="border:none; overflow:hidden; width:100%; height:86px;" scrolling="no">
            Your browser does not support iFrames
        </iframe>
    </noscript>
    <script type="text/javascript">
        var _NY = {
            HOST: "nygovdev.prod.acquia-sites.com",
            BASE_HOST: "nygovdev.prod.acquia-sites.com",
            hideSettings: false,
            hideSearch: false
        };
        (function (document, bundle, head) {
            head = document.getElementsByTagName('head')[0];
            bundle = document.createElement('script');
            bundle.type = 'text/javascript';
            bundle.async = true;
            bundle.src = "//nygovdev.prod.acquia-sites.com/sites/all/widgets/universal-navigation/dist/global-nav-bundle.js";
            head.appendChild(require);
        }(document));
    </script>
</div>
```

### Footer
```html
    <div id="nygov-universal-footer">
    <noscript>
        <iframe width="100%" height="200px" src="//nygovdev.prod.acquia-sites.com/load_global_footer/ajax?iframe=true" frameborder="0" style="border:none; overflow:hidden; width:100%; height:200px;" scrolling="no">
            Your browser does not support iFrames
        </iframe>
    </noscript>
</div>

```

You can also get the Embed code for testing: http://nygovdev.prod.acquia-sites.com/embed
