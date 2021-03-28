import SubscribeButton from "./SubscribeButton"
import Nav from './Navbar'

export default function HomePage() {
    return (
        <div>
            <main>
                <Nav />
                <section id="hero" className="mt-40 text-center flex flex-col space-y-8 w-1/2 mx-auto justify-center items-center">
                    <h1 className="font-extrabold text-4xl">Blazing Trades</h1>
                    <p className="text-gray-400 font-medium text-lg">Blazing Trades is the fastest growing trading community. Crypto & Stock signals inside the Blazing Trades Discord Community.</p>
                    <SubscribeButton />
                </section>
            </main>
        </div>
    )
}