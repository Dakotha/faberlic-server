const sgMail = require('@sendgrid/mail')

const config = require('../config.json')

sgMail.setApiKey(config.sgMail.APIKey)

const sendWelcomNewsletterEmail = email => {
    sgMail.send({
        to: email,
        from: config.sgMail.emailAddress,
        subject: 'Faberlic Zenobia Bednarowicz - Newsletter',
        text: 'Witaj, zostałaś/eś zapisana/y do naszego newsletter\'a. Pozdrawiam, Zenobia Bednarowicz'
    })

    sgMail.send({
        to: config.sgMail.emailAddress,
        from: config.sgMail.emailAddress,
        subject: 'Newsletter',
        text: 'Właśnie ktoś dodał swój adres email do bazy danych Newsletter.'
    })
}

const sendOrderEmail = order => {
    // sgMail({
    //     to: order.email,
    //     from: config.sgMail.emailAddress,
    //     subject: 'Faberlic Zenobia Bednarowicz - potwierdzenie złożenia zamówienia',
    //     text: 'Złożyłaś zamówienie...',
    // })

    sgMail.send({
        to: config.sgMail.emailAddress,
        from: config.sgMail.emailAddress,
        subject: 'Nowe zamówienie',
        text: 'Właśnie ktoś złożył nowe zamówienie.'
    })
}

module.exports = {
    sendWelcomNewsletterEmail,
    sendOrderEmail
}