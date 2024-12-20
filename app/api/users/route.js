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

export async function GET() {
  await dbConnect();
  const data = await User.find({});

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const newUser = new User(body);
  await newUser.save();
  return new Response(JSON.stringify(newUser), { status: 201 });
}

export async function PATCH(req) {
  const body = await req.json();

  await dbConnect();
  const updatedUser = await User.findOneAndUpdate(
    { userId: body },
    [{ $set: { active: { $not: "$active" } } }],
    { new: true }
  );

  if (!updatedUser) {
    return new Response(JSON.stringify("Cant Update"), { status: 404 });
  }

  return new Response(JSON.stringify("Updated"), { status: 201 });
}
