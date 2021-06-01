const { ShardingManager } = require('discord.js');
const config = require('./config.json');
const shards = new ShardingManager('./bot.js', {
    token: config.token,
    totalShards: "auto",
});
shards.on("shardCreate", async (shard) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Shard lançado #${shard.id}`)
})

shards.spawn(shards.totalShards, 10000);
