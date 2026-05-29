
# Documentation
- Class name: IF_SaveText
- Category: ImpactFrames💥🎞️
- Output node: True
- Repo Ref: https://github.com/chrisgoringe/Custom-classifier-nodes/tree/main

The IF_SaveText node is designed to process and optionally save text data related to interactions, such as questions, answers, and negative feedback, and supports multiple file formats. The node's functions include generating a unique identifier for each interaction, formatting interaction data, and saving data to files in specified formats and modes, thereby enhancing data management and retrieval capabilities for further analysis or record keeping.

# Input types
## Required
- question_input
    - The question part of the interaction, serving as a key input for generating interaction records.
    - Comfy dtype: STRING
    - Python dtype: str
- response_input
    - The answer to the question, essential for recording the interaction.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_input
    - Negative feedback or input related to the interaction, providing additional context.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- save_file
    - A boolean flag indicating whether to save the interaction data to a file.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- file_format
    - Specifies the file format for saving interaction data (csv, txt, json).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_mode
    - Determines how the file is saved: create a new file, overwrite an existing file, or append to an existing file.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- Question
    - Comfy dtype: STRING
    - Returns the question part of the interaction.
    - Python dtype: str
- Response
    - Comfy dtype: STRING
    - Returns the answer part of the interaction.
    - Python dtype: str
- Negative
    - Comfy dtype: STRING
    - Returns the negative feedback or input related to the interaction.
    - Python dtype: str
- Turn
    - Comfy dtype: STRING
    - Returns a formatted string containing the interaction's unique identifier, question, answer, and negative input.
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/chrisgoringe/Custom-classifier-nodes/tree/main)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
