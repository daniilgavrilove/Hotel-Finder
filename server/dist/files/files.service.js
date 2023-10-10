"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
let FilesService = class FilesService {
    async createOneFile(file, slug) {
        try {
            const fileName = slug + '.jpg';
            const filePath = path.resolve(__dirname, '..', '..', 'static', slug);
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer);
            return fileName;
        }
        catch (e) {
            throw new common_1.HttpException('Произошла ошибка при записи файла', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createManyFiles(files, slug) {
        try {
            const filesArr = files.map((file, index) => {
                const fileName = slug + '_' + index + '.jpg';
                const filePath = path.resolve(__dirname, '..', '..', 'static', slug);
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath, { recursive: true });
                }
                fs.writeFileSync(path.join(filePath, fileName), file.buffer);
                return fileName;
            });
            return filesArr;
        }
        catch (e) {
            throw new common_1.HttpException('Произошла ошибка при записи файлов', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)()
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map