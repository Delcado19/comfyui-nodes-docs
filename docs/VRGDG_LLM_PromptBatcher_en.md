# Documentation
- Class name: VRGDG_LLM_PromptBatcher
- Category: VRGDG/LLM
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

VRGDG_LLM_PromptBatcher is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- style_theme_block
    - The style_theme_block input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- story_summary
    - The story_summary input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- story_groups_json
    - The story_groups_json input is used by this node during execution.
    - Comfy dtype: JSON
    - Python dtype: object
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- output_subfolder
    - The output_subfolder input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- file_prefix
    - The file_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- manual_index
    - The manual_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- enable_auto_queue
    - The enable_auto_queue input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- trigger
    - The trigger input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
## Optional
- lyric_segments_json
    - The lyric_segments_json input is used by this node during execution.
    - Comfy dtype: JSON
    - Python dtype: object

# Output types
- prompt
    - The prompt output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- batch_index
    - The batch_index output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- total_batches
    - The total_batches output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- is_final_batch
    - The is_final_batch output is produced by this node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- output_folder
    - The output_folder output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- file_prefix
    - The file_prefix output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
