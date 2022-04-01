> ⚠️ **Warning:** Not complete, a lot of grammatical error. This is where I am trying to build my second brain.


#### Table of content

- [Learn about graphql](#graphQL)
- [Learn about react/nextjs](#react)
- [Learn about apollo graphql client](#graphql)
- [Learn about how to consuming graphql api](#graphql)


# graphQL
### What is graphql and why do we need it if you already have REST?
+ Saving bandwidth and reducing HTTP waterfall request
+ reducing no of request.
+ no more version APIs
+  smaller payload
+ faster in low bandwith network
+  no over fetching
+ no more multiple request for multiple resources
+ no more waterfall network request on nested data each client now doens't need to know the location of each service


how to use grapql with react?
 import appollo client & inmemorycache from the graphql node modules

what's the great about graphql is, if we query once it's going to memonize it so if we query same data again it is going to hit the cache, data will be served from the cache reducing load to server
