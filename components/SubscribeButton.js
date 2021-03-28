import { FiArrowRight } from 'react-icons/fi'
import { fetchPostJSON } from '../utils/api-helpers'
import getStripe from '../utils/stripe'

export default function SubscribeButton() {
    const handleSubmit = async (e) => {
        const checkoutSession = await fetchPostJSON('/api/pay')
        if ((checkoutSession).statusCode === 500) {
          console.error((checkoutSession).message)
          return
        }
        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
          sessionId: checkoutSession.id,
        })
        console.warn(error.message)
    }
    return (
        <button className="bg-red-500 rounded-xl py-2 px-4 flex flex-row w-fitcontent mx-auto" onClick={handleSubmit}>
            <div className="mr-2">Start Now</div><div className="self-center"><FiArrowRight size={20} /></div>
        </button>
    )
}