
# Documentation
- Class name: ConvertAgentAsTool
- Category: SALT/Language Toolkit/Agents
- Output node: False

This node aims to convert a conversational agent into a tool usable in broader systems. It encapsulates the agent's functionality so it can be invoked as a callable tool with a specific interface, extending the agent's capabilities to new application scenarios.

# Input types
## Required
- agent
    - A conversational agent that needs to be converted into a tool. The agent's conversational capabilities will be redirected to fit the tool interface's functionality, enabling integration into larger workflows.
    - Comfy dtype: AGENT
    - Python dtype: ConversableAgent

# Output types
- tool
    - The converted conversational agent, now structured as a callable tool. This tool retains the agent's conversational capabilities but is repackaged for direct invocation within system workflows.
    - Comfy dtype: TOOL
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConvertAgentAsTool:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "agent": ("AGENT",),
            },
        }

    RETURN_TYPES = ("TOOL",)
    RETURN_NAMES = ("tool",)

    FUNCTION = "create_tool"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Agents"

    def create_tool(self, agent):
        agent = clone_conversable_agent(agent)
        def agent_call(message: Annotated[str, "Message to ask the assistant."]):
            return agent.generate_reply(messages=[{"content": message, "role": "user"}])

        tool = {
            "name": "agent_call",
            "description": agent.description,
            "function": agent_call,
        }
        return (tool,)

```
