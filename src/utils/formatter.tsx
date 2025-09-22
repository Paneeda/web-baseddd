function formatCurrency(fxType: string) {
    const base = fxType?.split("-")[0]?.toUpperCase();
    const map: Record<string, string> = {
        USD: "USD",
        EUR: "EUR",
        THB: "THB",
        LAK: "LAK",
        RUB: "RUB",
        VND: "VND",
        JPY: "JPY",
        CNY: "CNY",
        SGD: "SGD",
        KHR: "KHR"
    };
    return map[base];
}

function formatFlag(fxType: string) {
    const code = formatCurrency(fxType).toLowerCase();
    return (
        <img
            src={`/icons/${code}-ccy.svg`}
            alt={code.toUpperCase()}
            className="w-10 h-10"
        />
    );
}

function formatThousand(num: number | string) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { formatCurrency, formatFlag, formatThousand };