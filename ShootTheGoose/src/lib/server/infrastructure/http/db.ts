import mariadb from 'mariadb';

export const pool = mariadb.createPool({
	host: '82.165.237.163',
	user: 'root',
	port: 3306,
	password: 'Cesi_KSC',
	database: 'Shoot',
	connectionLimit: 5
});

export async function fetchHighScores() {
	let conn;
	try {
		conn = await pool.getConnection();
		return await conn.query('SELECT * FROM Scores ORDER BY Points DESC LIMIT 10');
	} catch (err) {
		console.log(err);
		throw err;
	} finally {
		if (conn) await conn.release();
	}
}

export async function postScore(player: IPlayer) {
	let conn;
	try {
		conn = await pool.getConnection();
		const [existingScore] = await conn.query('SELECT Id FROM Scores WHERE Name = ?', [player.name]);

		if (!existingScore) {
			await conn.query('INSERT INTO Scores (Name, Points) VALUES (?, ?)', [
				player.name,
				player.point
			]);
		} else {
			await conn.query('UPDATE Scores SET Points = ? WHERE Id = ?', [
				player.point,
				existingScore.Id
			]);
		}
	} catch (err) {
		console.error(err);
	} finally {
		if (conn) await conn.release();
	}
}