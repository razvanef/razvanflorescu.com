import { useState } from 'react';
import config from '../data/configs.json'

export const SocialLinks = () => {
    const links = config.socialLinks;
    let [mailCopied, setMailedCopied] = useState(false);
    const copyEmailToCliboard = (mail: string) => {
        navigator.clipboard.writeText(mail)
        setMailedCopied(true)
        setTimeout(() => setMailedCopied(false), 3000)
    }

    return (
        <div>
            <ul className="flex my-2">
                {links.map(link => {
                    return link.url ? (<li className="flex items-center mx-1 px-1 bg-stone-100 text-stone-700 hover:text-stone-500 rounded-sm w-6 h-6 text-center" key={link.name}>
                        {link.name==='mail' ? (
                            <>
                                <a
                                    onClick={() => copyEmailToCliboard(link.url)}
                                >
                                    <i className={`${link.icon} text-sm`} />
                                </a>
                                {mailCopied ? <small className="flex items-center ml-1 h-6 whitespace-nowrap bg-stone-100">Mail Copied!</small> : ''}
                            </>
                        ) : (
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={`${link.icon} text-sm`} />
                            </a>
                        )}
                    </li>) : ''
                })}
            </ul>
        </div>
    )
}