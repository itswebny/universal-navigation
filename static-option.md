## Option #2: Simple iFrame Universal Navigation & Footer

___!!! Place this code at the very top of your site, outside of any container divs, and as close to the opening \<body\> tag as possible. The header should expand to 100% of the screen width, even if your current site has a fixed width. !!!___


```
<iframe width="100%" height="86px" src="//static-assets.ny.gov/load_global_menu/ajax?iframe=true" frameborder="0" style="border:none; overflow:hidden; width:100%; height:86px;" scrolling="no">
            Your browser does not support iFrames
        </iframe>
```

### Footer Embed Code (pair with static banner)

 ___!!! Place this code at the very bottom of your site, outside of any container divs, as close to and before the closing \<body\> tag. The footer should expand to 100% of the screen, even if your current site has a fixed width. !!!___

```
<iframe width="100%" height="86px" src="//static-assets.ny.gov/load_global_footer/ajax?iframe=true" frameborder="0" style="border:none; overflow:hidden; width:100%; height:86px;" scrolling="no">
            Your browser does not support iFrames
</iframe>

```
