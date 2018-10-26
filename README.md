README
======

To run locally
--------------

- Have Nodejs installed (at least version 10.8.0)

Clone the repo into your projects folder:

```$ git clone __________ ```

Install the project's dependencies:

```$ npm install```

You'd need to set up your own Google+ API authentication keys (referred to in the application as ```googleClientID``` and ```googleClientSecret```) and set up a MongoDB database (the URI of which is referred to in the application as ```mongoURI```), (what var names to use) and place these in a separate keys.js folder. There's a 'keys-example.js' in the config folder that you can rename to 'keys.js' and amend the values for the appropriate keys.

Run the project locally:

```npm run dev```

Navigate to localhost:5000 to view the app.


Tech being used
---------------

- Express server

- MongoDB

- PassportJS

- NodeJS

- React

- Redux

- Redux Form

- Email Provider

- Google OAuth

- Stripe


User Flow
---------

On load:

- Home page

- Header with logo and Login link


When they click on Login link:

- Google OAuth flow to log user in

- On successful login, will be redirected to a Dashboard page


Dashboard page will show:

- A list of different campaigns they have

- Credits the user's account has

- Button to add more credit to user's account

- Logout link

- Button to add a new survey


Each campaign will have:

- Campaign name

- Results of the campaign

- Total surveys sent out


When user clicks to add more credit redirect to new page with:

- Payment form that asks for card payment details

- Submit button to submit their payments


When user clicks on card payment submit button:

- If payment accepted, redirect to Dashboard with updated credit amount

- If payment unsuccessful, show error message


When user clicks button to add new survey, redirect to survey form page that asks for:

- Survey title

- Subject of email campaign

- Email body

- Recipient list

- Button to next page


When user clicks to go to next page from add survey page:

- Show all of the above so user can review

- Submit button









