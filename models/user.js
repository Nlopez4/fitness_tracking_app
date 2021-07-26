const userSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      googleId: String,
    },
    {
      timestamps: true,
    }
  );