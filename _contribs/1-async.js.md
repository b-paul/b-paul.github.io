---
title: Async.js
reference_url: https://github.com/caolan/async/pull/1140
---

For this popular and highly-depended-upon library, I researched, implemented, and tested a function that solved a user's problem with cyclic dependencies becoming deadlocked. I adapted a proven algorithm (Kahn's algorithm) to discover any circular references in the passed object. The community gave supportive comments and cooperation on my pull request and ultimately merged the changes.
