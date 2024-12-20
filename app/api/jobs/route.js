import dbConnect from "@/lib/mongodb";
import { getCurrentDateInDDMMYY } from "@/lib/utils";

const { default: mongoose } = require("mongoose");

const JobcardSchema = new mongoose.Schema({
  jobCardNo: String,
  // dateCreated: String,
  createdBy: String,
  companyName: String,
  contact: String,
  number: String,
  email: String,
  location: String,
  details: String,
  status: String,
  items: { type: [String], default: [] },
});

const JobCArd =
  mongoose.models.JobCard || mongoose.model("JobCard", JobcardSchema);

export async function GET(req) {
  await dbConnect();
  const data = await JobCArd.find({});
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  console.log("Incoming Body:", body);
  const newJobCard = await new JobCArd(body);
  console.log("JobCard Instance:", newJobCard);

  await newJobCard.save();
  return new Response(JSON.stringify(newJobCard), { status: 201 });
}
