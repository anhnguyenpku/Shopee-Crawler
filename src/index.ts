import * as hapi from "@hapi/hapi";

import { sysConfig } from "./config";
import { sysPlugins } from "./plugins";
import { routes } from "./routes";

// create a server with a host and port
const server = new hapi.Server({
    host: sysConfig.host,
    port: sysConfig.port,
    routes: {
        cors: { origin: ['*'] }
    }
});

// start the server
async function start() {
    try {
        await server.register(sysPlugins);

        // add the route
        server.route(routes);

        await server.start()
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
}

// don't forget to call start
start();
