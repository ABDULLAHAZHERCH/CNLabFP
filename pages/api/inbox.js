import dbConnect from "@/lib/dbConnect";
import Email from "@/models/Email";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        await dbConnect();

        // Fetch all messages with recipient, subject, and message fields
        const emails = await Email.find({}, { recipient: 1, subject: 1, message: 1, _id: 0 });

        if (emails.length === 0) {
            return res.status(404).json({ error: 'No emails found' });
        }

        res.status(200).json(emails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
