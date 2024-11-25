const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { email, name, phone, country, radioDeveloper, radioLong } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'apikey', // SendGrid's API key as the username
            pass: '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' // Your API key as the password
        }
    });

    // Email content for the recipient
    const recipientEmailOptions = {
        from: '"Your Company Name" <your-email@example.com>', // Sender address
        to: email, // Recipient's email address
        subject: 'Thank you for your request', // Subject line
        text: `Hello ${name},\n\nThank you for your interest in our services.\n\nDetails:\nPhone: ${phone}\nCountry: ${country}\nDeveloper: ${radioDeveloper}\nLong-term: ${radioLong}\n\nWe will get back to you shortly.\n\nBest Regards,\nYour Company Name`, // Plain text body
    };

    // Email content for yourself
    const selfEmailOptions = {
        from: `${name} <${email}>`, // Sender address
        to: 'your-email@example.com', // Your email address
        subject: 'New Request Received', // Subject line
        text: `Thank you for contacting us. We have received your message, and our team is currently reviewing your inquiry. We strive to respond within 24-48 hours. If you have any additional information or questions in the meantime, please feel free to reply to this email.

We appreciate your patience and look forward to assisting you.

Best regards,`, // Plain text body
    };

    // Send email to recipient
    transporter.sendMail(recipientEmailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }

        // Send email to yourself after the recipient's email is sent
        transporter.sendMail(selfEmailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }

            res.status(200).send('Emails sent successfully!');
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
