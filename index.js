"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (verbs) => {
    const allowedVerbs = Object.keys(verbs)
        .map(v => v.toUpperCase())
        .join(', ');
    return async (req, res) => {
        res.setHeader('Access-Control-Request-Method', allowedVerbs);
        const { method } = req;
        if (method) {
            const handler = verbs[method.toLowerCase()];
            if (!handler) {
                res.writeHead(405);
                res.end('Method Not Allowed');
            }
            else {
                await handler(req, res);
            }
        }
    };
};
//# sourceMappingURL=index.js.map