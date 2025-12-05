---
title: "New Lead to CRM Pipeline"
category: "Sales"
complexity: "Intermediate"
description: "Capture leads from multiple sources and create enriched CRM records with automated follow-up sequences."
tools: ["n8n", "HubSpot", "Typeform", "Clearbit", "Slack"]
thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
---

# New Lead to CRM Pipeline

Automatically capture, enrich, and route leads from multiple sources.

## Use Cases

- Capture leads from website forms
- Enrich with company data before CRM entry
- Notify sales reps instantly
- Start automated nurture sequences

## How It Works

1. Typeform/website form submission triggers the workflow
2. Clearbit enriches the lead with company data
3. HubSpot contact is created with all enriched data
4. Lead is scored based on company size/industry
5. Sales rep is notified on Slack
6. Follow-up sequence is triggered

## Setup Time

1-2 hours

## Features

- Multi-source lead capture (forms, LinkedIn, email)
- Automatic data enrichment
- Smart lead scoring
- Round-robin or rules-based assignment
- Duplicate detection
