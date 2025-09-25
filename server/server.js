
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({ origin: 'http://localhost:5173',
               methods: ["GET", "POST"],
}));
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, 
  auth: {
    user: process.env.ZOHO_USER, 
    pass: process.env.ZOHO_PASS, 
  },
});


app.get('/', (req, res) => res.send('Server running'));


app.post('/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Missing fields' });
    }

    const mailOptions = {
      from: `"${name}" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,         
      replyTo: email,                   
      subject: `[Sharim Solutions] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br/>')}</p>`
    };

    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: 'Email sent' });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
