const db = require("../config/db");

async function getAllGames(start = 0, limit = 50, like) {
    let where = "";
    const params = [];
    if (like) {
        where = ` WHERE name LIKE ?`; //select * from games where name like 'mario'
        params.push(`%${like}%`);
    }
    params.push(start.toString(), limit.toString()); //tostring for workaround of mysql 8.4 bug
    const [rows] = await db.execute(
        `Select * from games ${where} Limit ?,?`,
        params
    );
    return rows;
}

async function getGameById(gameId) {
    const [rows] = await db.execute("Select * from games WHERE game_id = ?", [
        gameId,
    ]);
    return rows[0];
}

module.exports = { getAllGames, getGameById };
