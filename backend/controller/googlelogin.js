const database_conn = require("../database/database");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client("786543282178-rlt210nnkolu2r6fiiajtudt2j54je1v.apps.googleusercontent.com");

const googleLoginController =  async (req, res) => {
  const { token } = req.body;

  const checked = await client.verifyIdToken({
      idToken: token,
      check: "786543282178-rlt210nnkolu2r6fiiajtudt2j54je1v.apps.googleusercontent.com",
    });

    const payload = checked.getPayload();
    const email = payload.email;
    const password = "google_user"; 

  const result = await database_conn.query(
      "INSERT INTO acc(email, password) VALUES($1, $2) ON CONFLICT (email) DO NOTHING",
      [email, password]
    );
  
  if(result.rowCount>0){
    res.send("data stored")
  }
  else{
    res.send("data not stored")
  }

}

module.exports = googleLoginController;