window.BENCHMARK_DATA = {
  "lastUpdate": 1784231003715,
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
      }
    ]
  }
}