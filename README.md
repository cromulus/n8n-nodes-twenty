# n8n-nodes-twenty

This is an n8n community node. It lets you use **Twenty CRM** in your n8n workflows.

[Twenty CRM](https://twenty.com/) is an open-source CRM (customer relationship management) tool that is under rapid development. Please consider this as a **Beta** release that is likely to break with future changes in the Twenty API.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[AI Tool Integration](#ai-tool-integration)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Development and Testing](#development-and-testing)  
[Resources](#resources)  
[Credit](#credit)  
[Version history](#version-history)  

## Installation

### Standard Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Installing from GitHub Packages

This package is also available as `@cromulus/n8n-nodes-twenty` from GitHub Packages:

1. Create a `.npmrc` file with GitHub authentication:

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
@cromulus:registry=https://npm.pkg.github.com
```

2. Install the package:

```bash
npm install -g @cromulus/n8n-nodes-twenty
```

Replace `YOUR_GITHUB_TOKEN` with a GitHub Personal Access Token that has the `read:packages` permission.

3. In n8n, the custom nodes will be available for use with all AI agent nodes.

## Operations

	- General
	- ApiKey
	- Attachment
	- AuditLog
	- Blocklist
	- CalendarChannel
	- CalendarChannelEventAssociation
	- CalendarEvent
	- CalendarEventParticipant
	- Company
	- ConnectedAccount
	- Favorite
	- FavoriteFolder
	- Message
	- MessageChannel
	- MessageChannelMessageAssociation
	- MessageParticipant
	- MessageThread
	- Note
	- NoteTarget
	- Opportunity
	- Person
	- Task
	- TaskTarget
	- TimelineActivity
	- View
	- ViewField
	- ViewFilter
	- ViewFilterGroup
	- ViewGroup
	- ViewSort
	- Webhook
	- Workflow
	- WorkflowEventListener
	- WorkflowRun
	- WorkflowVersion
	- WorkspaceMember

## AI Tool Integration

The Twenty node can now be used as a tool in AI workflows, enabling n8n's AI nodes (including ChatGPT, Claude, and other agent-based systems) to leverage Twenty CRM capabilities. This is implemented through the new **Twenty AI Tool** node.

### Features

- **Get Tool Description**: Generates a standardized tool description that can be consumed by AI systems, including:
  - All available resources in Twenty CRM (30+ resource types)
  - Operations for each resource
  - Detailed parameter specifications

- **Execute Tool**: Allows AI agents to directly execute Twenty CRM operations by specifying:
  - Target resource (e.g., Person, Company, Task, Note, Calendar, etc.)
  - Target operation (e.g., findOnePerson, createOneCompany, updateOneTask)
  - Parameters as a JSON object
  - Query parameters as a JSON object

### Supported Resources

The Twenty AI Tool supports all resources available in the Twenty CRM API:

- Person, Company, Task, Note, Opportunity
- Message, MessageThread, MessageChannel
- CalendarEvent, CalendarChannel
- Attachment, Favorite, FavoriteFolder
- View, ViewField, ViewFilter, ViewSort
- Webhook, Workflow, WorkflowRun
- And many more...

### Usage with n8n AI Nodes

1. Create a new workflow in n8n
2. Add an AI node (like ChatGPT or Claude)
3. Add the "Twenty AI Tool" node and set its operation to "Get Tool Description"
4. Set which operations to include and the detail level (basic or detailed)
5. Connect the Twenty AI Tool node to the AI node's "Tools" input
6. Add another "Twenty AI Tool" node set to "Execute Tool" operation
7. Connect this node to the AI node's "Tool Execution" output

### Example Workflow Setup

```
[HTTP Trigger] → [AI Node (ChatGPT/Claude)] → [Output]
                  ↑                      ↓
[Twenty AI Tool]  →                     → [Twenty AI Tool]
(Get Description)                         (Execute Tool)
```

With this setup, you can now prompt the AI to perform CRM operations like:
- "Find all people with Gmail email addresses"
- "Create a new company called Acme Inc"
- "Update the task with ID xyz to mark it as completed"
- "Find recent notes about customer onboarding"
- "List all calendar events for next week"
- "Show me all message threads with a specific customer"
- "Create a new webhook for opportunity updates"

The AI will understand these requests, translate them into the appropriate Twenty CRM operations, and execute them through the tool integration.

This allows for natural language interaction with your CRM data, enabling more intuitive access and manipulation of your customer information through AI-powered interfaces.

## Credentials

Generate an API key in Twenty by following the [Twenty docs](https://twenty.com/user-guide/section/functions/api-webhooks). In summary, create an API key in the Settings -> Developers section.

Copy the API key. Click 'Add Credential' in n8n and search for 'Twenty API'. Provide the API key and your Twenty domain (e.g. http://localhost:5020, https://n8n.example.org). Do _not_ use the 'API Base URL', e.g. https://n8n.example.org/rest/.

## Compatibility

Compatible and tested with Twenty v0.40.7 and n8n v1.9.3.

## Development and Testing

### Setup

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Build the project with `pnpm build`

### Running Tests

The project includes Jest tests to verify functionality:

```bash
# Run all tests
pnpm test

# Run tests with watch mode for development
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

Test files are located in the `__tests__` directory and follow the same structure as the source files.

### Other Commands

- `pnpm dev` - Watch for changes and rebuild automatically
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Run ESLint
- `pnpm lintfix` - Run ESLint with automatic fixes

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Twenty developer documentation](https://twenty.com/developers/)

## Version history

#### v0.1.0
Added AI Tool integration to use Twenty CRM with AI agents as a tool

#### v0.0.4
Compatible with Twenty's updated API in v0.40.7

#### v0.0.3
Compatible with Twenty's updated API in v0.33.4

#### v0.0.1
Initial release

## Credit

Special thanks to [ivov](https://github.com/ivov) and [feelgood-interface](https://github.com/feelgood-interface) for the work on generic n8n nodebuilders for OpenAPI specs.

