"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDeployment = void 0;
const satisfies_1 = __importDefault(require("semver/functions/satisfies"));
const DEFAULT_FILTER = { released: true };
const findDeployment = (criteria = DEFAULT_FILTER, deployments) => deployments.find((deployment) => {
    if (criteria.version && !satisfies_1.default(deployment.version, criteria.version))
        return false;
    if (typeof criteria.released === 'boolean' && deployment.released != criteria.released)
        return false;
    if (criteria.network && !deployment.networkAddresses[criteria.network])
        return false;
    return true;
});
exports.findDeployment = findDeployment;
