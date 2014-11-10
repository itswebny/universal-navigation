## Option #1: Interactive Universal Navigation & Footer

##### Using Internet Explorer? Be sure you are not running in "_Compatibility Mode_" when testing:
> Press the `F12 Key`, and click "Internet Explorer X Compatibilty Mode" and change to latest non-compatibility mode from the dropdown.

> **Defaulting to compatibility mode is a byproduct of IE's "intranet" settings**. While testing internally, you will experience this issue, even on closing and re-opening a browser window. **_EXTERNAL USERS WILL NOT EXPERIENCE THIS ISSUE_**. Please don't file issues about Compatibility mode unless you can replicate outside of NY networks. Thanks.

___!!! Place this code at the very top of your site, outside of any container divs, and as close to the opening \<body\> tag as possible. The header should expand to 100% of the screen width, even if your current site has a fixed width. !!!___


```html
<div id="nygov-universal-navigation" class="nygov-universal-container" data-iframe="true" data-updated="2014-11-07 08:30">
    <noscript>
        <iframe width="100%" height="86px" src="//static-assets.ny.gov/load_global_menu/ajax?iframe=true" frameborder="0" style="border:none; overflow:hidden; width:100%; height:86px;" scrolling="no">
            Your browser does not support iFrames
        </iframe>
    </noscript>
    <script type="text/javascript">
        var _NY = {
            HOST: "static-assets.ny.gov",
            BASE_HOST: "www.ny.gov",
            hideSettings: false,
            hideSearch: false
        };
        (function (document, bundle, head) {
            head = document.getElementsByTagName('head')[0];
            bundle = document.createElement('script');
            bundle.type = 'text/javascript';
            bundle.async = true;
            bundle.src = "//static-assets.ny.gov/sites/all/widgets/universal-navigation/js/dist/global-nav-bundle.js";
            head.appendChild(bundle);
        }(document));
    </script>
</div>
```
### Footer Embed Code (pair with interactive banner)

 ___!!! Place this code at the very bottom of your site, outside of any container divs, as close to and before the closing \<body\> tag. The footer should expand to 100% of the screen, even if your current site has a fixed width. !!!___


```html
<div id="nygov-universal-footer" class="nygov-universal-container">
    <noscript>
        <iframe id="nygov-universal-footer-frame" class="nygov-universal-container" width="100%" height="200px" src="//static-assets.ny.gov/load_global_footer/ajax?iframe=true" data-updated="2014-11-07 08:30" frameborder="0" style="border:none; overflow:hidden; width:100%; height:200px;" scrolling="no">
            Your browser does not support iFrames
        </iframe>
    </noscript>
</div>

```

## Available Settings

### Hide Settings Dropdown

Change `hideSettings` to `true` in the configuration for _NY:

```js
hideSettings : true,
```

### Hide Search

Change `hideSearch` to `true` in the configuration for _NY:

```js
hideSearch : true
```
