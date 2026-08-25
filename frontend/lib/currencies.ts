export type Currency = {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  rate: number;
};

export const CURRENCIES: Currency[] = [
  { code: "USD", name: "US Dollar", symbol: "$", flag: "\u{1F1FA}\u{1F1F8}", rate: 1 },
  { code: "EUR", name: "Euro", symbol: "\u20AC", flag: "\u{1F1EA}\u{1F1FA}", rate: 0.92 },
  { code: "GBP", name: "British Pound", symbol: "\u00A3", flag: "\u{1F1EC}\u{1F1E7}", rate: 0.79 },
  { code: "JPY", name: "Japanese Yen", symbol: "\u00A5", flag: "\u{1F1EF}\u{1F1F5}", rate: 149.5 },
  { code: "KRW", name: "South Korean Won", symbol: "\u20A9", flag: "\u{1F1F0}\u{1F1F7}", rate: 1350 },
  { code: "INR", name: "Indian Rupee", symbol: "\u20B9", flag: "\u{1F1EE}\u{1F1F3}", rate: 84.2 },
  { code: "THB", name: "Thai Baht", symbol: "\u0E3F", flag: "\u{1F1F9}\u{1F1ED}", rate: 36.4 },
  { code: "VND", name: "Vietnamese Dong", symbol: "\u20AB", flag: "\u{1F1FB}\u{1F1F3}", rate: 25400 },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", flag: "\u{1F1EE}\u{1F1E9}", rate: 15900 },
  { code: "PHP", name: "Philippine Peso", symbol: "\u20B1", flag: "\u{1F1F5}\u{1F1ED}", rate: 57.5 },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", flag: "\u{1F1F2}\u{1F1FE}", rate: 4.72 },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "\u{1F1F8}\u{1F1EC}", rate: 1.34 },
  { code: "CNY", name: "Chinese Yuan", symbol: "\u00A5", flag: "\u{1F1E8}\u{1F1F3}", rate: 7.25 },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", flag: "\u{1F1ED}\u{1F1F0}", rate: 7.81 },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "\u{1F1E6}\u{1F1FA}", rate: 1.52 },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", flag: "\u{1F1F3}\u{1F1FF}", rate: 1.63 },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "\u{1F1E8}\u{1F1E6}", rate: 1.37 },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "\u{1F1E8}\u{1F1ED}", rate: 0.885 },
  { code: "MXN", name: "Mexican Peso", symbol: "Mex$", flag: "\u{1F1F2}\u{1F1FD}", rate: 17.8 },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "\u{1F1E7}\u{1F1F7}", rate: 5.35 },
  { code: "AED", name: "UAE Dirham", symbol: "AED ", flag: "\u{1F1E6}\u{1F1EA}", rate: 3.67 },
  { code: "TRY", name: "Turkish Lira", symbol: "\u20BA", flag: "\u{1F1F9}\u{1F1F7}", rate: 33.2 },
];

const ZERO_DECIMAL = new Set(["JPY", "KRW", "IDR", "VND"]);

export function getCurrency(code: string): Currency {
  return CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];
}

export function convert(amount: number, from: string, to: string): number {
  const f = getCurrency(from);
  const t = getCurrency(to);
  return (amount / f.rate) * t.rate;
}

export function formatMoney(value: number, code: string): string {
  const rounded = ZERO_DECIMAL.has(code)
    ? Math.round(value)
    : Math.round(value * 100) / 100;
  const decimals = ZERO_DECIMAL.has(code) ? 0 : 2;
  return rounded.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatRate(from: string, to: string): string {
  const value = convert(1, from, to);
  let fixed: string;
  if (value >= 1000) {
    fixed = Math.round(value).toLocaleString("en-US");
  } else if (value >= 1) {
    fixed = value.toFixed(value >= 20 ? 2 : 4).replace(/\.?0+$/, "");
  } else {
    const digits = Math.min(6, Math.max(2, Math.ceil(-Math.log10(value)) + 3));
    fixed = value.toFixed(digits).replace(/\.?0+$/, "");
  }
  return `1 ${from} = ${getCurrency(to).symbol}${fixed}`;
}
