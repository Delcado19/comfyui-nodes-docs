# Documentation
- Class name: WLSH_Save_Prompt_File
- Category: WLSH Nodes/IO
- Output node: True
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node aims to save text data to a file, providing a means of persisting information in a human-readable format. It encapsulates the process of writing text to a file, ensuring data is stored in a specified directory with a user-defined filename. The node's primary function is to facilitate the creation and maintenance of text records, which is essential for documenting experiments, recording outputs, or archiving data.

# Input types
## Required
- filename
    - The filename parameter is critical for specifying the name of the output file. It determines how the saved data is referenced, serving as a key part of the file's identity, allowing users to easily locate and reference the saved text data.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter contains text representing the positive aspects or desired outcomes of the data being saved. It is important for providing context and understanding the purpose behind the saved information.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- path
    - The path parameter defines the directory where the file will be saved. It plays an important role in organizing the file system and ensuring saved files are accessible and well-structured in the desired location.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative parameter includes text representing undesired outcomes or aspects to be avoided. It is critical for clarifying the intent and goals of the data, ensuring the saved content is correctly interpreted.
    - Comfy dtype: STRING
    - Python dtype: str
- modelname
    - The model name parameter specifies the name of the model used to generate the data. It is important for tracking the data source and may be useful for future reference and analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed parameter is used to ensure reproducibility of results. It is important for maintaining consistency across different runs of the same process, which is essential for reliable and verifiable results.
    - Comfy dtype: INT
    - Python dtype: int
- counter
    - The counter parameter is used to append a numerical value to the filename, which is important for distinguishing multiple saves or versions of the same data.
    - Comfy dtype: INT
    - Python dtype: int
- time_format
    - The time format parameter specifies the format used for timestamping filenames. It is important for incorporating a unique and recognizable element based on creation time, which is useful for chronological sorting and locating files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text_data
    - The text data output represents the saved content, which includes positive and negative prompts along with any specified additional information. It is the result of the node's operation and serves as a record of the persisted data.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
