import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

export default (props) => (
    <Layout>
        <Helmet>
            <title>{props.data.site.siteMetadata.title}</title>
            <meta name="description" content={props.data.site.siteMetadata.subtitle} />
        </Helmet>
        <Sidebar {...props} />
        <div className="content">
            <div className="content__inner bookmarks">
                <div className="page__title">/bookmarks</div>
                {
                    props.data.allBookmarksJson.edges.map(bookmark => (
                        <a className="bookmark"
                            key={bookmark.node.url}
                            href={bookmark.node.url} target="_blank">
                            <div className="bookmark-content">
                                <p><b><i className={`icon-${bookmark.node.type}`}></i> {bookmark.node.title}</b></p>
                                <small>{bookmark.node.site}</small>
                            </div>
                            <i className="icon-link-ext"></i>
                        </a>
                    ))}
            </div>
        </div>
    </Layout>
)


export const pageQuery = graphql`
  query BookmarksQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
            label
            path
        }
        author {
            name
            email
            telegram
            twitter
            github
            rss
        }
      }
    }
    allBookmarksJson {
        edges {
            node {
                url
                title
                type
                site
            }
        }
    }
  }
`