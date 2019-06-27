import { createWriteStream } from "fs";
import { sysConfig } from "../config";

export const systemController = {
    /**
     * Upload file to svn server
     * @param request
     * @param handler
     */
    async  postFile(request, handler) {
        let realFileName = null;
        try {
            // Add file to local server
            const file = request.payload.file
            realFileName = await _fileHandler(file, sysConfig.csvFilePath);

        } catch (error) {
            // Remove tmp file
            return handler.response({ message: 'Please check your file' }).code(400);
        }

        return { fileName: realFileName };

        /**
         * Upload file from client to tmp folder on server
         * @param _file
         * @param _filePath
         */
        function _fileHandler(_file, _filePath) {
            if (!_file) throw new Error('no file');
            const filename = _file.hapi.filename;
            const fileStream = createWriteStream(_filePath);
            return new Promise((resolve, reject) => {
                _file.on('error', function (err) { reject(err); });

                _file.pipe(fileStream);

                _file.on('end', function (err) {
                    resolve(filename);
                })
            })
        }
    }
}
