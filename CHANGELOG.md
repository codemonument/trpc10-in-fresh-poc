# Changelog

## 1.0.0 - 2022-10-26

First working trpc v10 integration! 

Method: 
1. Start an opine server (deno express clone) besides the fresh server
   1. Running fresh on port 8000 
   2. Running opine with trpc on port 3000 
2. Configuring the trpc client to directly use the trpc endpoint on opine (Port 3000)

## 2022-10-26-first-try-api-route-fix

Fixes the fresh route for trpc from /api/trpc to /trpc

## 2022-10-26-first-try-createExpressMiddleware

The first tag with trpc set up together with the createExpressMiddleware adapter