---
title: Bowerbird — an archive that browses itself
description: The Static RO-Crate Viewer has a new name, a new home under crate-works, and a growing case for why a viewer that needs no server is worth building.
pubDate: 2026-08-26
author: CrateWorks
tags: [release, tools, ro-crate, preservation]
---

There is a moment in the life of most research collections that nobody plans for. The grant ends. The project server is decommissioned. The catalogue that made the collection navigable was a web application, and the web application needed a database, and the database needed a machine, and the machine is gone. What survives is a directory of files on a disk somewhere — intact, still valuable, and effectively unreadable, because nothing is left that knows how the pieces relate.

[**Bowerbird**](https://bowerbird.crate-works.org) is our answer to that moment. It is a viewer for [RO-Crate](https://www.researchobject.org/ro-crate/) archives that you open by double-clicking `index.html`. No server, no install, no network. The archive browses itself.

## The new name

Bowerbird is not a new tool. It is what the **Static RO-Crate Viewer** is now called, and it has moved from `paradisec-archive` to the [`crate-works` organisation](https://github.com/crate-works/bowerbird) along with the rest of the workbench. That was one of the things we [said we'd do](/blog/announcing-crateworks) when CrateWorks was announced, and it is now done.

The old name described the implementation. The new one describes the behaviour: a bowerbird gathers scattered things and arranges them so their order is obvious to anyone who walks past. That is the whole job.

## What it does

Point it at a directory of crates and you get three levels — **collections, items, files** — derived from the crates themselves rather than from any imposed folder layout. A collection is a `RepositoryCollection`, an item is a `RepositoryObject`, and an item's files come from its `hasPart`. Identifiers come out of the crate where it states them.

On top of that:

- **Inline playback** for audio and video in any format your browser can decode, and an image viewer for JPEG and PNG.
- **ELAN transcripts.** An `.eaf` renders beneath the recording it annotates — as a table, or as an ELAN-like timeline — scrolling with playback, and seeking the media when you click a line.
- **Full-text search** across items, collections, languages, and filenames.
- **Rich metadata** from the crate's `rootDataset`, with linked entities resolved rather than shown as bare identifiers.

Working out which recording an `.eaf` belongs to is the kind of small problem that turns out not to be small. Bowerbird follows the crate's `hasAnnotation` and `annotationOf` links where they exist, and falls back to matching filename stems — `file1.eaf` to `file1.mp3` — for older crates that carry none. Where a recording has several renditions, the transcript attaches to one: video first, then MP3, then any other audio.

## The constraint that shapes everything

Running over `file://` means `fetch()` is blocked. A viewer cannot load its own catalogue at runtime, cannot read a metadata file on demand, cannot parse XML in the browser. Every question the interface will ever ask has to be answered before the page is opened.

So the generator does the work up front. It walks the data directory for every `ro-crate-metadata.json` it can find, parses the crates and the ELAN files, and writes three plain scripts the page loads directly: the browse and search index, the full metadata for item pages, and the parsed transcripts keyed to the files they render beneath. The browser never sees a crate or an `.eaf` — only the resolved result.

This is a real constraint and it does cost you things. It also buys the property that matters most here: there is no runtime. Nothing to keep patched, nothing to keep running, nothing that stops working when someone forgets to renew a certificate. A copy of the output on a USB stick, a DVD, or a repatriated hard drive works in ten years for the same reason it works today.

## Crates in, not conventions in

Because Bowerbird reads the crates rather than the directory structure, it handles the two shapes that show up in practice without configuration. A crate per item, which is what the PARADISEC catalogue exports. And a single crate describing a whole collection, which is what tools like [lameta](https://github.com/onset/lameta) export. Either way you get the same three levels.

Files an export tool adds to describe itself — lameta's `.sprj` and `.session` files, its `People/` and `Sessions/` grouping datasets — are used to find the content and then kept out of the display. Nobody browsing a collection wants to see the scaffolding.

## Try it

If you have a directory of RO-Crate files, the installer downloads a pre-built release and generates the viewer over it:

```bash
curl -fsSL https://github.com/crate-works/bowerbird/releases/latest/download/install.sh | bash
```

You need `bash`, `curl`, `tar`, and Node 20 or newer — to *build* the viewer. Reading it afterwards needs nothing but a browser.

The code is [on GitHub](https://github.com/crate-works/bowerbird) under MIT, and issues and pull requests are welcome.
