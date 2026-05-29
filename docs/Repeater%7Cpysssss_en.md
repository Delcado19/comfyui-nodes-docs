# Repeater 🐍
## Documentation
- Class name: Repeater|pysssss
- Category: utils
- Output node: False
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

The Repeater node is designed to repeat a given input source a specified number of times, outputting either a single node or multiple nodes depending on the selected mode. It abstracts the functionality of repeating data, facilitating the creation of multiple data instances or nodes within a workflow.

## Input types
### Required
- source
    - Represents the source input of the data to be repeated. Its role is crucial because it determines the base content that will be repeated according to the specified number of repetitions.
    - Comfy dtype: *
    - Python dtype: AnyType
- repeats
    - Specifies the number of times the source input should be repeated. This parameter directly affects the output, determining how many copies of the data are produced.
    - Comfy dtype: INT
    - Python dtype: int
- output
    - Determines whether the repeated data should be output as a single node or multiple nodes, affecting the structure of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- node_mode
    - Controls whether the repeated node is reused or newly created, influencing how the node is added to the graph during serialization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Output types
- *
    - Comfy dtype: *
    - The output is a list of repeated data, which can have different structures depending on the output and node_mode parameters.
    - Python dtype: List[AnyType]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/pythongosssss/ComfyUI-Custom-Scripts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
