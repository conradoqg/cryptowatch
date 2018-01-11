var advancedCharts = [
    {
        "container_id": "chart_0",
        "symbols": [
            "BITFINEX:BTCUSD"
        ]
    },
    {
        "container_id": "chart_1",
        "symbols": [
            "BITFINEX:ETHUSD"
        ]
    },
    {
        "container_id": "chart_2",
        "symbols": [
            "BITFINEX:LTCUSD"
        ]
    },
    {
        "container_id": "chart_3",
        "symbols": [
            "BITFINEX:BCHUSD"
        ]
    },
    {
        "container_id": "chart_4",
        "symbols": [
            "BITFINEX:XRPUSD"
        ]
    },
    {
        "container_id": "chart_5",
        "symbols": [
            "BITFINEX:IOTUSD"
        ]
    }
];

advancedCharts.forEach(function (item) {
    new TradingView.widget({
        "container_id": item["container_id"],
        "width": "100%",
        "height": 300,
        "symbol": item["symbols"][0],
        "interval": "1",
        "timezone": "America/Sao_Paulo",
        "theme": "Light",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hideideas": true,
        "save_image": false,
        "hide_top_toolbar": true,
        "studies": [
            "MAWeighted@tv-basicstudies"
        ]
    });
});