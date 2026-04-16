import Customer from "../models/customer.js";


export const createLead = async (req, res) => {

    try {
        
        const {name, phone, vehicle, status} = req.body;

        if (!name || !phone || !vehicle ) {
            return res.status(400).json({ message: "Please provide name, phone, vehicle and status."});
        }

        // MVP Unique lead id generator: "STAKE-" + Random 4 digit number + last 2 digits of current UNIX time.
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const timeStampStr = Date.now().toString().slice(-2);
        const customerLeadId = `STAKE-${randomNum}-${timeStampStr}`;

        const newLead = new Customer({
            leadId: customerLeadId,
            name: name,
            phone: phone,
            vehicle: vehicle,
            status: status,
        });

        await newLead.save();
        res.status(201).json(newLead);

    } catch (error) {
        console.error("Error saving lead:", error.message);
        res.status(500).json({message: "Internal server error"});
        
    }

};

export const test = async (req, res) => {

    return res.send("The api is working!");

}

