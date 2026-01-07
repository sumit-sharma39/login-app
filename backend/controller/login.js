const database_conn = require("../database/database");


const loginController =  async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const result = await database_conn.query(
    "SELECT * FROM acc WHERE email = $1 AND password = $2",
    [email, password]
  );
  if (result.rowCount === 0) {
    return res.send(0);
  }else {
    return res.send(1);
  }

  
}


module.exports = loginController;
