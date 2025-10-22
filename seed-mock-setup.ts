// Mock the server-only package to allow seeding script to run in development
// This prevents the server-only import from throwing in non-server environments
const Module = require("module");
const originalRequire = Module.prototype.require;

Module.prototype.require = function (id: string) {
    if (id === "server-only") {
        return {}; // Return empty object for server-only module
    }
    return originalRequire.apply(this, arguments);
};