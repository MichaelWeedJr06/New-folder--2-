const db = require("../config/db");

async function getAllGames(start = 0, limit = 50) {
    const [rows] = await db.execute("Select * from games Limit ?,?", [
        start.toString(), //tostring for workaround of mysql 8.4 bug
        limit.toString(),
    ]);
    return rows;
}

async function getGameById(gameId) {
    const [rows] = await db.execute("Select * from games WHERE game_id = ?", [
        gameId,
    ]);
    return rows[0];
}

module.exports = { getAllGames, getGameById };
