const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "", // generated ethereal user
      pass: "384E8760B5DBE1138D2158AD357370311A74", // generated ethereal password
    },
});

const sendEmail = async function(){
    let info = await transporter.sendMail({
        from: "",
        to: "",
        subject: "Google Stadia in Stock!",
        text: "BUY THAT GOOGLE STADIA NOW!"
    });
    info
}


module.exports = {
    sendEmail
}