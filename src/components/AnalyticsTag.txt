"use client"

import React from 'react';
import Script from 'next/script';

function AnalyticsTag() {

    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-2CBNQX9T3B"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-2CBNQX9T3B');
        `}
            </Script>
        </>
    );
}

export default AnalyticsTag;