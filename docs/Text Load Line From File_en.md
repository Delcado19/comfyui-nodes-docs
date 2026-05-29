# Documentation
- Class name: WAS_Text_Load_Line_From_File
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Load_Line_From_File node is designed to read and process text lines from a specified file. It can handle single or multiple lines of text and provides the ability to load text by index or automatically based on a counter. The node also maintains a history of accessed text files, making it easy to retrieve previously loaded text data.

# Input types
## Required
- file_path
    - The file_path parameter specifies the location of the text file to be read. This is a critical parameter because the node's operation depends on successfully accessing the file at this path. Any error in the file path will prevent the node from performing its intended function.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- dictionary_name
    - The dictionary_name parameter defines the key under which the loaded text lines will be stored in the result dictionary. It allows users to label text data for easier reference and organization within the application context.
    - Comfy dtype: STRING
    - Python dtype: str
- label
    - The label parameter is used to identify and manage different text batches within the application. It helps track and organize the text data flow in the system, especially when multiple text sources are involved.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - The mode parameter determines the method by which the node retrieves lines from the text file. It can be set to 'automatic' for sequential access, or 'index' to load a specific line based on its position in the file.
    - Comfy dtype: COMBO[automatic, index]
    - Python dtype: str
- index
    - When mode is set to 'index', the index parameter applies. It specifies the zero-based position of the line to be loaded from the text file. This allows direct access to a specific line in the file.
    - Comfy dtype: INT
    - Python dtype: int
- multiline_text
    - The multiline_text parameter provides an alternative way to supply text to the node. Instead of reading from a file, the node will directly process the text provided through this parameter. This is particularly useful for dynamic or inline text processing scenarios.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Output types
- line_text
    - The line_text output contains the actual text line retrieved from the file according to the specified mode and index. This is the primary output of the node's processed text data.
    - Comfy dtype: STRING
    - Python dtype: str
- dictionary
    - The dictionary output is a collection of text lines indexed by the dictionary_name parameter. It serves as a structured way to access and use text data within the application.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[str]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
