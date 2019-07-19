var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "I***********2"
  }
});

var mailOptions = {
  from: "youremail@gmail.com",
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
