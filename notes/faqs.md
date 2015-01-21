## Frequently Asked Questions

### Where should the universal navigation be deployed?

All public facing websites and web applications should implement the universal navigation. Intranets and internal applications are not currently in scope.  If you feel that there is an exception, please raise it in the Yammer group.  The Universal Navigation policy (being drafted) will also communicate the scope.

### Which Universal Navigation banner should be chosen?

There are two options for the Universal Navigation: static and interactive. Websites may choose to implement the option that best fits the needs of each site.  If problems persist while implementing the interactive universal banner, fall back to using the static version until the issue is resolved.

If your site requires that links from the banner open in a new window/tab, then you should use the static version and [enable the option to open links in a new window/tab](static-option.md#open-links-in-new-windows-or-tabs). The interactive version does not support this option and all links will open in the same window.

### Is this the final code, banner, and footer?

The embed code is likely final, but until all outstanding issues have been resolved, there is always a chance of change.

The design is finalized, but any major user experience or functional issues will be addressed before launch. If there are unresolved issues that would impact the user experience on a website, fall back to the simplified static version. After launch, issues and enhancement suggestions will be tracked and reviewed and the universal navigation will be iteratively improved. 

### Will the Policy be updated?

Yes. After a launch date has been finalized. (previous policy for reference http://on.ny.gov/1uXDHuI)

### How can agency leadership or press offices get more non-techical information about the universal navigation?

If there are non-technical more strategic questions that are not answered in the FAQs, questions can be elevated through PIO channels to the [Media Services Center](http://www.ogs.ny.gov/Core/MSC/) as the Chamber is sponsoring and guiding the effort from a user/citizen experience perspective. Please also share this demo and guidance site with any website stakeholders.

### What if a website or application cannot implement the Universal Navigation at NY.GOV launch?

Though all applications should attempt to replace the banner at the NY.GOV launch, If that is not achievable, move forward through normal deployment schedules so that the universal navigation can be implemented as soon as possible.  All apps should have the new Universal Navigation two weeks after NY.GOV launches.

### In the Banner several links are not HTTPS which will cause a certificate error on HTTPS pages, will this be rectified?

SSL Cert is currently in progress. All links will be HTTPS in final code.

### When should I try to fix an issue with uNav for my own site (Instance)?

When presented with a bug in uNav, follow the appropriate steps to determine the scope of your issue. Two scopes are:

###### Global Issue

> Issue affects everyone.

###### Instance Issue

> Issue only affects a single site or a group of similar sites (think: Drupal sites using the X module). Issue comes from your own code base (can affect multiple people, but not everyone).

#### Steps you can use to determine the scope of an issue (Global or Instance):

 1. View in another web browser to see if you can replicate issue.
 1. Ensure that IE is not running in "compatibility mode" (F12: Browser Mode)
 1. View another site that uses the uNav to see if you can replicate the issue.
 1. View on and off NYS networks to see if the problem persists.

##### If you problem is "Globally scoped":

 1. [Search GitHub for any issues that may be the same or similar to your own](https://github.com/nys-its/universal-navigation/issues)
  * If you find an issue, read all the comments and determine if you need to add more info from your instance or not.
 1. If you can't find any related issues, [open a new issue on GitHub](https://github.com/nys-its/universal-navigation/issues/new)
  * Be sure to include all the information required for an issue, outlined in [the contribution guidelines document](/contributing.md#when-creating-an-issue-please-provide-all-possible-of-the-following).

#### If your problem is "Instance scoped":

 1. Follow the steps outlined above for a globally scoped issue.
 1. Use Interactive version (patching your issue locally)
 1. Use Static version (static should not cause any issues)

### How will issues be tracked after launch?

[GitHub Issues](https://github.com/nys-its/universal-navigation/issues) in this repo will be used to track feedback, issues, and enhancement requests after the Universal Navigation is released.

### How will the Universal Navigation search field work with our local search?

The interactive Universal Navigation's search results will first be scoped to the domain of the current site, with the user having the ability to see global results if desired. If this is satisfactory, the existing site search can be removed. If a site's search functionality is needed because of special collections or features, the static Universal Navigation can be used - which will not include a search box.

### What browsers does the Universal Navigation support?

The interactive banner supports IE8+, Sites that support <IE8 will need to implement the static banner. More detailed browser support levels will be posted soon.

### What is the purpose of the integration of the Google Tag Manager code?

[Google Tag Manager](http://www.google.com/tagmanager/faq.html) will enable future deployment and central management of universal analytics or other experience monitoring tools without page code changes each time. At present, Google Tag Manager is not serving any functionality. Any implementations will involve communications with the technical owners of each web property.

### What if I want to disable the translate option for my sites?

There is a setting to disable the "settings" dropdown in the uNav. It is documented here: [Hide Settings Dropdown](interactive-option.md#hide-settings-dropdown)

### What if I want to disable the search feature in the uNav?

There is a setting to disable the search feature in the uNav. It is documented here: [Hide Search](interactive-option.md#hide-search)

### When is it acceptable not to have the Universal Navigation fill the width of the page?

The unniversal navigation was designed to take up the entire width of the webpage.  Therefore, all attempts should be made to implement the universal navigation as such.  If both static and interactive versions of the universal navigation are causing issues at full width, then specific exclusions can be made to alter the size of the universal navigation.  If this is the case, make sure to update/note the issue in the [tracking spreadsheet](http://on.ny.gov/1s24y7T) for the navigation implementation.

### When can the Universal Navigaton be placed in containers, `<div>` tags, or other locations away from the `<body>` tag?

As specified in the [implementation instructions](https://github.com/nys-its/universal-navigation/blob/gh-pages/notes/interactive-option.md), the code for the universal navigation should be placed as close as possible to the `<body>` tag without being inside a respective div or container.

In specific instances where the code needs to be placed in a container to resolve site issues (such as a styling/CSS issue), testing should be done to make sure that the universal navigation remains usable across all functions.

# Universal Navigations Alerts & Notifications

### What do the alerts/notifications look like?

![uNav Alert Examples](https://cloud.githubusercontent.com/assets/5767736/5414923/ff2fe5ec-81f0-11e4-9186-4705e34773cc.PNG "uNav Alert Examples")

### Will both be active at the same time?

No, only one would be active at a time.

### Is there a live demo?

A simple demo is available at the link below. The demo points to the development server to display a test alert.

[Universal Navigation Alerts - Development Environment Test](http://nys-its.github.io/universal-navigation/demos/static-option-demo-DEV.html)

### How do I update my code to add the alerts?

If you're using the **Interactive Banner**, you don't have to do anything. 

If you're using the **Static Banner**, you can follow these directions to add a special HTML file that will enable the alerts. We recommmend testing in a development environment first before deploying to production.

[Instructions for adding Universal Navigation Alerts](https://github.com/nys-its/universal-navigation/blob/gh-pages/notes/static-option.md#inserting-functionality-for-emergency-and-news-alerts)

[Additional information on QA Testing](https://github.com/nys-its/universal-navigation/blob/gh-pages/notes/testing-against-development-staging.md)
