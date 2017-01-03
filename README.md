# Email Capture
![Cosmic Email Capture](https://cosmicjs.com/uploads/d41050d0-d140-11e6-8fbd-bf2ca03de273-email-capture.jpg?w=1200)
###[View Demo](https://cosmicjs.com/apps/email-capture/demo)
A simple landing page for lead email capture to MailChimp.  Set up in a few steps:

1. [Log in to Cosmic JS](https://cosmicjs.com).
2. Create a Bucket.
3. Go to Your Bucket > Apps.
4. Install the [Email Capture App](https://cosmicjs.com/apps/email-capture).
5. Edit the MailChimp List URL Metafield to point to your MailChimp List. (see below)
6. Deploy your Email Capture App to the Cosmic App Server at Your Bucket > Web Hosting.

###Getting Started
```
git clone https://github.com/cosmicjs/email-capture
cd email-capture
yarn
```
####Start app
```
yarn start
```
####Start app connected to your Cosmic JS Bucket
```
COSMIC_BUCKET=your-bucket-slug yarn start
```
Open [http://localhost:3000](http://localhost:3000).
###Setting up MailChimp
1. Go to the List Section of your MailChimp account
2. Select the List, or add a new List that will receive your emails
3. Select Signup forms
![Select Signup forms](https://cosmicjs.com/uploads/c6627a30-d145-11e6-8fbd-bf2ca03de273-Screen%20Shot%202017-01-02%20at%205.46.44%20PM.png?w=1200)
4. Select Embedded forms
![Select Signup forms](https://cosmicjs.com/uploads/89b38870-d142-11e6-8fbd-bf2ca03de273-mc-2.png?w=1200)
5. Select Naked
![Select Naked](https://cosmicjs.com/uploads/89a111e0-d142-11e6-8fbd-bf2ca03de273-mc-3.png?w=1200)
6. Copy the code
![Copy the code](https://cosmicjs.com/uploads/89c89710-d142-11e6-8fbd-bf2ca03de273-mc-4.png?w=1200)
7. Take everything inside action=""
8. Add this URL to your MailChimp List URL Metafield in Your Bucket > Pages > Home
![Copy the code](https://cosmicjs.com/uploads/2064cdb0-d143-11e6-8fbd-bf2ca03de273-mc-5.png?w=1200)
