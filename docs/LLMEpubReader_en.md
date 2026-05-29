
# Documentation
- Class name: LLMEpubReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/some_repo/example

The LLMEpubReader node is dedicated to reading and converting Epub e-book files into a structured document format, facilitating processing and analysis of digital book content.

# Input types
## Required
- path
    - Specifies the path to the Epub e-book file to be read in the file system. This path is critical for locating and accessing the file for processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provides additional optional information that can be used to influence the reading process or pass extra parameters specific to the Epub file being processed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Returns the content of the Epub e-book file in the form of structured documents, making it available for further processing and analysis.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/some_repo/example)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
