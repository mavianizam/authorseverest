export default function (req, res) {
    let messageContent = ""
    Object.entries(req.body).forEach((entry) => {
        const [key, value] = entry;
        messageContent += `<b>${key}<b>: ${value}<br>`;
    });

    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'custombackend@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    })
    const mailData = {
        from: 'custombackend@gmail.com',
        to: req.body.Email,
        subject: `Message From Author Everset`,
        text: req.body.message + " | Sent from: info@authorseverest.com",
        html: messageContent
    }
    let error = ""
    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            error = err
            return res.send({ status: 200, message: err, error: err });

        }
        else {
            error = info
            console.log("done");
            console.log(info)
            return res.send({ status: 200, message: 'Hello from Next.js!',  error: info });


        }
    })

}