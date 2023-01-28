import type { NextPage } from 'next'
import Link from 'next/link'
import { SocialLinks } from '../components/SocialLinks'

const Home: NextPage = () => {
    return (
        <div className="p-12 lg:w-2/5 md:w-2/5 sm:w-2/4 w-full mx-auto">
            <div className="logo text-4xl mb-10">
                razvan florescu
            </div>
            <p>
                I&apos;m a front end engineer and entrepreneur passionated about future of technology and it&apos;s social impact.<br />
                Currently building <a href="https://www.druidai.com/chatbots-in-the-press/druid-launches-a-new-conversational-ai-category-conversational-business-applications" data-toggle="tooltip" data-placement="top" title="Conversational Business Applications" target="_blank" rel="noreferrer">CBA</a> at <a href="https://www.druidai.com/chatbots-in-the-press/" target="_blank" rel="noreferrer">Druid AI</a> platform and <a href="https://esennoua.ro" target="_blank" rel="noreferrer">Esential Noua</a>, a sustenability zero-waste brand.<br />
                Born on a tuesday afternoon in Ploiesti, Romania, living and studying in Bucharest.
            </p>
            <div className="flex justify-between items-center text-stone-500 mt-6">
                <div><Link href="/bookmarks">/bookmarks</Link></div><SocialLinks />
            </div>
            
        </div>
    )
}

export default Home
