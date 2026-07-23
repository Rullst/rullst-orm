window.BENCHMARK_DATA = {
  "lastUpdate": 1784781243303,
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
          "id": "1d3c52159453449b4b024ccc8bcb5aab3574316b",
          "message": "feat: initialize website project structure and install development dependencies",
          "timestamp": "2026-07-16T16:22:27-03:00",
          "tree_id": "19daa6ad1df3507df0276a59dbd5889227ae6aad",
          "url": "https://github.com/Rullst/rullst-orm/commit/1d3c52159453449b4b024ccc8bcb5aab3574316b"
        },
        "date": 1784230122061,
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
            "value": 49,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 451,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 365,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 206,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 2095813,
            "range": "± 98416",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 102111,
            "range": "± 1716",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 107360,
            "range": "± 2052",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 100480,
            "range": "± 2537",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 110212,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 100317,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 110108,
            "range": "± 1731",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 157974,
            "range": "± 1813",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 257725,
            "range": "± 2476",
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
          "id": "64c9a2b5a135dd04dfdb3d0cdfe6c93c6779667b",
          "message": "feat: Add incredible new website and docs",
          "timestamp": "2026-07-16T16:37:09-03:00",
          "tree_id": "8aa4af892b77dc0c8372d929ca91b5b0b61b9397",
          "url": "https://github.com/Rullst/rullst-orm/commit/64c9a2b5a135dd04dfdb3d0cdfe6c93c6779667b"
        },
        "date": 1784231003354,
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
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 460,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 354,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 210,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1523190,
            "range": "± 85797",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 76420,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 80591,
            "range": "± 1229",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 77714,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 85879,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 78227,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 87402,
            "range": "± 906",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 154054,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 257704,
            "range": "± 2063",
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
          "id": "1f1e123deeb347d604fffe3af1b1af2362c457f3",
          "message": "chore: fix OSSF Scorecard code scanning alerts",
          "timestamp": "2026-07-16T16:46:16-03:00",
          "tree_id": "7ac6c3ff06d5aaff2f4d9703a5634bbfa8ae5833",
          "url": "https://github.com/Rullst/rullst-orm/commit/1f1e123deeb347d604fffe3af1b1af2362c457f3"
        },
        "date": 1784231552315,
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 456,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 350,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 211,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1517288,
            "range": "± 46818",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 78927,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 84479,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 80220,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 88997,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 79359,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 89248,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 155986,
            "range": "± 2879",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 260187,
            "range": "± 2640",
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
          "id": "ed33ccedd614d7ecc811769be773ad72a7592c2b",
          "message": "feat: initialize project website with documentation, benchmark pages, and styled landing page",
          "timestamp": "2026-07-16T17:02:03-03:00",
          "tree_id": "b5d72091b05b0e1bdb06992a7eaf3e58a5cfd386",
          "url": "https://github.com/Rullst/rullst-orm/commit/ed33ccedd614d7ecc811769be773ad72a7592c2b"
        },
        "date": 1784232497876,
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
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 419,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 323,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 179,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1695430,
            "range": "± 87694",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 63091,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 70101,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 61937,
            "range": "± 1293",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 72358,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 63562,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 73466,
            "range": "± 1446",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 141363,
            "range": "± 2795",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 255658,
            "range": "± 4419",
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
          "id": "78c78de7357a2e392a419ab9b0b797fa7560725d",
          "message": "fix: add docs and benchmarks to Vite build entry points",
          "timestamp": "2026-07-16T17:32:38-03:00",
          "tree_id": "171e443d47b88c55c2279c14e416ed04a35ecf99",
          "url": "https://github.com/Rullst/rullst-orm/commit/78c78de7357a2e392a419ab9b0b797fa7560725d"
        },
        "date": 1784234336502,
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
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 424,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 351,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 221,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1546893,
            "range": "± 180681",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 79654,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 83973,
            "range": "± 2077",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 79704,
            "range": "± 6370",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 88001,
            "range": "± 5336",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 80261,
            "range": "± 2795",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 88669,
            "range": "± 3290",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 156520,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 261222,
            "range": "± 3544",
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
          "id": "62f2a8f2b1047b17c05d76b0fcdd363b9f713918",
          "message": "fix: resolve absolute paths in docs.js and use npm ci for Scorecard",
          "timestamp": "2026-07-16T17:50:56-03:00",
          "tree_id": "b0f3b298a8288538556f054995aab0669f8e0266",
          "url": "https://github.com/Rullst/rullst-orm/commit/62f2a8f2b1047b17c05d76b0fcdd363b9f713918"
        },
        "date": 1784235377843,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/qualified",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/validate_identifier/invalid",
            "value": 28,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 299,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 216,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 133,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 2853909,
            "range": "± 35319149",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 61794,
            "range": "± 1467",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 64508,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 61857,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 69583,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 63218,
            "range": "± 1434",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 70825,
            "range": "± 1498",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 126427,
            "range": "± 4717",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 213170,
            "range": "± 12079",
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
          "id": "75fc3c82688a927b0d4ceb49cfb3d047ff10bb64",
          "message": "fix: update marked.js renderer API to support v18 token objects",
          "timestamp": "2026-07-16T18:20:55-03:00",
          "tree_id": "a69e83f4a52aceb0a42af8c070ac83e7f566e887",
          "url": "https://github.com/Rullst/rullst-orm/commit/75fc3c82688a927b0d4ceb49cfb3d047ff10bb64"
        },
        "date": 1784237238579,
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
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 426,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 362,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 196,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1541666,
            "range": "± 103186",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 78820,
            "range": "± 2968",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 83034,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 77753,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 87615,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 78255,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 87950,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 154215,
            "range": "± 1628",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 257686,
            "range": "± 3480",
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
          "id": "5469c0b4a3b9596f328c1c910cb8838c8986907b",
          "message": "chore(release): bump version to 6.0.3 and update CHANGELOG",
          "timestamp": "2026-07-16T18:32:39-03:00",
          "tree_id": "7333c037cce8fc949e59301fb712b17409eaa098",
          "url": "https://github.com/Rullst/rullst-orm/commit/5469c0b4a3b9596f328c1c910cb8838c8986907b"
        },
        "date": 1784237926923,
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
            "value": 457,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 357,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 209,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1539656,
            "range": "± 53322",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 76035,
            "range": "± 1215",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 80165,
            "range": "± 4355",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 76680,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 85577,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 76723,
            "range": "± 1023",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 85246,
            "range": "± 1700",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 153563,
            "range": "± 1464",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 256590,
            "range": "± 2822",
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
          "id": "f3759e0ae378c4384a356defb51d9687995d9493",
          "message": "feat: add compile-time GDPR/LGPD compliance with SecretString encryption, log masking, and PersonalData derive macro.",
          "timestamp": "2026-07-22T03:08:18-03:00",
          "tree_id": "f429cef9bd9c59f4598b4c5c4b1f93eaa0dbbf04",
          "url": "https://github.com/Rullst/rullst-orm/commit/f3759e0ae378c4384a356defb51d9687995d9493"
        },
        "date": 1784700869034,
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
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 455,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 338,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 195,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 2132614,
            "range": "± 194449",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 92311,
            "range": "± 2224",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 96410,
            "range": "± 1875",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 91633,
            "range": "± 4585",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 99028,
            "range": "± 3008",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 85158,
            "range": "± 3247",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 98536,
            "range": "± 2458",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 143219,
            "range": "± 1886",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 237505,
            "range": "± 5855",
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
          "id": "2c6f1d5ba68f2e6d163ebb346bc8c6d479100228",
          "message": "feat: implement PersonalData derive macro for field-level privacy masking",
          "timestamp": "2026-07-22T20:28:58-03:00",
          "tree_id": "0787264a15f118f7c341f161fe232fa5aafd9807",
          "url": "https://github.com/Rullst/rullst-orm/commit/2c6f1d5ba68f2e6d163ebb346bc8c6d479100228"
        },
        "date": 1784763325478,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 8,
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 438,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 303,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 196,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 2646673,
            "range": "± 791937",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 68368,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 71426,
            "range": "± 1038",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 67275,
            "range": "± 1421",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 78244,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 69724,
            "range": "± 1588",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 80062,
            "range": "± 1754",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 161087,
            "range": "± 4429",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 289707,
            "range": "± 8486",
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
          "id": "b4652e7a27fa3411aeae53071872100a59bd7533",
          "message": "ok",
          "timestamp": "2026-07-23T00:06:10-03:00",
          "tree_id": "93037bb28d7a42ea5a78542c21ea98bc3a6151b8",
          "url": "https://github.com/Rullst/rullst-orm/commit/b4652e7a27fa3411aeae53071872100a59bd7533"
        },
        "date": 1784776374329,
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
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 456,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 351,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 201,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1925999,
            "range": "± 136218",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 91178,
            "range": "± 1570",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 95381,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 89704,
            "range": "± 3436",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 95907,
            "range": "± 3462",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 82560,
            "range": "± 2889",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 95996,
            "range": "± 3097",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 143940,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 235917,
            "range": "± 4475",
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
          "id": "95a026457b11800aa9284659a1c488e3daecb7a9",
          "message": "feat: add PersonalData derive macro for compliance reporting and sensitive field redaction",
          "timestamp": "2026-07-23T00:16:34-03:00",
          "tree_id": "41fda182e0866ba55c7b8f98bcf836d844d30efb",
          "url": "https://github.com/Rullst/rullst-orm/commit/95a026457b11800aa9284659a1c488e3daecb7a9"
        },
        "date": 1784776967413,
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
            "value": 46,
            "range": "± 0",
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
            "value": 352,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 201,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 2007898,
            "range": "± 58447",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 101077,
            "range": "± 2027",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 104287,
            "range": "± 2786",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 100287,
            "range": "± 2124",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 108685,
            "range": "± 3277",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 99117,
            "range": "± 2666",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 107635,
            "range": "± 1821",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 153483,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 248683,
            "range": "± 3316",
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
          "id": "33aa1464bb5b0cbd0d4cdc7f80e209a7c08e439a",
          "message": "feat: implement AES-GCM field-level encryption, audit-safe debugging, and database integration traits",
          "timestamp": "2026-07-23T01:02:14-03:00",
          "tree_id": "2aa39bbada21f1d6b1d8b8bf6107e97cd0371ed2",
          "url": "https://github.com/Rullst/rullst-orm/commit/33aa1464bb5b0cbd0d4cdc7f80e209a7c08e439a"
        },
        "date": 1784779660279,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 7,
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
            "value": 38,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 370,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 256,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 166,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 2217762,
            "range": "± 669490",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 60880,
            "range": "± 1143",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 62992,
            "range": "± 1306",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 59894,
            "range": "± 1681",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 68975,
            "range": "± 1307",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 61586,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 69922,
            "range": "± 1298",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 139873,
            "range": "± 6418",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 255994,
            "range": "± 10428",
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
          "id": "018b711a26656af720f0fa962082d7fb4a8c6de1",
          "message": "feat: add SecretString type with AES-GCM encryption and SQLx trait support",
          "timestamp": "2026-07-23T01:17:45-03:00",
          "tree_id": "5bff2d01a825c9f121cd6e2b5ea0a8a67ebf09b9",
          "url": "https://github.com/Rullst/rullst-orm/commit/018b711a26656af720f0fa962082d7fb4a8c6de1"
        },
        "date": 1784780627772,
        "tool": "cargo",
        "benches": [
          {
            "name": "cpu/validate_identifier/short",
            "value": 13,
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 448,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 367,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 196,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1579892,
            "range": "± 102638",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 78049,
            "range": "± 1277",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 81748,
            "range": "± 1170",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 77981,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 86141,
            "range": "± 1254",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 77616,
            "range": "± 4615",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 87152,
            "range": "± 1268",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 154407,
            "range": "± 1334",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 261522,
            "range": "± 4467",
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
          "id": "c8ad726435c7dfdf7ecded702f041423b2b8841f",
          "message": "feat: implement SecretString type with AES-GCM encryption and SQLx integration for field-level privacy",
          "timestamp": "2026-07-23T01:28:01-03:00",
          "tree_id": "2fafd18f7379924d3c35cf3805e8c186eeeb6b71",
          "url": "https://github.com/Rullst/rullst-orm/commit/c8ad726435c7dfdf7ecded702f041423b2b8841f"
        },
        "date": 1784781242974,
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
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/to_json/user",
            "value": 451,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/from_json/user",
            "value": 346,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cpu/query_builder/build",
            "value": 202,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/save/insert",
            "value": 1863476,
            "range": "± 267325",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/find_by_id",
            "value": 95718,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/where_eq_first",
            "value": 100633,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/count",
            "value": 94803,
            "range": "± 2444",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/all_limit_10",
            "value": 102923,
            "range": "± 2289",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/1",
            "value": 93203,
            "range": "± 3115",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/10",
            "value": 103330,
            "range": "± 1669",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/50",
            "value": 151700,
            "range": "± 2212",
            "unit": "ns/iter"
          },
          {
            "name": "db_roundtrip/query/limit_n/100",
            "value": 243615,
            "range": "± 2758",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}