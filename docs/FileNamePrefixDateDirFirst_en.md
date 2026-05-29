# Documentation
- Class name: FileNamePrefixDateDirFirst
- Category: Mikey/Meta
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

FileNamePrefixDateDirFirst node generates a file name prefix based on the current date and time, offering options to include a custom directory and text. It provides a systematic approach to naming files that can be customized to meet specific requirements.

# Input types
## Required
- date
- The date parameter determines whether to include the current date in the file name prefix. It plays a key role in ensuring the generated prefix reflects the desired time context.
    - Comfy dtype: STRING
    - Python dtype: str
- date_directory
- The date_directory parameter controls whether a directory named after the current date should be added to the file name prefix. This is essential for organizing files within a date-based hierarchy.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- custom_directory
- The custom_directory parameter allows a user-defined directory to be included in the file name prefix. It enhances the node's flexibility by enabling directory customization.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_text
- The custom_text parameter permits adding specific text to the file name prefix. It offers a way to incorporate unique identifiers or descriptive text into the prefix.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- filename_prefix
- The file name prefix output provides the generated prefix that can be used as part of a file name. It contains the date, directory, and custom text elements specified by the input parameters.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
