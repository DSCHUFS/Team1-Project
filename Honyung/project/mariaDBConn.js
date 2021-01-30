const mariadb = require('mariadb');
 
const pool = mariadb.createPool({
    host: '127.0.0.1', port:3306,
    user: 'root', password: 'dhlwlf',
    connectionLimit: 5
});
 
async function GetUserList(){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE nodejs_test');
        rows = await conn.query('SELECT * FROM users');
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn) conn.end();
        return rows[0];
    }
}
 
module.exports = {
    getUserList: GetUserList
}