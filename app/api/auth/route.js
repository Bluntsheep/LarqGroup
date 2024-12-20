import dbConnect from "@/lib/mongodb";

const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: String,
  roll: Number,
  name: String,
  cell: Number,
  email: String,
  password: String,
  active: Boolean,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const user = body.user;
  const password = body.password;

  const data = await User.findOne({ name: user });
  if (!data) {
    return new Response(JSON.stringify(), { status: 404 });
  }
  if (data.name === user && data.password == password && data.active === true) {
    const userData = {
      userId: data.userId,
      name: data.name,
      role: data.roll,
    };

    return new Response(JSON.stringify(userData), { status: 200 });
  }
  if (
    data.name === user &&
    data.password == password &&
    data.active === false
  ) {
    return new Response(JSON.stringify("Your account is currently"), {
      status: 403,
    });
  } else {
    return new Response(JSON.stringify(), { status: 404 });
  }
}
