export default class Dispatcher {
    public url: string;
    public pub: string;
    public ip: string;
    public port: string;

    constructor(url: string) {
        this.url = url;
        this.pub = url;
        this.ip = "";
        this.port = "";

        const {username, host, port} = new URL(url);
        if (username && host && port) {
            this.pub = username;
            this.ip = host;
            this.port = port;
        } else {
            throw  new Error("Unable to parse input url");
        }
    }

    public rpc() {
        return `http://${this.ip}:${this.port}/rpc`;
    }

    public status() {
        return `http://${this.ip}:${this.port}/status`;
    }
}
