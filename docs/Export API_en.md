# Documentation
- Class name: WAS_Export_API
- Category: WAS Suite/Debug
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Export_API node facilitates exporting prompt data in a structured and organized manner, ensuring the output is saved with proper naming conventions and file paths for easy retrieval and further analysis.

# Input types
## Required
- save_prompt_api
    - This parameter controls whether the API should save prompt data. This is important for maintaining a record of prompts used in the workflow, which is crucial for debugging and review purposes.
    - Comfy dtype: COMBO[[['true', 'true']]]
    - Python dtype: str
- output_path
    - The output path is essential as it defines the directory where prompt data will be saved. This ensures data is organized and easy to reference in the future.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_prefix
    - The filename prefix provides a consistent starting point for naming exported files. It helps categorize and identify files more effectively within the output directory.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_delimiter
    - The delimiter is a key element that separates the filename prefix from the numeric counter, ensuring exported files have a systematic and orderly naming convention.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_number_padding
    - The number padding parameter determines the format of the numeric counter, ensuring filenames are neatly aligned and easy to sort by chronological or numerical order.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- parse_text_tokens
    - When enabled, it parses and replaces tokens in the prompt text with corresponding values, which is essential for customizing and personalizing the exported data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- ui
    - The output provides a JSON representation of the formatted prompt data, which is critical for ensuring the exported information is both structured and machine-readable.
    - Comfy dtype: COMBO[[{'string': 'Prompt JSON'}]]
    - Python dtype: Dict[str, str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
