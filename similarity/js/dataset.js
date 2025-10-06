// key (Witness id) => value (RegionExtraction id(s))
const naturalHistoryCorpus = {
    buffon: {
        23: {witnessId: 23, regionId: 23, witTitle: ""},
        24: {witnessId: 24, regionId: 24, witTitle: ""},
        25: {witnessId: 25, regionId: 25, witTitle: ""},
        26: {witnessId: 26, regionId: 26, witTitle: ""},
        27: {witnessId: 27, regionId: 27, witTitle: ""},
        28: {witnessId: 28, regionId: 28, witTitle: ""},
        30: {witnessId: 30, regionId: 30, witTitle: ""},
        31: {witnessId: 31, regionId: 31, witTitle: ""},
        32: {witnessId: 32, regionId: 32, witTitle: ""},
        2335: {witnessId: 2335, regionId: 2348, witTitle: ""},
        2336: {witnessId: 2336, regionId: 2350, witTitle: ""},
        2337: {witnessId: 2337, regionId: 2349, witTitle: ""}
    },
    encyclo_animal: {
        248: {witnessId: 248, regionId: 248, witTitle: ""}
    },
    fajardo: {
        2284: {witnessId: 2284, regionId: 2288, witTitle: ""},
        2285: {witnessId: 2285, regionId: 2289, witTitle: ""},
        2286: {witnessId: 2286, regionId: 2297, witTitle: ""},
        2287: {witnessId: 2287, regionId: 2296, witTitle: ""},
        2288: {witnessId: 2288, regionId: 2295, witTitle: ""},
        2289: {witnessId: 2289, regionId: 2298, witTitle: ""},
        2290: {witnessId: 2290, regionId: 2293, witTitle: ""},
        2291: {witnessId: 2291, regionId: 2292, witTitle: ""},
        2292: {witnessId: 2292, regionId: 2291, witTitle: ""},
        2293: {witnessId: 2293, regionId: 2299, witTitle: ""},
        2297: {witnessId: 2297, regionId: 2294, witTitle: ""}
    },
    bewick: {
        2339: {witnessId: 2339, regionId: 2353, witTitle: ""}
    }
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
    geometry: {
        2282: {witnessId: 2282, regionId: 2290, witTitle: ""},
        2309: {witnessId: 2309, regionId: 2312, witTitle: ""},
        2310: {witnessId: 2310, regionId: 2310, witTitle: ""},
        2312: {witnessId: 2312, regionId: 2313, witTitle: ""},
        2314: {witnessId: 2314, regionId: 2318, witTitle: ""}
    }
};

const geometryPairs = [
    [2290, 2312], [2290, 2310], [2290, 2313], [2290, 2318],
    [2312, 2310], [2312, 2313], [2312, 2318],
    [2310, 2313], [2310, 2318],
    [2313, 2318]
];

const mathematicsCorpus = {
    lexicon_technikum: {
        77: {witnessId: 77, regionId: 2320, witTitle: ""},
        2325: {witnessId: 2325, regionId: 2321, witTitle: ""}
    },
    chambers: {
        75: {witnessId: 75, regionId: 75, witTitle: ""},
        76: {witnessId: 76, regionId: 76, witTitle: ""}
    },
    encyclo_math: {
        247: {witnessId: 247, regionId: 247, witTitle: ""}
    },
    wolff: {
        116: {witnessId: 116, regionId: 116, witTitle: ""},
        117: {witnessId: 117, regionId: 117, witTitle: ""},
        118: {witnessId: 118, regionId: 118, witTitle: ""},
        119: {witnessId: 119, regionId: 119, witTitle: ""},
        120: {witnessId: 120, regionId: 120, witTitle: ""}
    }
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
    weddingen: {
        2185: {witnessId: 2185, regionId: 2126, witTitle: ""},
        2242: {witnessId: 2242, regionId: 2186, witTitle: ""},
        2239: {witnessId: 2239, regionId: 2181, witTitle: ""},
        2243: {witnessId: 2243, regionId: 2182, witTitle: ""},
        2259: {witnessId: 2259, regionId: 2234, witTitle: ""}
    }
};


const weddigenPairs = [
    [2181, 2186], [2181, 2182], [2181, 2234], [2181, 2126],
    [2126, 2186], [2126, 2182], [2126, 2234],
    [2186, 2182], [2186, 2234],
    [2182, 2234]
];

const physiologusCorpus = {
    physiologus: {
        845: {witnessId: 845, regionId: 845, witTitle: ""},
        847: {witnessId: 847, regionId: 847, witTitle: ""}, // [847, 2190]
        849: {witnessId: 849, regionId: 849, witTitle: ""},
        853: {witnessId: 853, regionId: 853, witTitle: ""},
        1728: {witnessId: 1728, regionId: 1679, witTitle: ""}
    }
};
// 847 = more complete but duplicated regions / 2190

const physiologusPairs = [
    [845, 847], [845, 849], [845, 853], [845, 1679],
    [847, 849], [847, 853], [847, 1679],
    [849, 853], [849, 1679],
    [853, 1679]
];

const hyginCorpus = {
    hygin: {
        870: {witnessId: 870, regionId: 2196, witTitle: ""}, // [2196, 870]
        913: {witnessId: 913, regionId: 913, witTitle: ""},
        914: {witnessId: 914, regionId: 914, witTitle: ""},
        973: {witnessId: 973, regionId: 973, witTitle: ""},
        975: {witnessId: 975, regionId: 975, witTitle: ""}
    }
};
// 870 = B&W / 2196 = color

// no validated pairs for hygin

const phaenomenaCorpus = {
    draelants: {
        933: {witnessId: 933, regionId: 933, witTitle: ""},
        935: {witnessId: 935, regionId: 2346, witTitle: ""}, // [2346, 935]
        925: {witnessId: 925, regionId: 2347, witTitle: ""}, // [2347, 925]
        926: {witnessId: 926, regionId: 926, witTitle: ""},
        996: {witnessId: 996, regionId: 996, witTitle: ""}
    }
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
    dioscorides: {
        1001: {witnessId: 1001, regionId: 1001, witTitle: ""},
        1003: {witnessId: 1003, regionId: 1003, witTitle: ""},
        1006: {witnessId: 1006, regionId: 1006, witTitle: ""},
        1008: {witnessId: 1008, regionId: 1008, witTitle: ""},
        1012: {witnessId: 1012, regionId: 1012, witTitle: ""},
        1013: {witnessId: 1013, regionId: 1013, witTitle: ""} // [1013, 2275]
    }
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

async function getWitnessTitle(witnessId) {
    return await fetch(BASE_URL + `search/regions/?id=${witnessId}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data.hasOwnProperty("results") && data.results.length > 0) {
                let title = data.results[0].title.split(" | ");
                title.shift();
                return title[0] || `Region Extraction ${witnessId}`;
            }
            return `Region Extraction #${witnessId}`;
        })
        .catch(e => {
            console.error(`Error fetching title for witness ${witnessId}:`, e);
            return `Region Extraction #${witnessId}`;
        });
}

const regionMetadataMap = new Map();

async function enrichCorpusWithTitles(corpus) {
    const witnessIds = new Set();

    for (const subcorpus of Object.values(corpus)) {
        for (const witness of Object.values(subcorpus)) {
            // witnessIds.add(witness.witnessId);
            // witnessIds.add(typeof witness.regionId === "object" ? witness.regionId[0] : witness.regionId);
            witnessIds.add(witness.regionId);
        }
    }

    const titlePromises = Array.from(witnessIds).map(async witnessId => {
        const title = await getWitnessTitle(witnessId);
        return [witnessId, title];
    });

    const titles = await Promise.all(titlePromises);
    const titleMap = Object.fromEntries(titles);

    for (const subcorpus of Object.values(corpus)) {
        for (const witness of Object.values(subcorpus)) {
            witness.witTitle = titleMap[witness.regionId];
            regionMetadataMap.set(witness.regionId, {
                witnessId: witness.witnessId,
                witTitle: witness.witTitle,
                regionId: witness.regionId
            });
        }
    }
}

async function corpusData(corpus, corpusName = "") {
    const regionIds = [];
    let witnessId;

    for (const subcorpus of Object.values(corpus)) {
        for (const witness of Object.values(subcorpus)) {
            witnessId = witness.witnessId;
            regionIds.push(witness.regionId);
        }
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
    await enrichCorpusWithTitles(corpus);
    const data = await corpusData(corpus, name);
    if (data && !data.hasOwnProperty("message") && !data.hasOwnProperty("error")) {
        return formatData(data);
    }
    return null;
}

// (async () => {
//     const naturalHistoryData = await loadAndFormatCorpus(naturalHistoryCorpus, "Natural History");
//     const geometryData = await loadAndFormatCorpus(geometryCorpus, "Geometry");
//
//     window.corpusData = { naturalHistoryData, geometryData };
// })();