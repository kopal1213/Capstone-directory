import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Helmet from 'react-helmet'


export default function Layout({children, description, keywords, author, title }) {
  return (
    <div>
      <Helmet>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
      </Helmet>

      {/* //Header */}
        <Header/>

      <main style={{minHeight: '70vh'}}>

        {/* <Toaster/> */}

          {children}
         </main>

         {/* Footer */}
      <Footer/>
    </div>
  )
}

Layout.defaultProps={
  title: "upGrad Eshop",
  description: "Fontend page with the help of React",
  keywords: "React.js, Material-ui, Bootstrap",
  author: "Kopal Jain"
}
