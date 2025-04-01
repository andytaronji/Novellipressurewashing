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

If you're seeing a 500 error when submitting the form, here are some steps to troubleshoot:

1. **Check Environment Variables**:
   - Verify that all required environment variables are set correctly:
     - `SENDGRID_API_KEY`: Your SendGrid API key
     - `FROM_EMAIL`: A verified email address in SendGrid
     - `TO_EMAIL`: The recipient email (defaults to novellipw@gmail.com if not set)
   - Make sure there are no typos or extra spaces in the variable names or values
   - Confirm that the environment variables are properly set in your hosting platform

2. **Verify SendGrid Configuration**:
   - Ensure your SendGrid API key is valid and has "Mail Send" permissions
   - Check that your sender email (`FROM_EMAIL`) is fully verified in SendGrid
   - Verify that your SendGrid account is active and in good standing
   - Check if you've exceeded your SendGrid sending limits

3. **Check Server Logs**:
   - Review your hosting platform's logs for detailed error messages
   - The API route now includes additional logging that can help identify the issue

4. **Common SendGrid Errors**:
   - **403 Forbidden**: Usually means your API key doesn't have the right permissions
   - **401 Unauthorized**: API key is invalid or revoked
   - **400 Bad Request**: Often related to sender email not being verified
   - **429 Too Many Requests**: You've exceeded your rate limits

5. **Test with a Different Email Service**:
   - If SendGrid continues to cause issues, consider trying an alternative service like Resend.com or Mailgun

## Security Considerations

- Never commit your SendGrid API key to your code repository
- Consider implementing rate limiting to prevent form spam
- For additional security, you might want to add CAPTCHA verification to your forms
