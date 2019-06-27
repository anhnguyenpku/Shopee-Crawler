import * as inert from "@hapi/inert";
import * as vision from "@hapi/vision";
import * as hapiswagger from "hapi-swagger";

export const sysPlugins = [
    {
        plugin: inert
    },
    {
        plugin: vision
    },
    {
        plugin: hapiswagger,
        options: {
            info: {
                title: 'Crawler Data',
                description: 'Get all data from shopee',
                version: '1.1.0'
            },
            tags: [
                {
                    name: 'api',
                    description: 'Communicate with server via RESTful'
                }
            ],
            swaggerUI: true,
            documentationPage: true,
            documentationPath: '/api/docs'
        }
    }
];