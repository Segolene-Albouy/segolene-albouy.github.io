// key (Witness id) => value (RegionExtraction id(s))
const naturalHistoryCorpus = {
    buffon: {23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 30: 30, 31: 31, 32: 32, 2335: 2348, 2336: 2350, 2337: 2349},
    encyclo_animal: {248: 248},
    fajardo: {2284: 2288, 2285: 2289, 2286: 2297, 2287: 2296, 2288: 2295, 2289: 2298, 2290: 2293, 2291: 2292, 2292: 2291, 2293: 2299, 2297: 2294},
    bewick: {2339: 2353}
};

// pairs of RegionExtraction ids that were expertly annotated
const naturalHistoryPairs = [
    [23, 2288], [24, 2288], [25, 2288], [26, 2288], [27, 2288], [28, 2288],
    [2348, 2288], [30, 2288], [31, 2288], [32, 2288], [2350, 2288], [2349, 2288],
    [23, 2289], [24, 2289], [25, 2289], [26, 2289], [27, 2289], [28, 2289],
    [2348, 2289], [30, 2289], [31, 2289], [32, 2289], [2350, 2289], [2349, 2289],
    [23, 2297], [24, 2297], [25, 2297], [26, 2297], [27, 2297], [28, 2297],
    [2348, 2297], [30, 2297], [31, 2297], [32, 2297], [2350, 2297], [2349, 2297],
    [23, 2296], [24, 2296], [25, 2296], [26, 2296], [27, 2296], [28, 2296],
    [2348, 2296], [30, 2296], [31, 2296], [32, 2296], [2350, 2296], [2349, 2296],
    [23, 2295], [24, 2295], [25, 2295], [26, 2295], [27, 2295], [28, 2295],
    [2348, 2295], [30, 2295], [31, 2295], [32, 2295], [2350, 2295], [2349, 2295],
    [23, 2298], [24, 2298], [25, 2298], [26, 2298], [27, 2298], [28, 2298],
    [2348, 2298], [30, 2298], [31, 2298], [32, 2298], [2350, 2298], [2349, 2298],
    [23, 2293], [24, 2293], [25, 2293], [26, 2293], [27, 2293], [28, 2293],
    [2348, 2293], [30, 2293], [31, 2293], [32, 2293], [2350, 2293], [2349, 2293],
    [23, 2292], [24, 2292], [25, 2292], [26, 2292], [27, 2292], [28, 2292],
    [2348, 2292], [30, 2292], [31, 2292], [32, 2292], [2350, 2292], [2349, 2292],
    [23, 2291], [24, 2291], [25, 2291], [26, 2291], [27, 2291], [28, 2291],
    [2348, 2291], [30, 2291], [31, 2291], [32, 2291], [2350, 2291], [2349, 2291],
    [23, 2299], [24, 2299], [25, 2299], [26, 2299], [27, 2299], [28, 2299],
    [2348, 2299], [30, 2299], [31, 2299], [32, 2299], [2350, 2299], [2349, 2299],
    [23, 2294], [24, 2294], [25, 2294], [26, 2294], [27, 2294], [28, 2294],
    [2348, 2294], [30, 2294], [31, 2294], [32, 2294], [2350, 2294], [2349, 2294],
    [248, 2288], [248, 2289], [248, 2297], [248, 2296], [248, 2295], [248, 2298],
    [248, 2293], [248, 2292], [248, 2291], [248, 2299], [248, 2294], [248, 2353],
    [23, 2353], [24, 2353], [25, 2353], [26, 2353], [27, 2353], [28, 2353],
    [2348, 2353], [30, 2353], [31, 2353], [32, 2353], [2350, 2353], [2349, 2353],
    [2353, 2288], [2353, 2289], [2353, 2297], [2353, 2296], [2353, 2295],
    [2353, 2298], [2353, 2293], [2353, 2292], [2353, 2291], [2353, 2299], [2353, 2294],
    // [23, 248], [24, 248], [25, 248], [26, 248],
    [27, 248], [28, 248], [2348, 248], [30, 248], [31, 248], [32, 248], [2350, 248], [2349, 248]
];

const geometryCorpus = {
    geometry: {2282: 2290, 2309: 2312, 2310: 2310, 2312: 2313, 2314: 2318}
};

const geometryPairs = [
    [2290, 2312], [2290, 2310], [2290, 2313], [2290, 2318],
    [2312, 2310], [2312, 2313], [2312, 2318],
    [2310, 2313], [2310, 2318],
    [2313, 2318]
];

const mathematicsCorpus = {
    lexicon_technikum: {77: 2320, 2325: 2321},
    chambers: {75: 75, 76: 76},
    encyclo_math: {247: 247},
    wolff: {116: 116, 117: 117, 118: 118, 119: 119, 120: 120}
};

const mathematicsPairs = [
    [2320, 75], [2320, 76], [2321, 75], [2321, 76],
    [2320, 116], [2320, 117], [2320, 118], [2320, 119], [2320, 120],
    [2321, 116], [2321, 117], [2321, 118], [2321, 119], [2321, 120],
    [2320, 247], [2321, 247],
    [116, 75], [116, 76], [117, 75], [117, 76], [118, 75], [118, 76],
    [119, 75], [119, 76], [120, 75], [120, 76],
    [247, 75], [247, 76], [247, 116], [247, 117], [247, 118], [247, 119], [247, 120]
];

// A = 2185, 2242 / B = 2239, 2243, 2259
const weddigenCorpus = {
    weddingen: {2185: 2126, 2242: 2186, 2239: 2181, 2243: 2182, 2259: 2234}
};

const weddigenPairs = [
    [2181, 2186], [2181, 2182], [2181, 2234], [2181, 2126],
    [2126, 2186], [2126, 2182], [2126, 2234],
    [2186, 2182], [2186, 2234],
    [2182, 2234]
];

const physiologusCorpus = {
    physiologus: {845: 845, 847: [847, 2190], 849: 849, 853: 853, 1728: 1679}
};
// 847 = more complete but duplicated regions / 2190

const physiologusPairs = [
    [845, 847], [845, 849], [845, 853], [845, 1679],
    [847, 849], [847, 853], [847, 1679],
    [849, 853], [849, 1679],
    [853, 1679]
];

const hyginCorpus = {
    hygin: {870: [2196, 870], 913: 913, 914: 914, 973: 973, 975: 975}
};
// 870 = B&W / 2196 = color

// no validated pairs for hygin

const phaenomenaCorpus = {
    draelants: {933: 933, 935: [2346, 935], 925: [2347, 925], 926: 926, 996: 996}
};
// 935 / 2346 = a bit more complete
// 925 / 2347 = a bit more complete

const phaenomenaPairs = [
    [2347, 926], [2347, 933], [2347, 2346], [2347, 996],
    [926, 933], [926, 2346], [926, 996],
    [933, 2346], [933, 996],
    [2346, 996]
];

const dioscoridesCorpus = {
    dioscorides: {1001: 1001, 1003: 1003, 1006: 1006, 1008: 1008, 1012: 1012, 1013: [1013, 2275]}
};
// 1013 = best_vhs / 2275 = best_eida (to delete)

const dioscoridesPairs = [
    [1001, 1003], [1001, 1006], [1001, 1008], [1001, 1012], [1001, 1013],
    [1003, 1008], [1003, 1012], [1003, 1013], // [1003,1006]
    [1006, 1008], [1006, 1012], [1006, 1013],
    [1008, 1012], [1008, 1013],
    [1012, 1013]
];

const BASE_URL = "https://iscd.huma-num.fr/";

const urlTemplate = "vhs/witness/{witnessId}/regions/pairs?regionsIds={regionIds}&category={category}&excludeSelf=true";

function getRegionId(v) {
    return v;
}

async function corpusData(corpus, corpusName = "") {
    const regionIds = [];
    let witnessId;

    for (const [subcorpusName, witnesses] of Object.entries(corpus)) {
        witnessId = Object.keys(witnesses)[0];
        regionIds.push(...Object.values(witnesses).map(v => getRegionId(v)));
    }

    const regionIdsStr = regionIds.join(",");
    const url = BASE_URL + urlTemplate
        .replace("{witnessId}", witnessId)
        .replace("{regionIds}", regionIdsStr)
        .replace("{category}", 1);

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const results = await response.json();
        if (corpusName) {
            console.log(`${corpusName}: ${regionIds.length} regions fetched from ${url}`);
        }
        return results;
    } catch (e) {
        console.error(`Error fetching ${corpusName}:`, e);
        return null;
    }
}

function imageToIiif(imgName) {
    const parts = imgName.split('_');
    const coords = parts[parts.length - 1].replace('.jpg', '');
    const base = parts.slice(0, -1).join('_');
    return `${BASE_URL}iiif/2/${base}.jpg/${coords}/full/0/default.jpg`;
}

function imageToPage(imgName) {
    const parts = imgName.split('_');
    return parseInt(parts[parts.length - 2]);
}

function formatData(data) {
    return data.map(pair => ({
        ...pair,
        page_1: imageToPage(pair.img_1),
        img_1: imageToIiif(pair.img_1),
        page_2: imageToPage(pair.img_2),
        img_2: imageToIiif(pair.img_2)
    }));
}

async function loadAndFormatCorpus(corpus, name) {
    const data = await corpusData(corpus, name);
    return data ? formatData(data) : null;
}

// (async () => {
//     const naturalHistoryData = await loadAndFormatCorpus(naturalHistoryCorpus, "Natural History");
//     const geometryData = await loadAndFormatCorpus(geometryCorpus, "Geometry");
//
//     window.corpusData = { naturalHistoryData, geometryData };
// })();