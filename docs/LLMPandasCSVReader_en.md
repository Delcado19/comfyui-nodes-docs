
# Documentation
- Class name: LLMPandasCSVReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMPandasCSVReader node is specifically designed to read CSV files and convert them into llama_index Documents, while providing additional configuration options for joining rows and columns. By allowing custom join strategies, this node enhances flexibility in handling CSV data, making it suitable for a wide range of data preparation tasks.

# Input types
## Required
- path
    - Specifies the file path of the CSV file to be read, serving as the primary data source for the node. The validity of the path directly affects the node's ability to access and process the specified CSV file.
    - Comfy dtype: STRING
    - Python dtype: str
- concat_rows
    - Determines whether rows should be joined during the reading process, affecting how data is aggregated and presented in the output Documents. This option allows the data structure to be tailored to specific analysis requirements.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
- col_joiner
    - Specifies the string used to concatenate column values when joining rows, affecting the format and readability of the concatenated data. This parameter allows precise control over how data is presented.
    - Comfy dtype: STRING
    - Python dtype: str
- row_joiner
    - Specifies the string used to concatenate row values, affecting the structure and organization of the output Documents. This allows custom data formatting, improving the node's adaptability across various data analysis scenarios.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- extra_info
    - Allows inclusion of additional user-defined information to be processed alongside the CSV data. This parameter can enrich the output Documents with context or metadata, increasing the node's utility in complex data processing tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Outputs the processed data as llama_index Documents, ready for further processing or analysis. The structure and content of these Documents are shaped by the input parameters, enabling customized data preparation.
    - Comfy dtype: DOCUMENT
    - Python dtype: Document


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
