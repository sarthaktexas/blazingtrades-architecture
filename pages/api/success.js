const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export default async (req, res) => {
    const { session_id } = req.query
    return res.status(200).json(session_id);
};