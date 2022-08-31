import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function FooterWrapper(props) {
  const {colorMode } = useColorMode();
  return (
    <>
      <Footer {...props} />
      <Giscus
        repo="OfferZen-Community/developer-mentoring"
        repoId="R_kgDOHNLzwg"
        category="Announcements"
        categoryId="DIC_kwDOHNLzws4COry3"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode==="dark"?"dark":"light"}
        lang="en"
        loading="lazy"
        crossOrigin="anonymous"
      />
    </>
  );
}
