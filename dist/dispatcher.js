"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dispatcher = /** @class */ (function () {
    function Dispatcher(url) {
        this.url = url;
        this.pub = url;
        this.ip = "";
        this.port = "";
        var _a = new URL(url), username = _a.username, host = _a.host, port = _a.port;
        if (username && host && port) {
            this.pub = username;
            this.ip = host;
            this.port = port;
        }
        else {
            throw new Error("Unable to parse input url");
        }
    }
    Dispatcher.prototype.rpc = function () {
        return "http://" + this.ip + ":" + this.port + "/rpc";
    };
    Dispatcher.prototype.status = function () {
        return "http://" + this.ip + ":" + this.port + "/status";
    };
    return Dispatcher;
}());
exports.default = Dispatcher;
