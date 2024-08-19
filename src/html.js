import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  const isProdEnv = true

  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#623cdc" />
        <meta content="origin-when-cross-origin" name="referrer" />
        {/* Verification tag */}
        <meta
          name="ahrefs-site-verification"
          content="451abcb9fb043646e422101bf4e9b65804956153868565f46b9acc9c3b17f1cb"
        />
        {/* Preconnect to resources */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />

        {props.postBodyComponents}

        {/* Snowplow */}
        {isProdEnv && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
                p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
                };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
                n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,'script','//d1fc8wv8zag5ca.cloudfront.net/2.5.3/sp.js','snowplow'));
              `,
            }}
          />
        )}

        {/* Don't load the Hubspot chat immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.hsConversationsSettings = {
                loadImmediately: false
              }
            `,
          }}
        />

        {/* Tracking Id */}
        {isProdEnv && <script defer src="/scripts/design-suite-landing.js" />}

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
