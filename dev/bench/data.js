window.BENCHMARK_DATA = {
  "lastUpdate": 1783471392171,
  "repoUrl": "https://github.com/Rullst/rullst-orm",
  "entries": {
    "Rullst ORM Performance Dashboard": [
      {
        "commit": {
          "author": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "committer": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "distinct": true,
          "id": "0c64e707ce5d92bb74c96e2ccae67846732450d7",
          "message": "ci: add performance benchmark workflow with automated regression tracking",
          "timestamp": "2026-07-07T02:11:42-03:00",
          "tree_id": "16a80677f5d84a962e5293eae75e26a2308380f6",
          "url": "https://github.com/Rullst/rullst-orm/commit/0c64e707ce5d92bb74c96e2ccae67846732450d7"
        },
        "date": 1783401468505,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/qualified",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/invalid",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 364,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 156,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 3868177,
            "range": "± 6167350",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 62438,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 65974,
            "range": "± 712",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 62400,
            "range": "± 937",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 69076,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 62451,
            "range": "± 770",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 69197,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 121459,
            "range": "± 2615",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 199584,
            "range": "± 2348",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "committer": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "distinct": true,
          "id": "d2c066a64e06980b2da6fddcac35f11c56de107a",
          "message": "refactor: modularize relationship query generation, abstract Postgres placeholder translation, and add database transaction integration tests.",
          "timestamp": "2026-07-07T12:51:01-03:00",
          "tree_id": "8de0c22e3fd44ee05eee15fb030ee117ad4d8f16",
          "url": "https://github.com/Rullst/rullst-orm/commit/d2c066a64e06980b2da6fddcac35f11c56de107a"
        },
        "date": 1783439852801,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/qualified",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/invalid",
            "value": 47,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 434,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 353,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 194,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1731980,
            "range": "± 159785",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 79923,
            "range": "± 1197",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 84485,
            "range": "± 1722",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 80034,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 89131,
            "range": "± 4557",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 80365,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 89125,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 158628,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 266623,
            "range": "± 5035",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "committer": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "distinct": true,
          "id": "c8ee58e368fab0bebfbc9e145e5ee6c22fe95e15",
          "message": "chore: fix fmt and optimize validate_identifier for performance",
          "timestamp": "2026-07-07T13:51:10-03:00",
          "tree_id": "d64bdfbba1a8146bb3e8bac6525cf0bbc532a69f",
          "url": "https://github.com/Rullst/rullst-orm/commit/c8ee58e368fab0bebfbc9e145e5ee6c22fe95e15"
        },
        "date": 1783443578597,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/qualified",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/invalid",
            "value": 51,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 453,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 378,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 192,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 3091330,
            "range": "± 366035",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 91758,
            "range": "± 1844",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 95471,
            "range": "± 1730",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 89066,
            "range": "± 3237",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 97586,
            "range": "± 1812",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 85994,
            "range": "± 2935",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 97692,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 144653,
            "range": "± 2247",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 234758,
            "range": "± 2761",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "committer": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "distinct": true,
          "id": "75a1511200de29b7e75dca66e7918404919cb776",
          "message": "feat: add ORM attribute parsing tests and implement secure schema validation and column definition types",
          "timestamp": "2026-07-07T19:34:59-03:00",
          "tree_id": "6b8226f1c840d6d55ee546a3191d2669fc480bf7",
          "url": "https://github.com/Rullst/rullst-orm/commit/75a1511200de29b7e75dca66e7918404919cb776"
        },
        "date": 1783464103771,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/qualified",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/invalid",
            "value": 49,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 460,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 359,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 211,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1508719,
            "range": "± 95244",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 80668,
            "range": "± 2811",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 84284,
            "range": "± 1260",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 79930,
            "range": "± 1141",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 88952,
            "range": "± 1385",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 80146,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 89808,
            "range": "± 1208",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 156489,
            "range": "± 1308",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 261166,
            "range": "± 2458",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "committer": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "distinct": true,
          "id": "f77e15b7fb2d5b904e4111504d48602a7699fad0",
          "message": "feat: implement ORM attribute parser for model metadata and soft delete configuration",
          "timestamp": "2026-07-07T21:03:59-03:00",
          "tree_id": "0290f04bac81ded7a45b74000313d0274b4eb396",
          "url": "https://github.com/Rullst/rullst-orm/commit/f77e15b7fb2d5b904e4111504d48602a7699fad0"
        },
        "date": 1783469473482,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/qualified",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/invalid",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 428,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 353,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 198,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 2100196,
            "range": "± 165030",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 100105,
            "range": "± 2168",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 104888,
            "range": "± 1783",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 99587,
            "range": "± 2041",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 107759,
            "range": "± 2077",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 99132,
            "range": "± 2074",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 107455,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 153572,
            "range": "± 1662",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 245937,
            "range": "± 2542",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "committer": {
            "email": "venelouistyago@gmail.com",
            "name": "venelouis",
            "username": "venelouis"
          },
          "distinct": true,
          "id": "fb69a0759a3d5faa174962740349102fd281bcf7",
          "message": "ci: increase benchmark alert threshold to 150%",
          "timestamp": "2026-07-07T21:35:24-03:00",
          "tree_id": "b3e6b9f94b54a91eabefc71ff1caaef353c8a24c",
          "url": "https://github.com/Rullst/rullst-orm/commit/fb69a0759a3d5faa174962740349102fd281bcf7"
        },
        "date": 1783471391913,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/qualified",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/invalid",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 454,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 349,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 196,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1570397,
            "range": "± 51925",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 79989,
            "range": "± 1040",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 84378,
            "range": "± 985",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 78960,
            "range": "± 1518",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 88822,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 79326,
            "range": "± 1516",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 89244,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 156691,
            "range": "± 1784",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 262912,
            "range": "± 4222",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}