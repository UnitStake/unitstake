export const generateSlug = (text) => {
    if (!text) return '';

    return text
        .toLowerCase()
        .trim()
        .replace(/[^\p{L}0-9\s-]/gu, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};
