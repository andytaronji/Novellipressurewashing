# Email Setup for Novelli Pressure Washing Website

This document explains how to set up the email functionality for the contact forms on the Novelli Pressure Washing website.

## Overview

The website uses SendGrid to send emails from the contact forms to your email address (novellipw@gmail.com). When a user submits a contact form, the data is sent to a Next.js API route, which then uses SendGrid to send an email with the form data.

## Required Environment Variables

When hosting the website, you'll need to set up the following environment variables:

1. `SENDGRID_API_KEY`: Your SendGrid API key
2. `TO_EMAIL`: The email address where form submissions should be sent (default: novellipw@gmail.com)
3. `FROM_EMAIL`: The email address that will appear as the sender (must be verified in SendGrid)

## Setting Up SendGrid

1. **Create a SendGrid Account**:
   - Go to [SendGrid's website](https://sendgrid.com/) and sign up for an account
   - They offer a free tier that allows you to send up to 100 emails per day

2. **Verify Your Domain or Email**:
   - In your SendGrid dashboard, go to Settings > Sender Authentication
   - Follow the instructions to verify your domain or at least a single sender email
   - This step is crucial as SendGrid requires verification to prevent spam

3. **Create an API Key**:
   - In your SendGrid dashboard, go to Settings > API Keys
   - Click "Create API Key"
   - Name it something like "Novelli Website Contact Form"
   - Select "Restricted Access" and ensure it has permission for "Mail Send"
   - Copy the generated API key (you won't be able to see it again)

## Hosting Setup

Depending on your hosting provider, you'll need to set the environment variables in different ways:

### Vercel (Recommended for Next.js)

1. In your Vercel dashboard, select your project
2. Go to Settings > Environment Variables
3. Add the following variables:
   - `SENDGRID_API_KEY`: Your SendGrid API key
   - `TO_EMAIL`: novellipw@gmail.com
   - `FROM_EMAIL`: A verified email address in your SendGrid account

### Netlify

1. In your Netlify dashboard, select your project
2. Go to Site settings > Build & deploy > Environment
3. Add the same environment variables as listed above

### Traditional Hosting

If you're using traditional hosting, you'll need to:

1. Create a `.env.local` file in the root of your project with the variables
2. Make sure your hosting provider supports environment variables
3. Consult your hosting provider's documentation for specific instructions

## Testing

Before going live, it's recommended to test the email functionality:

1. Deploy the site to a staging environment
2. Submit a test form
3. Verify that you receive the email at novellipw@gmail.com

## Troubleshooting

If emails are not being sent:

1. Check that your SendGrid API key is correct
2. Verify that your sender email is properly authenticated in SendGrid
3. Check the server logs for any error messages
4. Make sure your SendGrid account is in good standing (not suspended)

## Security Considerations

- Never commit your SendGrid API key to your code repository
- Consider implementing rate limiting to prevent form spam
- For additional security, you might want to add CAPTCHA verification to your forms
