# Testing Against Development

- [Interactive] ()
  - [Interactive Header] ()
  - [Interactive Footer] ()
- [Static] ()
  - [Static Header] ()
  - [Static Footer] ()

## Interactive

### Interactive Header
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

### Interactive Footer
```html
    <div id="nygov-universal-footer">
    <noscript>
        <iframe width="100%" height="200px" src="//nygovdev.prod.acquia-sites.com/load_global_footer/ajax?iframe=true" frameborder="0" style="border:none; overflow:hidden; width:100%; height:200px;" scrolling="no">
            Your browser does not support iFrames
        </iframe>
    </noscript>
</div>

```

## Static

### Static Header
```html
<iframe id="nygov-universal-navigation-frame" class="nygov-universal-container" width="100%" height="86px" src="//nygovdev.prod.acquia-sites.com/load_global_menu/ajax?iframe=true" data-updated="2014-11-07 08:30" frameborder="0" style="border:none; overflow:hidden; width:100%; height:86px;" scrolling="no">
            Your browser does not support iFrames
</iframe>
<!-- Google Tag Manager -->
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-T4FP6H" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script type="text/javascript">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0];var j=d.createElement(s);var dl=l!='dataLayer'?'&l='+l:'';j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;j.type='text/javascript';j.async=true;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T4FP6H');</script>
<!-- End Google Tag Manager -->
```

### Static Footer
```html
<iframe id="nygov-universal-footer-frame" class="nygov-universal-container" width="100%" height="200px" src="//nygovdev.prod.acquia-sites.com/load_global_footer/ajax?iframe=true" data-updated="2014-11-07 08:30" frameborder="0" style="border:none; overflow:hidden; width:100%; height:200px;" scrolling="no">
            Your browser does not support iFrames
</iframe>
```

