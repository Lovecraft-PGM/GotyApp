import Client from "../models/clientModel.js";


export const createClient = async (req, res) => {
    
  try {
    const { name, document, address, phone, credit, quota } = req.body;
    
    const newClient = new Client({
      name,
      document,
      address,
      phone,
      credit,
      quota,
      fiador: req.fiador.id
    });
    
    await newClient.save();

    res.json(
      newClient
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateClient = async (req, res) => {
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

        const clientSaved = await newClient.save();
        const token = await createAccessToken({ id: clientSaved._id });
        res.cookie("token", token)
        res.json({
            id: clientSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });
    } catch (error) {
        res.status(500).json({ message: error, message });
    }
};


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