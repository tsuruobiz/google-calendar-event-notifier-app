import { Trigger } from "deno-slack-api/types.ts";
import GreetingWorkflow from "../workflows/greeting_workflow.ts";

/**
 * Triggers determine when workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/future/triggers
 */
const greetingTrigger: Trigger<typeof GreetingWorkflow.definition> = {
  type: "shortcut",
  name: "Send a greeting",
  description: "Send greeting to channel",
  workflow: "#/workflows/greeting_workflow",
};

export default greetingTrigger;
