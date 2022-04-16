/* eslint-disable no-console */

const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const app = require('express')()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

const start = async () => {
    app.set('port', port)

    // Body parser, to access req.body
    app.use(bodyParser.json())

    // Import and Set Nuxt.js options
    const config = require('./nuxt.config.js')
    config.dev = !(process.env.NODE_ENV === 'production')

    // Init Nuxt.js
    const nuxt = new Nuxt(config)
    await nuxt.ready()
    // Build only in dev mode
    if (config.dev) {
        new Builder(nuxt).build()
            .then(() => {
                console.log('nuxt builded')
            })
            .catch((error) => {
                console.warn(error.stack)
                process.exit(1)
            })
    }

    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port)

    process.on('unhandledRejection', function(err) {
        console.warn('An unhandledRejection was found, the program will end. ' + err + '\nStacktrace: ' + err.stack)
        if (process.env.NODE_ENV === 'production') {
            return process.exit(1)
        }
    })

    process.on('uncaughtException', function(err) {
        console.warn('An uncaughtException was found, the program will end. ' + err + '\nStacktrace: ' + err.stack)
        if (process.env.NODE_ENV === 'production') {
            return process.exit(1)
        }
    })
}

start()
