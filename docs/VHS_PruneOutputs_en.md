# Documentation
- Class name: PruneOutputs
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: True
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The method 'prune_outputs' is designed to manage and clean up intermediate and utility files generated in video processing workflows. It intelligently decides which files to delete based on specified options, ensuring the directory structure stays organized and only necessary files are retained.

# Input types
## Required
- filenames
    - The parameter 'filenames' is a list containing file names that the node will operate on. It plays a key role in identifying files to prune. The node uses this list to determine the scope of its operation and execute the file deletion process.
    - Comfy dtype: List[str]
    - Python dtype: List[str]
- options
    - The parameter 'options' determines the pruning behavior of the node. It specifies whether to delete intermediate files, utility files, or both. This parameter is crucial because it guides the node's decision process on which files to delete.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- None
    - The method 'prune_outputs' does not produce any output, since its main function is to delete files. It is a utility method that focuses on maintaining the cleanliness and organization of the file system, rather than generating new data or results.
    - Comfy dtype: NoneType
    - Python dtype: NoneType

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
