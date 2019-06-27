import { ServerRoute } from "@hapi/hapi";
import { sysConfig } from "./config";
import { systemController } from "./controllers/system";

export const routes: ServerRoute[] = [
    // Hosting Front-end
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: sysConfig.frontEndDir,
            }
        }
    },

    /**
     * API List
     */

    //  Upload csv file to download image
    {
        method: 'POST',
        path: '/api/v1/files',
        options: {
            handler: systemController.postFile,
            description: 'Download image from csv file',
            tags: ['api'],
            payload: {
                output: 'stream',
                allow: 'multipart/form-data'
            }
        },
    },
];