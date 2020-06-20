export default (port, path) => {
    //const ip = 'localhost'
    const ip = 'apitest.uagro.mx'
    const sendUri = `https://${ip}:${port}/${path}`;
    return sendUri
}