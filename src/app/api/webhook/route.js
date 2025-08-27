import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Handle event types
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log(session)
    console.log("Payment was successful!", session);
   
  }

  return NextResponse.json({ received: true });
}
