# Documentation
- Class name: ShowCachedInfo
- Category: InspirePack/Backend
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node displays cache information, categorizing cache contents by string and numeric keys to provide a clear, ordered view.

# Input types
## Required
- cache_info
    - The `cache_info` parameter is the textual representation of the cache; the node formats and displays it. This is critical for the node's operation because it determines the content shown to the user.
    - Comfy dtype: STRING
    - Python dtype: str
- unique_id
    - The `unique_id` parameter uniquely identifies the node instance within the system, ensuring the correct cache information is displayed to the intended user.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
## Optional
- key
    - The `key` parameter filters cache information by a specific key. Its importance lies in allowing users to focus on particular cache entries.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- feedback
    - The `feedback` parameter contains information about the cache data related to the node's operation and display. Its importance is that it provides a record of the node's execution.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
