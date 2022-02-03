import Head from 'next/head'

const titleDefault = 'Jabbour Mehdi French developer'
const url = ''
const description =
  'A new portefolio'
const author = 'Mehdi'
const icons = { icon16x16:"/oui16x16.ico", icon32x32:"/oui32x32.ico", icon128x128:"/oui128x128.ico", icon512x512:"/oui512x512.ico"}

const Header = ( {title = titleDefault} ) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='Full stack developer'
        />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={url} />
        <meta name='og:image' content={icons.icon512x512} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />

        <link rel='apple-touch-icon' href={icons.icon512x512} />
        <link
          rel='apple-touch-icon'
          sizes='16x16'
          href={icons.icon16x16}
        />
        <link
          rel='apple-touch-icon'
          sizes='32x32'
          href={icons.icon32x32}
        />
        <link
          rel='apple-touch-icon'
          sizes='128x128'
          href={icons.icon128x128}
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          color='#000000'
          href='/oui512x512.ico'
        />
        <link rel='apple-touch-startup-image' href={icons.icon512x512} />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href={icons.icon16x16} />

        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@mesdeyh1z1' />
      </Head>
    </>
  )
}

export default Header
