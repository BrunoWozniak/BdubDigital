---
title: cookieconsent-config.js
---

import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.umd.js';

CookieConsent.run({

    disablePageInteraction: true,

    cookie: {
        name: 'cc.bdub.digital',
    },

    guiOptions: {
        consentModal: {
            layout: 'box wide',
            position: 'bottom center',
            equalWeightButtons: false
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: false
        }
    },

    onFirstConsent: () => {
        console.log('onFirstAction fired');
    },

    onConsent: () => {
        console.log('onConsent fired ...');
    },

    onChange: () => {
        console.log('onChange fired ...');
    },

    categories: {
        necessary: {
            readOnly: true,
            enabled: true
        },
        analytics: {
            enabled: true,
            autoClear: {
                cookies: [
                    {
                        name: /^(_ga|_gid)/
                    }
                ]
            }
        },
    },

    language: {
        default: 'en',
        autoDetect: 'document',
        translations: {
            en: {
                consentModal: {
                    title: 'Hello traveller, it\'s cookie time!',
                    description: 'Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
                    acceptAllBtn: 'Accept',
                    acceptNecessaryBtn: 'Reject',
                    // showPreferencesBtn: 'Manage preferences',
                    closeIconLabel: 'Reject all and close',
                    footer: `<a href={{ 'privacy' | relative_url }}>{{ site.data.strings.privacy }}</a>`
                },
/*                 preferencesModal: {
                    title: 'Cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Save preferences',
                    sections: [
                        {
                            title: 'Cookie usage',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. For more details, refer to our <a href="#" class="cc__link">privacy policy</a>.'
                        }, {
                            title: 'Strictly necessary cookies',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            linkedCategory: 'necessary'
                        }, {
                            title: 'Performance and analytics cookies',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Description'
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: 'yourdomain.com',
                                        desc: 'description ...',
                                    },
                                    {
                                        name: '_gid',
                                        domain: 'yourdomain.com',
                                        desc: 'description ...',
                                    }
                                ]
                            }
                        }, {
                            title: 'More information',
                            description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
                        }
                    ]
                } */
            },
            fr: {
                consentModal: {
                    title: 'Bonjour visiteur, c\'est l\'heure du cookie!',
                    description: 'Ce site utilise des cookies essentiels pour assurer son bon fonctionnement, et des cookies traceurs pour comprendre comment vous interagissez avec lui. Ces derniers ne seront activés qu\'après votre consentement.',
                    description: 'Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
                    acceptAllBtn: 'Accepter',
                    acceptNecessaryBtn: 'Refuser',
                    // showPreferencesBtn: 'Choisir',
                    closeIconLabel: 'Tout accepter et fermer',
                    footer: `<a href={{ 'fr/privacy' | relative_url }}>{{ site.data['fr'].strings.privacy }}</a>`
                },
                /* preferencesModal: {
                    title: 'Préférences',
                    acceptAllBtn: 'Tout accepter',
                    acceptNecessaryBtn: 'Tout refuser',
                    savePreferencesBtn: 'Enregistrer les',
                    sections: [
                        {
                            title: 'Cookie usage',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. For more details, refer to our <a href="#" class="cc__link">privacy policy</a>.'
                        }, {
                            title: 'Strictly necessary cookies',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            linkedCategory: 'necessary'
                        }, {
                            title: 'Performance and analytics cookies',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Description'
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: 'yourdomain.com',
                                        desc: 'description ...',
                                    },
                                    {
                                        name: '_gid',
                                        domain: 'yourdomain.com',
                                        desc: 'description ...',
                                    }
                                ]
                            }
                        }, {
                            title: 'More information',
                            description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
                        }
                    ]
                } */
            }
        }
    }
});