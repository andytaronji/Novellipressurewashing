import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. RESEND_API_KEY is missing.' },
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
      hasApiKey: !!process.env.RESEND_API_KEY,
      fromEmail: process.env.FROM_EMAIL,
      toEmail: process.env.TO_EMAIL || 'novellipw@gmail.com'
    });

    // Construct email content
    const emailContent = {
      from: process.env.FROM_EMAIL,
      to: [process.env.TO_EMAIL || 'novellipw@gmail.com'],
      reply_to: [email], // Reply goes to the person who submitted the form
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
      // Send email using Resend
      console.log('Attempting to send email with Resend...');
      console.log('Email payload:', JSON.stringify(emailContent, null, 2));
      
      const { data, error } = await resend.emails.send(emailContent);
      
      if (error) {
        console.error('Resend Error:', error);
        
        // Handle specific Resend errors
        let specificError = 'Failed to send email';
        
        if (error.message?.includes('API key')) {
          specificError = 'Invalid Resend API key or unauthorized access';
        } else if (error.message?.includes('from')) {
          specificError = 'Invalid sender email address format';
        } else if (error.message?.includes('to')) {
          specificError = 'Invalid recipient email address format';
        } else if (error.message) {
          specificError = error.message;
        }
        
        return NextResponse.json(
          { 
            error: specificError,
            details: error
          },
          { status: 500 }
        );
      }
      
      console.log('Resend success:', data);
      
      // Return success response
      return NextResponse.json({ 
        success: true,
        messageId: data?.id 
      });
      
    } catch (resendError: any) {
      // Handle Resend specific errors
      console.error('Resend Error Details:', {
        message: resendError.message,
        name: resendError.name,
        stack: resendError.stack
      });
      
      let specificError = 'Failed to send email';
      
      if (resendError.message?.includes('API key')) {
        specificError = 'Invalid Resend API key or unauthorized access';
      } else if (resendError.message?.includes('rate limit')) {
        specificError = 'Email rate limit exceeded. Please try again later.';
      } else if (resendError.message) {
        specificError = resendError.message;
      }
      
      return NextResponse.json(
        { 
          error: specificError,
          details: resendError.message
        },
        { status: 500 }
      );
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
