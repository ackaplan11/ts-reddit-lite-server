"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
async function main() {
    const app = (0, express_1.default)();
    app.listen(4000, () => {
        console.log("server started on localhost:4000");
    });
    app.get('/feed', async (_, res) => {
        const posts = await prisma.post.findMany({
            where: { published: true },
            include: { author: true },
        });
        res.json(posts);
    });
    app.get('/', async (_, res) => {
        res.json("hello");
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=index.js.map