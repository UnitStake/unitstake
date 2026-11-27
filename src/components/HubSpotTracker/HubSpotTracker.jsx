import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
    loadHubSpot,
    revokeHubSpot,
    trackHubSpotPageView,
} from '../../lib/hubspot';

// Loads HubSpot once the visitor allows analytics cookies and reports SPA page changes.
const HubSpotTracker = () => {
    const location = useLocation();
    const firstPath = useRef(null);

    useEffect(() => {
        loadHubSpot();
        const onConsent = (e) => {
            if (e.detail && e.detail.analytical) loadHubSpot();
            else revokeHubSpot();
        };
        window.addEventListener('cookieConsentChange', onConsent);
        return () => window.removeEventListener('cookieConsentChange', onConsent);
    }, []);

    useEffect(() => {
        const path = location.pathname + location.search;
        if (firstPath.current === null) {
            firstPath.current = path; // the HubSpot script records the first page itself
            return;
        }
        if (location.pathname.startsWith('/admin')) return;
        trackHubSpotPageView(path);
    }, [location.pathname, location.search]);

    return null;
};

export default HubSpotTracker;
