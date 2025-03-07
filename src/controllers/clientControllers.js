import Client from "../models/clientModel.js";


export const createClient = async (req, res) => {
  try {
    const { name, document, address, phone, fiador } = req.body; // Recibe fiador como objeto

    const newClient = new Client({
      name,
      document,
      address,
      phone,
      fiador // Se pasa el objeto fiador directamente
    });

    await newClient.save();

    res.json(newClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// export const updateClient = async (req, res) => {
  
//   try {

//     const { name, address, phone, fiador } = req.body; 

//     const updatedClient = await Client.findOneAndUpdate(
//       {
//         _id: req.params.id
//       },
//       {
//         name,
//         address,
//         phone,
//         fiador: { name, document, address, phone }, 
//       },
//       { new: true, runValidators: true }
//     );

//     if (!updatedClient) {
//       return res.status(404).json({ message: "Cliente no encontrado" });
//     }

//     res.json(updatedClient);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


export const deleteClient = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const userFound = await User.findOne({ email }); // Busca el correo y lo guarda en la variable 
        if (userFound) return res.status(400).json(["El correo ya fue registrado"]);
        const passwordHash = await bcrypt.hash(password, 10) // Se encripta la contraseña

        const newClient = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });
    } catch (error) {
        res.status(500).json({ message: error, message });
    }
};


export const detailClient = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const userFound = await User.findOne({ email }); // Busca el correo y lo guarda en la variable 
        if (userFound) return res.status(400).json(["El correo ya fue registrado"]);
        const passwordHash = await bcrypt.hash(password, 10) // Se encripta la contraseña

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });
    } catch (error) {
        res.status(500).json({ message: error, message });
    }
};