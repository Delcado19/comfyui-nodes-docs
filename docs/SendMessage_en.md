
# Documentation
- Class name: SendMessage
- Category: SALT/Language Toolkit/Agents
- Output node: False

The SendMessage node is designed to facilitate communication between different agents. It achieves this by allowing one agent to send a message to another. To ensure the communication process does not alter the state of the original agent instances, this node clones both the receiver and sender agents, thereby preserving the integrity of the agents involved in the communication.

# Input types
## Required
- recipient
    - The agent that receives the message. Cloning this agent ensures the original agent's state is preserved after message delivery.
    - Comfy dtype: AGENT
    - Python dtype: AGENT
- sender
    - The agent that initiates the message. This agent is also cloned to maintain its original state after sending the message.
    - Comfy dtype: AGENT
    - Python dtype: AGENT
- message
    - The message content passed from sender to receiver. Supports multi-line input, allowing more complex and detailed messages.
    - Comfy dtype: STRING
    - Python dtype: STRING

# Output types
- recipient
    - The cloned receiver agent after receiving the message, demonstrating the agent's state post-receipt.
    - Comfy dtype: AGENT
    - Python dtype: AGENT
- sender
    - The cloned sender agent after sending the message, reflecting the agent's state after the communication process.
    - Comfy dtype: AGENT
    - Python dtype: AGENT


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SendMessage:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "recipient": ("AGENT",),
                "sender": ("AGENT",),
                "message": ("STRING", {
                    "multiline": True,
                    "default": "Hi"
                }),
            },
        }

    RETURN_TYPES = ("AGENT", "AGENT")
    RETURN_NAMES = ("recipient", "sender")

    FUNCTION = "add_info"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Agents"

    def add_info(self, recipient, sender, message):
        recipient = clone_conversable_agent(recipient)
        sender = clone_conversable_agent(sender)
        sender.send(message, recipient)
        return (recipient, sender)

```
