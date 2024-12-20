const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: String,
  roll: Number,
  name: String,
  cell: Number,
  email: String,
  password: String,
  active: Boolean,
});

const JobCArd =
  mongoose.models.JobCard ||
  mongoose.model("JobCard", new mongoose.Schema({ jobCardNo: String }));
const Client =
  mongoose.models.Client ||
  mongoose.model("Client", new mongoose.Schema({ companyID: String }));

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function GET() {
  const [jobcardCount, clientCount, userCount] = await Promise.all([
    JobCArd.countDocuments({}),
    Client.countDocuments(),
    User.countDocuments(),
  ]);

  return new Response(
    JSON.stringify({ jobcardCount, clientCount, userCount }),
    { status: 201 }
  );
}
