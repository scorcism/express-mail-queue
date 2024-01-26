import sendMail from "../config/mailFnc";

const verificationMail = async (email: string, link: string) => {
  const subject = `Account Verification - Memories`;

  const content = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #333;
          }
          h4 {
            color: #555;
          }
          a {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #9084FC;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
          }
          p {
            color: #777;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Hello ${email}</h2>
          <h4>Please verify your account</h4>
          <p>Click on the link below to verify your account:</p>
          <a href="${link}">Verify Account</a>
          <p>Thank you for choosing Memories!</p>
        </div>
      </body>
    </html>
  `;
  sendMail(email, subject, content);
};

const resetPasswordMail = async (email: string, link: string) => {
  const subject = "Reset Password - Memories";

  const content = `
  <html>
  <head>
     <style>
        body{
        font-family: 'Arial', sans-serif;
        font-size:"20px";
        background-color: #f7f7f7;
        margin: 0;
        padding: 0;
        }
        .container{
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        margin:"10px 0px"
        }
        h2 {
        color: #4e4e4e;
        margin-bottom: 20px;
        }
        a {
        display: inline-block;
        padding: 12px 20px;
        margin-top: 20px;
        background-color: #9084FC;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        }
     </style>
  </head>
  <body>
     <div class="container">
        <h2>Hello </h2>
        <h3>${email}</h3>
        <p>We received a request to reset your password.</p>
        <p>Click on the button below to set up a new password:</p>
        <a href=${link}>Reset Password</a>
        <p>If you didn't request this, please ignore this email. Your account's security is important to us.</p>
        <p>Thank you for being part of the Memories community!</p>
     </div>
  </body>
</html>
  `;

  sendMail(email, subject, content);
};

const welcomeMail = async (email: string) => {
  const subject = "Welcome to Memories!";

  const content = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #333;
          }
          p {
            color: #777;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Welcome to Memories, ${email}!</h2>
          <p>We're thrilled to have you on board. Your journey with Memories has just begun, and we're here to support you every step of the way.</p>
          <p>Feel free to explore our platform and discover the amazing features we offer. If you have any questions or need assistance, don't hesitate to reach out to our support team.</p>
          <p>Thank you for choosing Memories!</p>
        </div>
      </body>
    </html>
  `;
  sendMail(email, subject, content);
};

export default {
  verificationMail,
  resetPasswordMail,
  welcomeMail,
};
