import config from '../data/configs.json'

export const SocialLinks = () => {
    const links = config.socialLinks;

    return (
        <div>
            <ul className="flex my-2">
                {links.map(link => {
                    return link.url ? (<li className="mx-1 bg-stone-100 text-stone-700 hover:text-stone-500 rounded-sm w-6 h-6 text-center" key={link.name}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`${link.icon} text-sm`} />
                        </a>
                    </li>) : ''
                })}
            </ul>
        </div>
    )
}