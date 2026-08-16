# Documentation
- Class name: VRGDG_MusicVideoPromptCreatorV3
- Category: VRGDG/Prompt Tools
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

🌀 VRGDG_MusicVideoPromptCreatorJson is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- character_description
    - The character_description input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- song_theme_style
    - The song_theme_style input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- pipe_separated_lyrics
    - The pipe_separated_lyrics input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- word_count_min
    - The word_count_min input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- word_count_max
    - The word_count_max input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- list_handling_mode
    - The list_handling_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prompt_structure_mode
    - The prompt_structure_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- environment
    - The environment input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- lighting
    - The lighting input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- camera_motion
    - The camera_motion input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- physical_interaction
    - The physical_interaction input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- facial_expression
    - The facial_expression input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- shots
    - The shots input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- outfit_rules
    - The outfit_rules input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- character_visibility
    - The character_visibility input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- story_mode
    - Advanced — using Gemini PRO is recommended
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- signal
    - The signal input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
## Optional
- custom_instructions
    - Optional: Enter your own custom prompt instructions. If filled, this will override the normal system instructions.
    - Comfy dtype: STRING
    - Python dtype: str
- Summary_File_Path
    - If provided, this summary will override the theme/style in story mode.
    - Comfy dtype: STRING
    - Python dtype: str
- summary_index
    - Which summary file to load (e.g. 2 loads summary2.json)
    - Comfy dtype: INT
    - Python dtype: int
- total_sets
    - Used to determine if the current run is the last one (which does not require summary output).
    - Comfy dtype: INT
    - Python dtype: int
- groups_in_last_set
    - Used in story mode to tell the LLM how many prompts to generate in the final run (e.g., if fewer than 16).
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- concatenated_string
    - The concatenated_string output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
