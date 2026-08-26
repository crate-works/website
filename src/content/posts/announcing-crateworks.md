---
title: Announcing CrateWorks
description: A new home for an RO-Crate API specification and the open-source tools that speak it — under a single Minimum Viable Governance framework.
pubDate: 2026-05-11
author: CrateWorks
tags: [announcement, governance, ro-crate]
---

For years now a small group of us — at [PARADISEC](https://www.paradisec.org.au/), at the [Language Data Commons of Australia](https://www.ldaca.edu.au/), and at a handful of other research-data shops around the world — have been quietly converging on the same idea: that **research data deserves a real API**, not yet another bespoke portal duct-taped to yet another bespoke storage layout.

Today we're putting a name on that work. CrateWorks.

## What is CrateWorks?

CrateWorks is an open-source organisation that pulls together a growing constellation of tools, all built around a single shared protocol: **An RO-Crate API**. It is not a product. It is a workbench — a set of independently developed pieces that compose because they all speak the same language about research data.

The pieces fit together like this:

- [**RO-Crate**](https://www.researchobject.org/ro-crate/) is the data format. A portable, JSON-LD metadata file describes a research object and everything inside it.
- **An RO-Crate API** is an access protocol. It specifies how any repository serves its crates over HTTP — discovery, retrieval, deposit, access control.
- **Arocapi** is a reference implementation of the API: a library you mount into your own Fastify or Express app, with pluggable storage and external access control.
- And on top of all that sits a workbench of consumer tools — discovery portals, bulk-export services, offline viewers, field-capture appliances, audio annotators — each one written against the protocol, not against any one repository.

If you've ever wanted to swap out your archive's discovery portal without rewriting the rest of your stack, or wanted to point an offline viewer at someone else's collection without writing an integration, this is the foundation that lets you do it.

## On the bench today

[Seven tools](/#workbench) live under the CrateWorks umbrella as of this announcement:

- **Arocapi** — reference implementation of the API.
- **Oni** — a configuration-driven discovery portal.
- **Collection Downloader** — bulk-export via email.
- **Cockatiel** — a local-first audio annotator that never sends your files to a server.
- **RaspboCrate** — a self-contained field-catalogue appliance on a Raspberry Pi.
- **Bowerbird** — browse an archive by double-clicking `index.html`.
- **Crate-O** (Alpha) - Edit RO-Crates using Machine Actionable Schemas and profiles
- **An RO-Crate API specification** itself, evolving in the open.

Each one solves a real problem that's come up in real research projects. None of them was built as a hypothetical: they exist because someone needed them, and because the API made it tractable to build them without committing to a particular backend.

## Why now, and why governed?

The technical pieces have been quietly compounding for a while. What was missing was an explicit home for them — a place where decisions about the API, and the relationship between the projects could be made openly, by the people doing the work.

CrateWorks adopts the [Minimum Viable Governance](/governance) framework: a small set of public documents — a charter, a code of conduct, a steering committee, a per-project governance policy — that every project agrees to follow. 


If you want to know who's responsible for what, or how to bring a new project in, [the documents are right there](/governance) .

## What's next

In the coming months we'll be:

- Cutting the first tagged release of **An RO-Crate API** specification.
- Migrating the existing tool repositories under the `crate-works` GitHub organisation.
- Standing up `<tool>.crate-works.org` subdomains for each project so they have their own homes.
- Publishing the next post here — on the API design choices we've made and why.

If your work touches research data and you've been waiting for something like this, we'd love to hear from you. Watch the [GitHub organisation](https://github.com/crate-works), subscribe to the [RSS feed](/rss.xml), or open an issue against the [API spec](https://github.com/crate-works/ro-crate-api).

