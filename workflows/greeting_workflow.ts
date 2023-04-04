import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { GreetingFunctionDefinition } from "../functions/greeting_function.ts";

/**
 * A workflow is a set of steps that are executed in order.
 * Each step in a workflow is a function.
 * https://api.slack.com/future/workflows
 */
const GreetingWorkflow = DefineWorkflow({
  callback_id: "greeting_workflow",
  title: "Send a greeting",
  description: "Send a greeting to channel",
});

const greetingFunctionStep = GreetingWorkflow.addStep(
  GreetingFunctionDefinition,
  {},
);

GreetingWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: "C02SV0FPLGP",
  message: greetingFunctionStep.outputs.greeting,
});

export default GreetingWorkflow;
