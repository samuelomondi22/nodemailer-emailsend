var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omondisam696@gmail.com",
    pass: "Iamnotamonster22"
  }
});

var mailOptions = {
  from: "omondisam696@gmail.com",
  to: "omondisam696@gmail.com",
  subject: "sending email with node js",
  text: `uko na deny yangu  
          nilipe`
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
