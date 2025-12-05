---
title: "How to Build an AI-Powered Lead Enrichment Pipeline with n8n"
excerpt: "Step-by-step guide to building a workflow that automatically enriches leads with company data and generates AI-based qualification scores."
category: "Integration Guides"
date: "2024-11-15"
readTime: "12 min read"
featured: true
thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
---

# How to Build an AI-Powered Lead Enrichment Pipeline with n8n

In this guide, we'll build a powerful lead enrichment system that automatically enhances your leads with company data and uses AI to score them.

## What We're Building

Our workflow will:
1. Trigger when a new lead enters your CRM
2. Enrich the lead with company data from Clearbit
3. Use OpenAI to generate a qualification score
4. Update the CRM with enriched data
5. Notify sales on Slack for hot leads

## Prerequisites

- n8n instance (self-hosted or cloud)
- HubSpot account (or your CRM of choice)
- Clearbit API key
- OpenAI API key
- Slack workspace

## Step 1: Set Up the Trigger

Start with a HubSpot trigger node. Configure it to fire when a new contact is created:

```json
{
  "resource": "contact",
  "event": "create"
}
```

## Step 2: Enrich with Clearbit

Add an HTTP Request node to call Clearbit's enrichment API:

```javascript
const email = $input.first().json.properties.email;
const domain = email.split('@')[1];

return {
  url: `https://company.clearbit.com/v2/companies/find?domain=${domain}`
};
```

## Step 3: AI Qualification Scoring

Now the magic happens. Use OpenAI to analyze the enriched data:

```javascript
const prompt = `
Analyze this company data and provide a lead score from 1-100:
Company: ${$json.name}
Industry: ${$json.category.industry}
Employees: ${$json.metrics.employees}
Revenue: ${$json.metrics.estimatedAnnualRevenue}

Respond with JSON: {"score": number, "reasoning": "string"}
`;
```

## Step 4: Update CRM & Notify

Finally, update HubSpot with the enriched data and send a Slack notification for leads scoring above 80.

## Results

After implementing this workflow for a client:
- **Lead response time**: 15 min → 30 seconds
- **Sales efficiency**: 40% improvement
- **Lead quality**: 25% higher conversion rate

## Get the Template

Want the complete workflow file? [Download it here](/workflow-library) or [book a call](/contact) for custom implementation.
