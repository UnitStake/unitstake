// HubSpot: tracking code (only with analytics consent) and form submissions.
// Every call here is best-effort: a HubSpot failure must never break the site or a form.

const PORTAL_ID = '149383177';
const SCRIPT_ID = 'hs-script-loader';
const SCRIPT_SRC = `https://js-eu1.hs-scripts.com/${PORTAL_ID}.js`;
const SUBMIT_URL = 'https://api-eu1.hsforms.com/submissions/v3/integration/submit';

export const HS_FORMS = {
    requestAccess: '034d29e1-8b17-4580-8d5d-d882ff67f8dd', // homepage "Request Access" (email only)
    contact: 'c7eb9be3-5a57-4649-9a27-1aa72f6e596f', // /contact-us
};

// Same rule as the cookie banner: analytics cookies need the "Analytical" category.
export const hasAnalyticsConsent = () => {
    try {
        const raw = localStorage.getItem('cookieConsent');
        if (!raw) return false;
        if (raw === 'accepted') return true;
        const prefs = JSON.parse(raw);
        return !!(prefs && prefs.analytical);
    } catch {
        return false;
    }
};

const isAdminPath = () => window.location.pathname.startsWith('/admin');

// The page the visitor landed on, with its utm_* tags. Kept only in memory for this visit
// (no cookie, no storage): if analytics consent comes later on another page, HubSpot still
// records the landing page first, so the visitor's channel is not lost.
const LANDING_PATH =
    typeof window === 'undefined'
        ? null
        : window.location.pathname + window.location.search;
const currentPath = () => window.location.pathname + window.location.search;

export const loadHubSpot = () => {
    if (typeof window === 'undefined' || isAdminPath()) return false;
    if (!hasAnalyticsConsent()) return false;
    if (document.getElementById(SCRIPT_ID)) return true;
    const q = (window._hsq = window._hsq || []);
    const here = currentPath();
    if (LANDING_PATH && LANDING_PATH !== here) {
        // first (automatic) page view = the landing page, then the page the visitor is on now
        q.push(['setPath', LANDING_PATH]);
        q.push([
            'addIdentityListener',
            () => {
                q.push(['setPath', currentPath()]);
                q.push(['trackPageView']);
            },
        ]);
    }
    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.type = 'text/javascript';
    s.async = true;
    s.defer = true;
    s.src = SCRIPT_SRC;
    document.body.appendChild(s);
    return true;
};

// Called when the visitor withdraws analytics consent after HubSpot was loaded.
export const revokeHubSpot = () => {
    try {
        (window._hsp = window._hsp || []).push(['revokeCookieConsent']);
    } catch {
        /* ignore */
    }
};

// SPA navigation: HubSpot records the first page itself, later routes are sent here.
export const trackHubSpotPageView = (path) => {
    if (!document.getElementById(SCRIPT_ID)) return;
    const q = window._hsq || [];
    q.push(['setPath', path]);
    q.push(['trackPageView']);
};

const getHutk = () => {
    const m = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : undefined;
};

// fields: { email: '...', firstname: '...', ... }. Empty values are not sent,
// so a repeat submission never wipes data the contact already has.
export const sendToHubSpot = (formKey, fields) => {
    try {
        const formGuid = HS_FORMS[formKey];
        if (!formGuid) return Promise.resolve(false);
        const list = Object.entries(fields)
            .map(([name, value]) => [name, Array.isArray(value) ? value.join('; ') : value])
            .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
            .map(([name, value]) => ({ objectTypeId: '0-1', name, value: String(value).trim() }));
        const context = { pageUri: window.location.href, pageName: document.title };
        const hutk = hasAnalyticsConsent() ? getHutk() : undefined;
        if (hutk) context.hutk = hutk;
        return fetch(`${SUBMIT_URL}/${PORTAL_ID}/${formGuid}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fields: list, context }),
            keepalive: true,
        })
            .then((r) => {
                if (!r.ok) console.warn('HubSpot form submit failed:', r.status);
                return r.ok;
            })
            .catch((e) => {
                console.warn('HubSpot form submit failed:', e);
                return false;
            });
    } catch (e) {
        console.warn('HubSpot form submit failed:', e);
        return Promise.resolve(false);
    }
};

// GA4 key event for a successful lead (GA4 is loaded by gtag in index.html).
export const trackLead = (formName) => {
    try {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'generate_lead', { form_name: formName });
        }
    } catch {
        /* ignore */
    }
};
