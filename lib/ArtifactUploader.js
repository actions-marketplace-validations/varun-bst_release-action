"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
class GithubArtifactUploader {
    constructor(releases) {
        this.releases = releases;
    }
    uploadArtifacts(artifacts, uploadUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            artifacts.forEach((artifact) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.releases.uploadArtifact(uploadUrl, artifact.contentLength, artifact.contentType, artifact.readFile(), artifact.name);
                }
                catch (error) {
                    core.warning(error.message)
                    const message = `Failed to upload artifact ${artifact.name}. Does it already exist?`;
                    core.warning(message);
                }
            }));
        });
    }
}
exports.GithubArtifactUploader = GithubArtifactUploader;
