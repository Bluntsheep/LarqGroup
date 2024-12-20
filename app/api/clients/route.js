import dbConnect from "@/lib/mongodb";

const { default: mongoose } = require("mongoose");

const ClientsSchema = new mongoose.Schema({
  companyID: String,
  companyName: String,
  vatNo: String,
  contacts: {
    clientName: String,
    contactDetails: String,
    emailDetails: String,
  },
  address: {
    street: String,
    street2: String,
    town: String,
    postalCode: String,
  },
});

const Client =
  mongoose.models.Client || mongoose.model("Client", ClientsSchema);

export async function GET(req) {
  await dbConnect();
  const data = await Client.find({});
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const newClient = new Client(body);
  await newClient.save();
  return new Response(JSON.stringify(newClient), { status: 201 });
}

export async function PATCH(req) {
  await dbConnect();
}
