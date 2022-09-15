const priceFormatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW"
});

export default priceFormatter;