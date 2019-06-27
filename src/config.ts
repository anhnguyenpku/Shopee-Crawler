import * as dotenv from "dotenv";

// Loading .env
dotenv.config();
let path;
switch (process.env.NODE_ENV) {
    case "production":
    default:
        path = `${__dirname}/../.env`;
}
dotenv.config({ path: path });

// Create config information
export const sysConfig = {
    host: process.env.HOST,
    port: process.env.PORT,
    csvFilePath: `${__dirname}/../data/file.csv`,
    frontEndDir: `${__dirname}/../dist-frontend`,
    svnConfPath: `${__dirname}/../svn-configuration.json`,
};
