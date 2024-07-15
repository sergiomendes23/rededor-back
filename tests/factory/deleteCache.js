import { redis } from "../../src/app.js";

export async function deleteCache() {
    await redis.flushAll()
}
export async function closeCache() {
    await redis.quit();
}
