export const sendPage = (res, content) => {
res.type('html').send(`
    <!DOCTYPE html>
    <html lang="uk">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>${content}</body>
    </html>
`);};
