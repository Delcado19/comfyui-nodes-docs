
# Documentation
- Class name: `AddTool`
- Category: `SALT/Language Toolkit/Agents`
- Output node: `False`

The AddTool node aims to enhance the capabilities of a session agent by registering new functions or tools with it. It abstracts the process of adding additional capabilities to the agent, thereby enabling a more dynamic and versatile interaction experience.

# Input types
## Required
- tool
    - Represents the tool to be added to the agent, encapsulating the tool's functionality, name, and description.
    - Comfy dtype: TOOL
    - Python dtype: Dict[str, Any]
- assistant
    - The primary session agent to which the tool will be added, serving as the main interface for interaction.
    - Comfy dtype: AGENT
    - Python dtype: AGENT

## Optional
- executor
    - An optional secondary agent that can execute the tool's functionality. If not specified, defaults to the primary agent.
    - Comfy dtype: AGENT
    - Python dtype: AGENT

# Output types
- assistant
    - The enhanced session agent, now equipped with the capabilities of the new tool.
    - Comfy dtype: AGENT
    - Python dtype: AGENT
- executor
    - The agent responsible for executing the tool's functionality, which may be the same as the primary agent.
    - Comfy dtype: AGENT
    - Python dtype: AGENT


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AddTool:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "tool": ("TOOL",),
                "assistant": ("AGENT",),
            },
            "optional": {
                "executor": ("AGENT",),
            }
        }

    RETURN_TYPES = ("AGENT", "AGENT",)
    RETURN_NAMES = ("assistant", "executor",)

    FUNCTION = "create_tool"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Agents"

    def create_tool(self, tool, assistant, executor=None):
        assistant = clone_conversable_agent(assistant)
        if executor is None:
            executor = assistant
        # Register the calculator function to the two agents.
        register_function(
            tool["function"],
            caller=assistant,
            executor=executor,
            name=tool["name"],
            description=tool["description"],
        )
        return (assistant, executor,)

```
