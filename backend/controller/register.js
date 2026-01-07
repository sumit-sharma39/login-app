const database_conn = require("../database/database");


const registerController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;



    try {const check = await database_conn.query(
    "SELECT * FROM acc WHERE email=$1",
    [email]
  );
    return res.send(0);
  }

catch (err) 
{
  const result = await database_conn.query(
    "INSERT INTO acc(email, password) VALUES($1, $2)",
    [email, password]
  );
  return res.send(1);
  }
};

module.exports = registerController;
