## Emergency and live notifications update
- In order to support the new emergency and live notifications there are changes that are required to be deployed to ALL the sites that implement static navigation. There are no changes to the interactive navigation implementation.

- Since the static navigation is implemented via iframe, there are cross-domain security restrictions, and the iframe embeds cannot communicate with the site that the nav is implemented on.

- In order to solve this issue, you are required to deploy a "iframe buster," an HTML file that needs to be uploaded to the the document root of your site, ie agency.ny.gov/xd_nygov.html

- Now it can be downloaded:
  - http://nygovdev.prod.acquia-sites.com/sites/all/widgets/universal-navigation/xd_nygov.html

- Eventually, all the agencies can download it from: 
  - http://www.ny.gov/sites/all/widgets/universal-navigation/xd_nygov.html

- If you can deploy xd_nygov.html to the document root - you are done. You should start seeing the alerts if they are present

- If you can not deploy the xd_nygov.html file to the documentroot, you would need to update the static navigation embed code and pass a new parameter, xdiframe, which should contain the url encoded path to the file, ie http://nygovdev.prod.acquia-sites.com/load_global_menu/ajax?iframe=true&xdiframe=%2Fsites%2Fall%2Fwidgets%2Funiversal-navigation%2Fxd_nygov.html
