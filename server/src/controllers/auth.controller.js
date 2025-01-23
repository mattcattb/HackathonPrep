
const login = (req, res) => {
  const {email, password} = req;

  try {
    

  } catch (error) {
    console.log("Error occured on login: ", error);
    return res.status(400).send({message: "Error occured on the serverside."})
  }

}

const signup = (req, res) => {
  const {email, name, password} = req;

  try {

  } catch (error) {
    console.log("Error occured on signup: ", error);
    return res.status(400).send({message: "Error occured on the serverside."})
  }

}

const logout = (req, res) => {

}