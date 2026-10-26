export const generateSlug = (text) => {
    if (!text) return '';

    return text
        .toLowerCase()
        .trim()
        .replace(/[^\p{L}0-9\s-]/gu, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};

export const formatAssetLabel = (value) => {
    const format = (num, suffix) => `${parseFloat(num.toFixed(1))}${suffix}`;

    if (value >= 1000 && value <= 999999) {
        return format(value / 1000, 'K');
    } else if (value >= 1000000 && value <= 999999999) {
        return format(value / 1000000, 'M');
    } else if (value >= 1000000000 && value <= 999999999999) {
        return format(value / 1000000000, 'B');
    } else {
        return value;
    }
};

export const foundFirstCurrencySymbol = (symbol) => {
    if (!symbol) {
        return '$';
    } else if (
        symbol == '$' ||
        symbol == '€' ||
        symbol == '£' ||
        symbol == '₴'
    ) {
        return symbol;
    } else {
        return '';
    }
};

export const foundSecondCurrencySymbol = (symbol) => {
    if (
        symbol == 'zł' ||
        symbol == 'USDT' ||
        symbol == 'USDC' ||
        symbol == 'EURC' ||
        symbol == 'AED'
    ) {
        return symbol;
    } else {
        return '';
    }
};
