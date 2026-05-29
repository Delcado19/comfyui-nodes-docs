
# Documentation
- Class name: LLMCSVReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/jmiller641/SALT/blob/dev/ComfyUI-SALT/saltDocumentation.md

The LLMCSVReader node is specifically designed to read CSV files and convert them into a format suitable for llama_index document processing. It allows customization of the reading process through various parameters, enabling it to handle different CSV structures and include additional information.

# Input types
## Required
- path
    - Specifies the file path of the CSV file to be read. This is crucial for locating the file that needs to be processed.
    - Comfy dtype: STRING
    - Python dtype: str
- concat_rows
    - Determines whether rows in the CSV file should be concatenated. This affects the structure of the data in the resulting document.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
## Optional
- extra_info
    - Allows additional information to be included in JSON string format, which can be used to provide extra context or configuration for the reading process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - The output is a Document or a list of Documents, depending on the reading configuration, representing the structured data extracted from the CSV file.
    - Comfy dtype: DOCUMENT
    - Python dtype: Document or List[Document]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jmiller641/SALT/blob/dev/ComfyUI-SALT/saltDocumentation.md)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
