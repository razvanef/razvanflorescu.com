import { NextPage } from "next"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import bookmarks from '../../data/bookmarks.json'

const Bookmarks: NextPage = () => {
    const pageTitle = "bookmarks";
    const icons: { [key: string]: string } = {
        article: 'las la-newspaper',
        podcast: 'las la-podcast',
        twitter: 'lab la-twitter',
        video: 'lab la-youtube'
    }

    return (
        <div className="p-12 w-2/4 md:w-100 mx-auto">
            <div className="content__inner bookmarks">
                <Breadcrumbs page={pageTitle} />
                {
                    bookmarks.map(bookmark => (
                        <a className="flex p-3 pl-0 border-b border-gray-300"
                            key={bookmark.url}
                            href={bookmark.url} target="_blank"
                            rel="noreferrer">
                            <div className="flex flex-1 min-w-0 items-center">
                                <div className="flex-1 min-w-0">
                                    <p className="items-center truncate hover:whitespace-normal" data-toggle="tooltip" data-placement="top" title={bookmark.title}>
                                        <i className={icons[bookmark.type]}></i> {bookmark.title}</p>
                                    <small className="p-4">{bookmark.site}</small>
                                </div>
                                <i className="las la-external-link-alt flex flex-col justify-center ml-2"></i>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    )
}

export default Bookmarks