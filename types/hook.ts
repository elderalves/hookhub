export type HookCategory =
  | "Session Lifecycle"
  | "Prompt & Workflow"
  | "Tool Execution"
  | "Permissions & Notifications"
  | "Agent Teams"
  | "File & Directory"
  | "Context"
  | "Git";

export type HookType = "command" | "http" | "prompt" | "agent";

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  event: string;
  hookType: HookType;
  description: string;
  repoUrl: string;
  repoName: string;
  author?: string;
}
