export default bod => `
<!DOCTYPE html>
<html>
    <head>
        <meta charshet="UTF-8">
    </head>
    <body>
        <div id="app">${body}</div>
        <script src="/bundle.js"></script>
    </body>
</html>`