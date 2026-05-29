
# Documentation
- Class name: AV_ClaudeApi
- Category: ArtVenture/LLM
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_ClaudeApi node is used to create an API interface for interacting with the Claude language model. It allows configuring and leveraging Claude's AI capabilities by specifying the API key, endpoint, and version information.

# Input types
## Required
- claude_api_key
    - The API key for the Claude service, which is essential for authentication and accessing the language model's functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- endpoint
    - The URL endpoint of the Claude API, used to specify the base path for API requests. If not provided, the official Claude API endpoint is used by default.
    - Comfy dtype: STRING
    - Python dtype: str
- version
    - The Claude API version to use, which can control the accessible features or improvements. The latest version supported by the node is used by default.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- llm_api
    - Provides an interface to the Claude language model, encapsulating the API key, endpoint, and version for sending requests.
    - Comfy dtype: LLM_API
    - Python dtype: ClaudeApi


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
