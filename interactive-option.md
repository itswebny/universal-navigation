## Option #1: Interactive Universal Navigation & Footer

```
<div id="nygov-universal-navigation" data-iframe="true">
    <noscript>
        <iframe width="100%" height="86px" src="//nygov.prod.acquia-sites.com/load_global_menu/ajax?iframe=true" frameborder="0" style="border:none; overflow:hidden; width:100%; height:86px;" scrolling="no">
            Your browser does not support iFrames
        </iframe>
    </noscript>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>
    <script type="text/javascript">
        var NY = {
            HOST : "nygov.prod.acquia-sites.com"
        };
        (function(document, require, head) {

            head = document.getElementsByTagName('head')[0];

            require = document.createElement('script');
            require.type = 'text/javascript';
            require.async = true;
            require.setAttribute('data-main',"//nygov.prod.acquia-sites.com/sites/all/widgets/universal-navigation/js/main");
            require.src = "//nygov.prod.acquia-sites.com/sites/all/widgets/universal-navigation/js/require.js";

            head.appendChild(require);

        }(document));
    </script>
</div>
```
### Footer Embed Code (pair with interactive banner)

```
<div id="nygov-universal-footer">
    <noscript>
        <iframe width="100%" height="86px" src="//nygov.prod.acquia-sites.com/load_global_footer/ajax?iframe=true" frameborder="0" style="border:none; overflow:hidden; width:100%; height:86px;" scrolling="no">
            Your browser does not support iFrames
        </iframe>
    </noscript>
</div>
```

