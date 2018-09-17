README
======


Tech to use
-----------

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









