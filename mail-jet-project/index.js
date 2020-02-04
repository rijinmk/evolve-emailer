const mailjet = require('node-mailjet')
    .connect('03dbb5b8037d4512684f823c38e2a3bb', '38b695bdaf62c1ceb9e0c58efe486616')
const request = mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
        "Messages": [
            {
                "From": {
                    "Email": "rijin.mk9@gmail.com",
                    "Name": "Rijin"
                },
                "To": [
                    {
                        "Email": "rijin.mk9@gmail.com",
                        "Name": "Rijin"
                    }
                ],
                "Subject": "Greetings from Mailjet.",
                "TextPart": "My first Mailjet email",
                "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                "CustomID": "AppGettingStartedTest"
            }
        ]
    })
request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
