const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price: process.env.STRIPE_PRICE_ID,
      quantity: 1
    }],
    mode: "subscription",
    success_url: `${process.env.AUTH0_BASE_URL}/api/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: process.env.AUTH0_BASE_URL
  });

  return res.status(200).json(session);
};