# always-on-time
- Challenge 5 assignment for BCU Bootcamp due 04-08-22
- Deployed URL: https://jonacko.github.io/always-on-time/

Image of deployed web page:

![image](https://user-images.githubusercontent.com/106882755/182896029-e0dd0d19-a53e-4c14-88c2-059ae5f98f04.png)


Contents:

1. Summary
2. Key amendments
3. Issues encountered/further amendments
4. Credits

## 1. Summary

This project was undertaken as a submission for a Birmingham City Bootcamp assignment, with a brief to create a simple calendar application that allows a user to save events for each hour of the day. It required the use of Moment.js to work with date and time and to be powered by jQuery.

![image](https://user-images.githubusercontent.com/106882755/182896224-849d7b32-044b-490a-a890-b80457452e2c.png)


## 2. Key amendments:

- Updated CDN link for Bootstrap & jQuery
- Google Fonts links updated with chosen font style & linked in CSS
- CSS modified for personalisation
- Timeblocks added as divs/textarea 8am - 5pm in HTML
- Grid system added using Bootstrap
- Date & time added using moment; updates time every millisecond to display live time by the second
- Data in 'textbox' saved to localStorage; reloads on refreshing page
- If statement added to check hour-block and add/remove CSS classes as necessary


## 3. Issues encountered/further amendments

Please see commented out code for detail of issues/further amendments needed, but summary is below:

- TO DO: optimize for other screen sizes using media queries (although not in assignment specification)
- TODO: further explore use of 'this' keywords & chaining multiple methods

## 4. Credits
- Help accessing time block loops and local storage code: https://birmingham.bootcampcontent.com/university-of-birmingham/UBHM-VIRT-FSF-PT-06-2022-U-LOLC/-/tree/main/05-Third-Party-APIs/02-Challenge Retrieval date: 31/07/22 

- Help adding live time update in JS: https://stackoverflow.com/questions/34625764/moment-js-dynamically-update-time-in-seconds

- Help understanding local storage in JS: https://blog.logrocket.com/localstorage-javascript-complete-guide/#:~:text=localStorage%20in%20JavaScript.-,What%20is%20localStorage%20in%20JavaScript%3F,the%20browser%20window%20is%20closed.

