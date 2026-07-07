window.BENCHMARK_DATA = {
  "lastUpdate": 1783439853100,
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
      }
    ]
  }
}