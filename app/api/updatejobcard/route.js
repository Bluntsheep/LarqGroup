import dbConnect from "@/lib/mongodb";
import mongoose from "mongoose";

// Define the JobCard schema
const JobcardSchema = new mongoose.Schema({
  jobCardNo: String,
  dateCreated: String,
  createdBy: String,
  companyName: String,
  contact: String,
  number: String,
  email: String,
  location: String,
  details: String,
  status: String,
  items: { type: [Object], default: [] },
});

const JobCArd =
  mongoose.models.JobCard || mongoose.model("JobCard", JobcardSchema);

export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const body = await req.json();
    const currentJobCard = body.jobCardNo;
    const newItems = body.items;

    // Ensure that the items are an array
    if (!Array.isArray(newItems)) {
      return new Response(
        JSON.stringify({ message: "Items must be an array" }),
        { status: 400 }
      );
    }

    // Find the JobCard document
    const jobCard = await JobCArd.findOne({ jobCardNo: currentJobCard });
    if (!jobCard) {
      console.error("No Job Card found with jobCardNo:", currentJobCard);
      return new Response(JSON.stringify({ message: "Job Card not found" }), {
        status: 404,
      });
    }

    // Use Mongoose's $push to add new items directly to the database
    await JobCArd.findOneAndUpdate(
      { jobCardNo: currentJobCard },
      { $push: { items: { $each: newItems } } },
      { new: true } // Return the updated document
    );

    // Return the updated job card document as a response
    return new Response(
      JSON.stringify({ message: "Success", jobCardNo: currentJobCard }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return new Response(
      JSON.stringify({
        message: "Failed to update JobCard",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
