
# Documentation
- Class name: AV_LLMMessage
- Category: ArtVenture/LLM
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_LLMMessage node is designed to create and manage messages for a language model chat interface. It supports text and optional images, enabling rich, interactive conversations between users and the system or assistant. This node plays a crucial role in building the conversation structure, ensuring messages are correctly formatted and adhere to the specified roles.

# Input types
## Required
- role
    - Specify the role of the message, such as "system", "user", or "assistant", which affects how the message is processed and displayed in the chat flow.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- text
    - The main content of the message, which can be a user query, a system response, or an assistant reply. Supports multiline text, allowing detailed and comprehensive messages.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- image
    - Optional image to accompany the text message, enhancing interaction with visual content. The expected image format is a Tensor, which will be converted to base64 for inclusion.
    - Comfy dtype: IMAGE
    - Python dtype: Optional[Tensor]
- messages
    - Existing list of messages; the new message will be added to this list. This allows accumulation and management of the conversation history.
    - Comfy dtype: LLM_MESSAGE
    - Python dtype: Optional[List[LLMMessage]]

# Output types
- messages
    - Returns the list of messages, including the newly created message, facilitating the continuation and tracking of the conversation flow.
    - Comfy dtype: LLM_MESSAGE
    - Python dtype: List[LLMMessage]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMMessageNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "role": (["system", "user", "assistant"],),
                "text": ("STRING", {"multiline": True}),
            },
            "optional": {"image": ("IMAGE",), "messages": ("LLM_MESSAGE",)},
        }

    RETURN_TYPES = ("LLM_MESSAGE",)
    RETURN_NAMES = ("messages",)
    FUNCTION = "make_message"
    CATEGORY = "ArtVenture/LLM"

    def make_message(self, role, text, image: Optional[Tensor] = None, messages: Optional[List[LLMMessage]] = None):
        messages = [] if messages is None else messages.copy()

        if role == "system":
            if isinstance(image, Tensor):
                raise Exception("System prompt does not support image.")

            system_message = [m for m in messages if m.role == "system"]
            if len(system_message) > 0:
                raise Exception("Only one system prompt is allowed.")

        if isinstance(image, Tensor):
            pil = tensor2pil(image)
            content = pil2base64(pil)
            messages.append(LLMMessage(role=role, text=text, image=content))
        else:
            messages.append(LLMMessage(role=role, text=text))

        return (messages,)

```
