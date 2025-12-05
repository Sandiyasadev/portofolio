---
title: "Email to Slack Notification"
category: "Communication"
complexity: "Beginner"
description: "Forward important emails to a Slack channel with smart filtering and formatting."
tools: ["n8n", "Gmail", "Slack"]
thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
---

# Email to Slack Notification

Forward important emails to Slack automatically with smart filtering.

## Use Cases

- Get notified about client emails in a dedicated channel
- Alert the team when support tickets arrive
- Forward invoices to the finance channel

## How It Works

1. Gmail trigger monitors your inbox
2. Filter node checks sender/subject criteria
3. Format message for Slack readability
4. Post to the appropriate channel

## Setup Time

15-30 minutes

## Customization Options

- Multiple filter criteria (sender, subject, labels)
- Different channels for different email types
- Include/exclude attachments
- @mention specific team members for urgent emails
