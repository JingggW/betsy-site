// Data for travel.html ("Can Betsy come?"). Edit this file, not the page.
//
// checked        date of the last full research pass (shown on the page)
// sources        id -> { t: title, u: url, last_verified }
// places[]       id, name, where, lon, lat, views ('town' | 'near' | 'far'), line (map route style),
//                lab [dx, dy, anchor] label offset, blurb, opts[], yes[], no[], tip, src[] (source ids),
//                last_verified
// opts[]         mode ('drive' | 'train' | 'ferry' | 'fly'), what, hrs (one way, rough),
//                cost (dog-side AUD, one way, low end; null = quote only), costText, note,
//                big (false = small dogs only, 'maybe' = check crate size, omitted = any size)
//
// Rules: Betsy is a greyhound, never state her weight. Never put a real home address here.
window.BETSY_TRAVEL = {
  "checked": "2026-11-22",
  "sources": {
    "searoad": {
      "t": "Searoad Ferries",
      "u": "https://www.searoad.com.au/ferry",
      "last_verified": "2026-11-22"
    },
    "mornpen": {
      "t": "Mornington Peninsula Shire: dogs",
      "u": "https://www.mornpen.vic.gov.au/Your-Property/Animals-and-Pets/Dogs-on-the-Peninsula",
      "last_verified": "2026-11-22"
    },
    "pi": {
      "t": "Travelnuity: dog-friendly Phillip Island",
      "u": "https://www.travelnuity.com/dog-friendly-phillip-island/",
      "last_verified": "2026-11-22"
    },
    "piBeach": {
      "t": "Travelnuity: Phillip Island dog beach",
      "u": "https://www.travelnuity.com/?p=20325",
      "last_verified": "2026-11-22"
    },
    "gor": {
      "t": "GreatOceanRoad.com.au: dog-friendly trip",
      "u": "https://greatoceanroad.com.au/plan/dog-friendly/",
      "last_verified": "2026-11-22"
    },
    "apollo": {
      "t": "Travelnuity: dog-friendly Apollo Bay",
      "u": "https://www.travelnuity.com/dog-friendly-apollo-bay/",
      "last_verified": "2026-11-22"
    },
    "lorne": {
      "t": "Travelnuity: Lorne",
      "u": "https://www.travelnuity.com/?p=24278",
      "last_verified": "2026-11-22"
    },
    "sotRules": {
      "t": "Spirit of Tasmania: pet rules",
      "u": "https://www.spiritoftasmania.com.au/before-you-sail/travelling-with-pets/pet-rules-safety-and-behaviour/",
      "last_verified": "2026-11-22"
    },
    "pwsDogs": {
      "t": "Tasmania Parks: dogs in parks",
      "u": "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/dogs-in-parks",
      "last_verified": "2026-11-22"
    },
    "ract": {
      "t": "RACT: dog-friendly Tasmania",
      "u": "https://ract.com.au/membership/journeys/experiences/tassie-tails-exploring-the-island-s-best-dog-friendly-adventures",
      "last_verified": "2026-11-22"
    },
    "tnTas": {
      "t": "Travelnuity: Tasmania with a dog",
      "u": "https://www.travelnuity.com/visit-tasmania-with-dog/",
      "last_verified": "2026-11-22"
    },
    "biosec": {
      "t": "Biosecurity Tasmania: dogs",
      "u": "https://nre.tas.gov.au/biosecurity-tasmania/travellers-guide-to-tasmanian-biosecurity-what-you-can-and-cant-bring-into-tasmania/animal-and-animal-products",
      "last_verified": "2026-11-22"
    },
    "pawmobile": {
      "t": "Pawmobile: regular services",
      "u": "https://pawmobile.com.au/our-services/our-regular-services/",
      "last_verified": "2026-11-22"
    },
    "sharp": {
      "t": "Sharp Airlines: freight & animal rates",
      "u": "https://sharpairlines.com.au/freight-services/sending",
      "last_verified": "2026-11-22"
    },
    "virgin": {
      "t": "Virgin Australia: Pets in Cabin",
      "u": "https://www.virginaustralia.com/au/en/travel-info/specific-travel/pets/pets-in-cabin/",
      "last_verified": "2026-11-22"
    },
    "dogmovers": {
      "t": "Dogmovers: 2026 interstate price guide",
      "u": "https://dogmovers.com.au/pet-transport-costs-australia/",
      "last_verified": "2026-11-22"
    },
    "kiPets": {
      "t": "SeaLink: taking pets to Kangaroo Island",
      "u": "https://www.sealink.com.au/kangaroo-island/visitor-information/taking-your-pets-to-ki/",
      "last_verified": "2026-11-22"
    },
    "kiFaq": {
      "t": "SeaLink KI FAQs",
      "u": "https://sealink.com.au/kangaroo-island/faqs",
      "last_verified": "2026-11-22"
    },
    "qf": {
      "t": "Travelnuity: flying a dog in Australia",
      "u": "https://www.travelnuity.com/flying-with-a-dog-in-australia/",
      "last_verified": "2026-11-22"
    },
    "maggie": {
      "t": "Travelnuity: dog-friendly Queensland islands",
      "u": "https://www.travelnuity.com/dog-friendly-islands-queensland/",
      "last_verified": "2026-11-22"
    },
    "maggiePolicy": {
      "t": "SeaLink Magnetic Island animals policy",
      "u": "https://sealink.com.au/magnetic-island/terms-and-conditions/magnetic-island-animals-policy",
      "last_verified": "2026-11-22"
    },
    "nullarbor": {
      "t": "Travelnuity: Nullarbor with a dog",
      "u": "https://www.travelnuity.com/dog-friendly-nullarbor/",
      "last_verified": "2026-11-22"
    },
    "ptv": {
      "t": "Transport Victoria: animals on public transport",
      "u": "https://transport.vic.gov.au/plan-a-journey/travel-tips-and-resources/bringing-items-on-public-transport/animals-on-public-transport",
      "last_verified": "2026-11-22"
    },
    "vline": {
      "t": "V/Line: bikes, luggage & animals",
      "u": "https://aws-public.vline.com.au/Fares-general-info/Bikes-Luggage-Animals",
      "last_verified": "2026-11-22"
    },
    "tnDay": {
      "t": "Travelnuity: dog-friendly day trips from Melbourne",
      "u": "https://www.travelnuity.com/dog-friendly-day-trips-melbourne/",
      "last_verified": "2026-11-22"
    },
    "tnTrains": {
      "t": "Travelnuity: dog-friendly historic train rides",
      "u": "https://www.travelnuity.com/dog-friendly-historic-train-rides-australia/",
      "last_verified": "2026-11-22"
    },
    "tnGetaway": {
      "t": "Travelnuity: dog-friendly getaways from Melbourne",
      "u": "https://www.travelnuity.com/dog-friendly-getaways-from-melbourne/",
      "last_verified": "2026-11-22"
    },
    "wpf": {
      "t": "Western Port Ferries: service info",
      "u": "https://westernportferries.com.au/service-updates",
      "last_verified": "2026-11-22"
    },
    "ppf": {
      "t": "Port Phillip Ferries: Geelong ↔ Portarlington",
      "u": "https://www.portphillipferries.com.au/tickets-times/geelong-to-portarlington",
      "last_verified": "2026-11-22"
    },
    "uber": {
      "t": "Uber: Uber Pet goes national",
      "u": "https://www.uber.com/au/en/newsroom/uberpet-goes-national/",
      "last_verified": "2026-11-22"
    },
    "uberFee": {
      "t": "Uber: Uber Pet launch (surcharge)",
      "u": "https://www.uber.com/au/en/newsroom/uberpetgoesnational/",
      "last_verified": "2026-11-22"
    },
    "nz": {
      "t": "Travelnuity: flying a dog Australia to NZ",
      "u": "https://www.travelnuity.com/flying-a-dog-from-australia-to-nz/",
      "last_verified": "2026-11-22"
    },
    "mpi": {
      "t": "NZ MPI import health standard",
      "u": "https://www.mpi.govt.nz/dmsdocument/1575/send",
      "last_verified": "2026-11-22"
    }
  },
  "places": [
    {
      "id": "mumsfriend",
      "name": "Mum’s only friend’s home",
      "where": "address: classified",
      "lon": 144.96,
      "lat": -37.54,
      "views": [
        "town"
      ],
      "line": "drive",
      "lab": [
        8,
        -6,
        "start"
      ],
      "blurb": "the most important destination on this map.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 0.6,
          "cost": 0,
          "costText": "$0"
        },
        {
          "mode": "drive",
          "what": "Uber Pet",
          "hrs": 0.6,
          "cost": 7,
          "costText": "~$6–7 extra",
          "note": "Pet surcharge on top of the fare (launch pricing)."
        }
      ],
      "yes": [
        "Everything, presumably",
        "Her own spot on their couch"
      ],
      "no": [
        "Being left at home"
      ],
      "tip": "Call ahead. Mum only has the one friend.",
      "src": [
        "uber",
        "uberFee"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "altona",
      "name": "Altona Dog Beach",
      "where": "Melbourne · west",
      "lon": 144.83,
      "lat": -37.87,
      "views": [
        "town"
      ],
      "line": "train",
      "lab": [
        -8,
        -10,
        "end"
      ],
      "blurb": "off lead, all day, all year. ten minutes from the couch.",
      "opts": [
        {
          "mode": "train",
          "what": "Metro train (Altona)",
          "hrs": 0.75,
          "cost": 0,
          "costText": "$0",
          "note": "Any size dog on a lead and muzzle. Avoid weekday peaks, 7–9am and 4–6pm."
        },
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 0.4,
          "cost": 0,
          "costText": "$0"
        },
        {
          "mode": "drive",
          "what": "Uber Pet",
          "hrs": 0.5,
          "cost": 7,
          "costText": "~$6–7 extra",
          "note": "Pet surcharge on top of the fare (launch pricing)."
        }
      ],
      "yes": [
        "Off lead all day, year round, on the beach and in the fenced PA Burns Reserve next door"
      ],
      "no": [
        "Port Phillip Ferries (Docklands, Portarlington, Geelong): no pets"
      ],
      "tip": "Muzzle on for the train, off at the beach.",
      "src": [
        "tnDay",
        "ptv",
        "uber",
        "uberFee",
        "ppf"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "dandenongs",
      "name": "Dandenong Ranges",
      "where": "Melbourne · east",
      "lon": 145.35,
      "lat": -37.91,
      "views": [
        "town"
      ],
      "line": "train",
      "lab": [
        8,
        -8,
        "start"
      ],
      "blurb": "hills and fern gullies, a train ride from the couch.",
      "opts": [
        {
          "mode": "train",
          "what": "Metro train to Belgrave",
          "hrs": 1.25,
          "cost": 0,
          "costText": "$0",
          "note": "Lead and muzzle, off-peak."
        },
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 1,
          "cost": 0,
          "costText": "$0"
        }
      ],
      "yes": [
        "Getting there by metro train, on lead and muzzle"
      ],
      "no": [
        "Puffing Billy: its Dog Express no longer runs"
      ],
      "src": [
        "tnTrains",
        "ptv"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "macedon",
      "name": "Macedon Ranges",
      "where": "Victoria · north-west",
      "lon": 144.57,
      "lat": -37.42,
      "views": [
        "town"
      ],
      "line": "drive",
      "lab": [
        -8,
        -8,
        "end"
      ],
      "blurb": "hikes in the hills. autumn leaves to sniff.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 1,
          "cost": 0,
          "costText": "$0"
        },
        {
          "mode": "train",
          "what": "V/Line",
          "hrs": 1,
          "cost": 0,
          "costText": "$0",
          "big": false,
          "note": "Small dogs only, in a box you can carry in one hand."
        }
      ],
      "yes": [
        "Macedon Regional Park: dog-friendly walks, from short strolls to all-day hikes"
      ],
      "no": [
        "V/Line coaches: no pets"
      ],
      "src": [
        "tnGetaway",
        "vline"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "castlemaine",
      "name": "Castlemaine",
      "where": "Victoria · goldfields",
      "lon": 144.22,
      "lat": -37.06,
      "views": [
        "town"
      ],
      "line": "drive",
      "lab": [
        -8,
        4,
        "end"
      ],
      "blurb": "a gold-rush steam train, dogs welcome.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 1.5,
          "cost": 0,
          "costText": "$0"
        },
        {
          "mode": "train",
          "what": "V/Line",
          "hrs": 1.5,
          "cost": 0,
          "costText": "$0",
          "big": false,
          "note": "Small dogs only, in a box you can carry in one hand."
        }
      ],
      "yes": [
        "Victorian Goldfields Railway steam train: Excursion Class, usually one return trip Wednesday and two Sunday, at the station master’s discretion"
      ],
      "no": [
        "Big dogs on V/Line"
      ],
      "src": [
        "tnTrains",
        "vline"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "geelong",
      "name": "Geelong & Bellarine",
      "where": "Victoria · south-west",
      "lon": 144.36,
      "lat": -38.15,
      "views": [
        "town"
      ],
      "line": "drive",
      "lab": [
        -8,
        4,
        "end"
      ],
      "blurb": "the heritage train takes dogs. the fast ferry doesn’t.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 1,
          "cost": 0,
          "costText": "$0"
        },
        {
          "mode": "train",
          "what": "V/Line",
          "hrs": 1,
          "cost": 0,
          "costText": "$0",
          "big": false,
          "note": "Small dogs only, in a box you can carry in one hand."
        }
      ],
      "yes": [
        "Bellarine Railway (Swan Bay Express) from Queenscliff: Sundays and most public holidays, free, and the dog gets her own ticket"
      ],
      "no": [
        "Port Phillip Ferries from Docklands: no pets on board"
      ],
      "src": [
        "tnTrains",
        "ppf",
        "vline"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "french",
      "name": "French Island",
      "where": "Western Port",
      "lon": 145.35,
      "lat": -38.35,
      "views": [
        "town"
      ],
      "line": "ferry",
      "lab": [
        8,
        4,
        "start"
      ],
      "blurb": "a quiet island, if you stay out of the park.",
      "opts": [
        {
          "mode": "ferry",
          "what": "Drive to Stony Point + Western Port Ferries",
          "hrs": 1.75,
          "cost": null,
          "costText": "dogs ok, ask fare",
          "note": "Ferries are cancelled in strong winds."
        }
      ],
      "yes": [
        "Dogs on the ferry and on the island outside the national park"
      ],
      "no": [
        "French Island National Park, about 70% of the island",
        "No off-lead areas anywhere on the island"
      ],
      "src": [
        "wpf"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "mornington",
      "name": "Mornington Peninsula",
      "where": "Victoria · Port Phillip",
      "lon": 144.75,
      "lat": -38.36,
      "views": [
        "town",
        "near"
      ],
      "line": "ferry",
      "lab": [
        -1.2,
        -0.9,
        "end"
      ],
      "blurb": "the free ferry. dogs ride on deck, ears out.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive down the peninsula",
          "hrs": 1.5,
          "cost": 0,
          "costText": "$0"
        },
        {
          "mode": "ferry",
          "what": "Searoad, Queenscliff → Sorrento",
          "hrs": 0.7,
          "cost": 0,
          "costText": "free",
          "note": "On a lead, outside decks only."
        }
      ],
      "yes": [
        "Searoad ferry, free, on lead, outside decks (water stations on board)",
        "The Shire’s leash-free areas on the bay side"
      ],
      "no": [
        "The Bass Strait coast is Mornington Peninsula National Park, so check Parks Victoria signs first"
      ],
      "tip": "Combine with the Great Ocean Road: drive one way, ferry back.",
      "src": [
        "searoad",
        "mornpen"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "phillip",
      "name": "Phillip Island",
      "where": "Victoria · Bass Coast",
      "lon": 145.24,
      "lat": -38.48,
      "views": [
        "town",
        "near"
      ],
      "line": "drive",
      "lab": [
        1.3,
        0.6,
        "start"
      ],
      "blurb": "one beach where she can run all day, every day of the year.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 1.75,
          "cost": 0,
          "costText": "$0",
          "note": ""
        }
      ],
      "yes": [
        "Ventnor dog beach: off lead all day, all year",
        "Blue Gum Reserve off-lead park in Cowes",
        "Outdoor tables at plenty of Cowes cafés"
      ],
      "no": [
        "The Penguin Parade",
        "Summerland Peninsula beaches",
        "The Grand Prix circuit"
      ],
      "tip": "Back on lead within 50 m of any signed wildlife refuge.",
      "src": [
        "piBeach",
        "pi"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "gor",
      "name": "Great Ocean Road",
      "where": "Victoria · Surf Coast to Otways",
      "lon": 143.97,
      "lat": -38.54,
      "views": [
        "town",
        "near"
      ],
      "line": "drive",
      "lab": [
        -1.3,
        0.5,
        "end"
      ],
      "blurb": "the road says yes. the famous bits say no.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive (Lorne, Apollo Bay)",
          "hrs": 2.5,
          "cost": 0,
          "costText": "$0"
        }
      ],
      "yes": [
        "Towns and many beaches, e.g. Mounts Bay in Apollo Bay is off lead dawn to 10am and 6pm to dusk",
        "A few leashed walks inside the Otways: Lake Elizabeth, St George River near Lorne",
        "Beauchamp Falls in Otway Forest Park, on lead",
        "The Great Ocean Road Brewhouse beer garden"
      ],
      "no": [
        "Twelve Apostles, Loch Ard Gorge (Port Campbell National Park)",
        "Most Otway waterfalls and the Otway Fly, car park included"
      ],
      "tip": "Drive past the Apostles; walk the dog at Apollo Bay instead.",
      "src": [
        "gor",
        "apollo",
        "lorne"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "tasmania",
      "name": "Tasmania",
      "where": "Overnight from Geelong",
      "lon": 146.36,
      "lat": -41.18,
      "views": [
        "near",
        "far"
      ],
      "line": "ferry",
      "lab": [
        1.4,
        -1.2,
        "start"
      ],
      "blurb": "the big one. she sleeps in your cabin the whole way.",
      "opts": [
        {
          "mode": "ferry",
          "what": "Spirit of Tasmania, pet-friendly cabin",
          "hrs": 11,
          "cost": 275,
          "costText": "from $275",
          "note": "Dog sails free; you pay for the whole cabin. Only 18 per ship, book early."
        },
        {
          "mode": "fly",
          "what": "Pawmobile, dog-only flight",
          "hrs": 1.5,
          "cost": null,
          "costText": "quote",
          "note": "Saturdays from Essendon. The dog flies with a handler; you go separately."
        }
      ],
      "yes": [
        "Bay of Fires Conservation Area, on lead (some beaches, campgrounds, tracks)",
        "Coles Bay Conservation Area, right next to Freycinet",
        "Port Arthur Historic Site grounds, on lead",
        "Bridestowe Lavender Estate fields, on lead",
        "The Springs tracks on kunanyi / Mt Wellington, on lead"
      ],
      "no": [
        "Cradle Mountain, Freycinet, and every other national park",
        "Cataract Gorge Reserve in Launceston (take the dog-friendly river cruise instead)"
      ],
      "tip": "Worm her with praziquantel within 14 days before you land, and keep the proof.",
      "src": [
        "sotRules",
        "pwsDogs",
        "ract",
        "tnTas",
        "biosec",
        "pawmobile"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "kingisland",
      "name": "King & Flinders Islands",
      "where": "Bass Strait · by small plane",
      "lon": 143.93,
      "lat": -39.88,
      "views": [
        "near"
      ],
      "line": "fly",
      "lab": [
        -1.2,
        0.6,
        "end"
      ],
      "blurb": "tiny planes from Essendon. she rides in the back.",
      "opts": [
        {
          "mode": "fly",
          "what": "Sharp Airlines from Essendon, in the hold",
          "big": "maybe",
          "hrs": 2.5,
          "cost": 74,
          "costText": "$74–$130",
          "note": "$74 under 10 kg, $130 for 11–30 kg."
        }
      ],
      "yes": [
        "Sharp Airlines carries pets on its Essendon routes"
      ],
      "no": [
        "National parks, as everywhere in Tasmania"
      ],
      "tip": "Animal plus crate max 40 kg and freight items max 75 × 45 × 50 cm, so a big dog may not fit. Ask before booking.",
      "src": [
        "sharp"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "adelaide",
      "name": "Adelaide",
      "where": "South Australia",
      "lon": 138.6,
      "lat": -34.93,
      "views": [
        "far"
      ],
      "line": "drive",
      "lab": [
        -8,
        -6,
        "end"
      ],
      "blurb": "small dogs can fly with you. big dogs: road trip.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 8,
          "cost": 0,
          "costText": "$0"
        },
        {
          "mode": "fly",
          "what": "Virgin Pets in Cabin",
          "big": false,
          "hrs": 1.5,
          "cost": 149,
          "costText": "$149",
          "note": "Book by phone, 72+ hours ahead."
        },
        {
          "mode": "fly",
          "what": "Pet-transport company, in the hold",
          "hrs": 5,
          "cost": 450,
          "costText": "$450–$800"
        }
      ],
      "yes": [
        "Any size dog by car",
        "Small dogs in the cabin on Virgin"
      ],
      "no": [
        "Dogs over 8 kg (with carrier) in the cabin"
      ],
      "tip": "Keep going to Kangaroo Island: pets ride that ferry free.",
      "src": [
        "virgin",
        "dogmovers"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "kangaroo",
      "name": "Kangaroo Island",
      "where": "South Australia · via Cape Jervis",
      "lon": 137.3,
      "lat": -35.82,
      "views": [
        "far"
      ],
      "line": "ferry",
      "lab": [
        -8,
        14,
        "end"
      ],
      "blurb": "pets ride free. the koalas are off limits though.",
      "opts": [
        {
          "mode": "ferry",
          "what": "Drive to Cape Jervis + SeaLink ferry",
          "hrs": 10.5,
          "cost": 0,
          "costText": "free",
          "note": "Dog is free; you still pay for the car and people."
        }
      ],
      "yes": [
        "The SeaLink ferry, free (tell check-in)",
        "Most of the island outside the parks"
      ],
      "no": [
        "Seal Bay, Flinders Chase, and every national or conservation park, car parks included"
      ],
      "tip": "Dogs no longer need to be registered with the council before visiting (cats still do).",
      "src": [
        "kiPets",
        "kiFaq"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "sydney",
      "name": "Sydney",
      "where": "New South Wales",
      "lon": 151.2,
      "lat": -33.87,
      "views": [
        "far"
      ],
      "line": "drive",
      "lab": [
        8,
        4,
        "start"
      ],
      "blurb": "a long day in the car, or a short one in a crate.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive the Hume",
          "hrs": 9,
          "cost": 0,
          "costText": "$0"
        },
        {
          "mode": "fly",
          "what": "Pet-transport company, in the hold",
          "hrs": 5,
          "cost": 400,
          "costText": "$400–$700",
          "note": "Booking Qantas Freight yourself is usually cheaper."
        }
      ],
      "yes": [
        "Any size dog by car or freight"
      ],
      "no": [
        "NSW trains and TrainLink coaches don’t take pet dogs"
      ],
      "tip": "Qantas won’t fly pets when it’s above 35°C or below 5°C. Free rebooking if that happens.",
      "src": [
        "dogmovers",
        "qf"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "goldcoast",
      "name": "Gold & Sunshine Coasts",
      "where": "Queensland",
      "lon": 153.3,
      "lat": -27.6,
      "views": [
        "far"
      ],
      "line": "fly",
      "lab": [
        8,
        4,
        "start"
      ],
      "blurb": "where pets-in-cabin started. small dogs only.",
      "opts": [
        {
          "mode": "fly",
          "what": "Virgin Pets in Cabin",
          "big": false,
          "hrs": 2.5,
          "cost": 149,
          "costText": "$149",
          "note": "One pet per person."
        },
        {
          "mode": "fly",
          "what": "Pet-transport company to Brisbane",
          "hrs": 6,
          "cost": 400,
          "costText": "$400–$900"
        },
        {
          "mode": "drive",
          "what": "Drive",
          "hrs": 20,
          "cost": 0,
          "costText": "$0",
          "note": ""
        }
      ],
      "yes": [
        "Small dogs in the cabin with you",
        "Bigger dogs by freight or car"
      ],
      "no": [
        "Big dogs in the cabin"
      ],
      "src": [
        "virgin",
        "dogmovers"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "magnetic",
      "name": "Magnetic Island",
      "where": "Queensland · off Townsville",
      "lon": 146.83,
      "lat": -19.15,
      "views": [
        "far"
      ],
      "line": "fly",
      "lab": [
        8,
        4,
        "start"
      ],
      "blurb": "a tropical island that actually lets dogs on.",
      "opts": [
        {
          "mode": "fly",
          "what": "Pet-transport company to Townsville, then ferry",
          "hrs": 7,
          "cost": 800,
          "costText": "$800–$1,300",
          "note": "Ferry is free; muzzle needed on the passenger ferry."
        }
      ],
      "yes": [
        "Most of the island and most beaches, e.g. Geoffrey Bay on lead"
      ],
      "no": [
        "The national park (including the Forts Walk)",
        "Alma Bay and other signed beaches"
      ],
      "tip": "SeaLink sells soft muzzles in the terminal if you forget.",
      "src": [
        "maggie",
        "maggiePolicy",
        "dogmovers"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "cairns",
      "name": "Cairns",
      "where": "Far North Queensland",
      "lon": 145.77,
      "lat": -16.92,
      "views": [
        "far"
      ],
      "line": "fly",
      "lab": [
        -8,
        -4,
        "end"
      ],
      "blurb": "small dogs can fly up in the cabin.",
      "opts": [
        {
          "mode": "fly",
          "what": "Virgin Pets in Cabin",
          "big": false,
          "hrs": 3.5,
          "cost": 149,
          "costText": "$149",
          "note": ""
        }
      ],
      "yes": [
        "Small dogs in the cabin"
      ],
      "no": [
        "Big dogs in the cabin: use a pet-transport company (get a quote)"
      ],
      "src": [
        "virgin",
        "qf"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "perth",
      "name": "Perth",
      "where": "Western Australia",
      "lon": 115.86,
      "lat": -31.95,
      "views": [
        "far"
      ],
      "line": "drive",
      "lab": [
        8,
        -6,
        "start"
      ],
      "blurb": "cross the Nullarbor together, or send her ahead.",
      "opts": [
        {
          "mode": "drive",
          "what": "Drive the Nullarbor",
          "hrs": 36,
          "cost": 0,
          "costText": "$0",
          "note": "About 3,400 km. Patchy phone reception."
        },
        {
          "mode": "fly",
          "what": "Pet-transport company, in the hold",
          "hrs": 8,
          "cost": 800,
          "costText": "$800–$1,800"
        }
      ],
      "yes": [
        "Roadhouse stops along the Nullarbor",
        "Any size dog by car or freight"
      ],
      "no": [
        "Leaving her in a parked car, even for a moment"
      ],
      "tip": "Keep her on lead at stops: baits are laid in parts of the outback.",
      "src": [
        "nullarbor",
        "dogmovers"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "darwin",
      "name": "Darwin",
      "where": "Northern Territory",
      "lon": 130.84,
      "lat": -12.46,
      "views": [
        "far"
      ],
      "line": "fly",
      "lab": [
        8,
        4,
        "start"
      ],
      "blurb": "possible. expensive. hot.",
      "opts": [
        {
          "mode": "fly",
          "what": "Pet-transport company, in the hold",
          "hrs": 9,
          "cost": 1500,
          "costText": "$1,500–$3,500",
          "note": "Quotes vary a lot."
        }
      ],
      "yes": [
        "Freight via a pet-transport company"
      ],
      "no": [
        "Flying in very hot weather: airlines won’t carry pets above 35°C"
      ],
      "src": [
        "dogmovers",
        "qf"
      ],
      "last_verified": "2026-11-22"
    },
    {
      "id": "nz",
      "name": "New Zealand",
      "where": "Overseas · no quarantine",
      "lon": 174.78,
      "lat": -41.29,
      "views": [
        "far"
      ],
      "line": "fly",
      "lab": [
        -8,
        16,
        "end"
      ],
      "blurb": "the only overseas trip with no quarantine either way.",
      "opts": [
        {
          "mode": "fly",
          "what": "Pet-transport company, as cargo",
          "hrs": 6,
          "cost": 2000,
          "costText": "~$2,000–$3,000",
          "note": "Transport only, before vet costs."
        }
      ],
      "yes": [
        "No import permit from Australia if NZ’s health standard is met",
        "No quarantine coming home either"
      ],
      "no": [
        "Cabin travel: dogs fly as manifested cargo",
        "A short holiday: allow about a month of vet prep"
      ],
      "tip": "Lodge the export notice at least 10 days before you fly.",
      "src": [
        "nz",
        "mpi"
      ],
      "last_verified": "2026-11-22"
    }
  ]
};
