# Documentation
- Class name: WLSH_Build_Filename_String
- Category: WLSH Nodes/text
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node generates a unique file name string by merging timestamp, model name, seed, and counter into a customizable template. It aims to create recognizable and organized file names for various applications.

# Input types
## Required
- filename
    - Base name, from which the final file name is constructed. It serves as a template for inserting other parameters.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- modelname
    - Name of the model, used to identify and include in the file name.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - A value to increase diversity and uniqueness of the file name.
    - Comfy dtype: INT
    - Python dtype: int
- counter
    - An integer, used to create a series of file names when used with the same base name and parameters.
    - Comfy dtype: SEED
    - Python dtype: int
- time_format
    - Defines the format for inserting the timestamp into the file name.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- filename
    - The final output is a formatted string representing the constructed file name, containing all the provided parameters.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
