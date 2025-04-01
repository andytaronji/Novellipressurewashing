import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    // Check if SendGrid API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. SENDGRID_API_KEY is missing.' },
        { status: 500 }
      );
    }

    // Check if FROM_EMAIL is configured
    if (!process.env.FROM_EMAIL) {
      console.error('FROM_EMAIL is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. FROM_EMAIL is missing.' },
        { status: 500 }
      );
    }

    // Get form data from request
    const formData = await request.json();
    const { name, email, phone, service, message } = formData;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log environment variables (without sensitive data)
    console.log('Environment check:', {
      hasApiKey: !!process.env.SENDGRID_API_KEY,
      fromEmail: process.env.FROM_EMAIL,
      toEmail: process.env.TO_EMAIL || 'novellipw@gmail.com'
    });

    // Construct email content
    const emailContent = {
      to: process.env.TO_EMAIL || 'novellipw@gmail.com',
      from: process.env.FROM_EMAIL, // Must be verified in SendGrid
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service: ${service || 'Not specified'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      // Send email
      console.log('Attempting to send email...');
      const response = await sgMail.send(emailContent);
      console.log('SendGrid response:', response[0].statusCode);
      
      // Return success response
      return NextResponse.json({ success: true });
    } catch (sendGridError: any) {
      // Handle SendGrid specific errors
      console.error('SendGrid Error:', sendGridError);
      
      if (sendGridError.response) {
        console.error('SendGrid Error Body:', sendGridError.response.body);
        
        // Return more specific error message
        return NextResponse.json(
          { 
            error: 'Failed to send email', 
            details: sendGridError.response.body 
          },
          { status: 500 }
        );
      }
      
      throw sendGridError; // Re-throw for general error handling
    }
  } catch (error: any) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        message: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}
