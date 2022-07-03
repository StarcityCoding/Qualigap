export default async function handler(req,res){
    const {email, name, message} = JSON.parse(req.body);

    if(!email || !name || !message) {
        return res.status(400).json({error: "Missing Fields"})
    }
    if(req.method !== "POST") {
        return res.status(405).json({error: "Method not Allowed"}
        )
    } 

    const request = await fetch('https://api.airtable.com/v0/app9yx1U95GG2zFbz/submissions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.keyH8WvbsOCGoSY80}`,
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({fields: {email, name, message}})
    });
    if(request.ok){
        return res.status(200).json({data: "ok"});
    }
    return res.status(400).json({error: "error returned"})
}